import React, { Fragment , useEffect , useState } from 'react';
import './ContactPartnerWithUs.css';
import { CiMail } from "react-icons/ci";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useDispatch , useSelector} from 'react-redux';
import { createPartnerContactUsAction , clearErrors} from '../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../constants/contactUsContants';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader';
import Metadata from '../layout/Metadata/Metadata';




const ContactPartnerWithUs = () => {

   const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [message, setMessage] = useState("");
    const [companyName, setCompanyName] = useState("");

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.createContactUs);


    const contactSubmitHandler = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("name", name);
      myForm.set("email", email);
      myForm.set("country", country);
      myForm.set("message", message);
      myForm.set("companyName", companyName);
      
      dispatch(createPartnerContactUsAction(myForm));
    }

      useEffect(()=>{
            AOS.init()

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
                setCompanyName("");
                setMessage("");
                      
                    }
          },[success, error, dispatch]) 
   
  return (
  <Fragment>
    {
      loading ? (<Loader/>) : (
        <Fragment>
        <Metadata title="Partner With Us - The Learning Hub" />

        <div className="contactPartnerContainer">
          <div className='uppercontactPartnerContainer'>
          {/* 
            <h1 data-aos="fade-down">Become a TLH Partner Today</h1>
            <p data-aos="fade-down">Together, let’s expand access to quality STEAM education worldwide
            </p>
            */}
          </div>
          <div className='middlecontactPartnerContainer'>
            <h1 data-aos="fade-down">Partner with Us</h1>
            <form className='contactUsPartnerForm'data-aos="fade-down" onSubmit={contactSubmitHandler} >
              <div >
                <input type="text" placeholder='Full Name' required value={name} onChange={(e)=>setName(e.target.value)} />
              </div>
              <div>
                <input type="email" placeholder='Business Email' required value={email} onChange={(e)=>setEmail(e.target.value)} />
              </div>
              <div>
                <input type="text" placeholder='Company Name' required  value={companyName} onChange={(e)=>setCompanyName(e.target.value)} />
              </div>
              <div >
                <input type="text" placeholder='Country' required value={country} onChange={(e)=>setCountry(e.target.value)} />
              </div>
              <div >
                <textarea placeholder='About Company ...' required rows={10} value={message} onChange={(e)=>setMessage(e.target.value)} />
              </div>
              <input type="submit" value="Send" className='contactPartnerBtn'  />
            </form>
          </div>
          <div className='lowercontactPartnerContainer'>
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
                <CiMail />
                <h1>Contact Us</h1>
                <p>Reach out to us</p>
                <h3>for more details</h3>
                <p className='bhai'>+352 621 508 645 </p>
                <p>ithelearninghub@gmail.com</p>
              </div>
              <div>
                <FaRegClock />
                <h1>Partner with Us</h1>
                <p>Reach out to us</p>
                <h3>for more details</h3>
                <p>Let's innovate together</p>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
      )
    }
  </Fragment>
  );
}

export default ContactPartnerWithUs;

