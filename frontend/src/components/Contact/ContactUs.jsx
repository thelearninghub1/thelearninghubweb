import React, { Fragment , useEffect, useState } from 'react';
import './ContactUs.css';
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useDispatch , useSelector} from 'react-redux';
import { createContactUsAction , clearErrors} from '../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../constants/contactUsContants';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader';
import Metadata from '../layout/Metadata/Metadata';

const ContactUs = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.createContactUs);



  const contactSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("country", country);
    myForm.set("message", message);
    
    dispatch(createContactUsAction(myForm));
  }
      useEffect(()=>{
        if (error) {
          toast.error(error);
          dispatch(clearErrors())
          
        }
        if (success) {
          toast.success("Message Sent Successfully")
          dispatch({type:CONTACT_US_RESET})
          // Reset form fields
    setName("");
    setEmail("");
    setCountry("");
    setMessage("");
          
        }
              AOS.init()
            },[error, dispatch,success]) 
     
  return (
  <Fragment>
    {
      loading ? (<Loader/>) : (
        <Fragment>
        <Metadata title="Contact Us - The Learning Hub" />

        <div className="contactContainer">
          <div className='upperContactContainer'>
          {/*  
          
            <h1 data-aos="fade-down">Speak To Us</h1>
            <p data-aos="fade-down">Get In Touch</p>
           */}
          </div>
          <div className='middleContactContainer'>
            <div>
              <h1 data-aos="fade-down">Contact Us</h1>
              <form className='contactUsForm' data-aos="fade-down" onSubmit={contactSubmitHandler}>
                <div>
                  <input type="text" placeholder='Full Name' required value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div>
                  <input type="email" placeholder='Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <div>
                  <input type="text" placeholder='Country' required value={country} onChange={(e)=>setCountry(e.target.value)} />
                </div>
                <div>
                  <textarea placeholder='Message ...' required rows={6} value={message} onChange={(e)=>setMessage(e.target.value)} />
                </div>
                <input type="submit" value="Send" className='contactBtn' />
              </form>
            </div>
            <div>
            
            </div>
          </div>
          <div className='lowerContactContainer'>
            <div>
              <h1>GET IN TOUCH</h1>
              <p>For all enquiries, please email us using the form above. We will respond within 24 hours!</p>
            </div>
            <div>
              <div>
                <IoLogoWhatsapp />
                <h1>Whatsapp Us</h1>
                <p>Reach out to us</p>
                <h3>for more details</h3>
                <p className='bhai'>+971 55 292 0583</p>
              </div>
              <div>
                <AiOutlinePhone />
                <h1>Call Us</h1>
                <p>Reach out to us</p>
                <h3>for more details</h3>
                <p className='bhai'>+352 621 508 645</p>
                <p>ithelearninghub@gmail.com</p>
  
              </div>
              <div>
                <FaRegClock />
                <h1>Partner with Us</h1>
                <p>Reach out to us</p>
                <h3>for more details</h3>
                <Link to={`/partner-with-us`}>Let's innovate together</Link>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      )
    }
  </Fragment>
  );
};

export default ContactUs;
