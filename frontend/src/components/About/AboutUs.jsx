import React, { Fragment, useState , useEffect } from 'react';
import './AboutUs.css';
import { IoLogoYoutube } from "react-icons/io";
import { Dialog, DialogContent } from '@mui/material';
import {Link} from 'react-router-dom';
import ClientCard from './ClientCard.jsx';
import Slider from "react-slick";
import TeamMembersCard from './TeamMembersCard.jsx';
import logo from '../../assets/logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { allFeedbackAction, clearErrors  } from "../../actions/feedbackActions";
import { useDispatch , useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader.jsx';
import { allCardAction } from "../../actions/cardActions";
import {toast} from 'react-toastify';
import { allTeamAction } from "../../actions/teamActions";
import video from '../../assets/aboutUs.mp4';
import Metadata from '../layout/Metadata/Metadata.jsx';


const AboutUs = () => {

  const dispatch = useDispatch();

  const {  loading , error:FeedError, feedbacks:allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const {  error:cardError, cards } = useSelector((state) => state.allCards);
  const {  error:teamError, teams } = useSelector((state) => state.allTeams);
  


  var settings = {
    dots: false,
    infinite: true, // Enables looping
    slidesToShow: 4, // Number of slides visible
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, // Speed between transitions
    speed: 1000, // Transition speed
    cssEase: "linear", // Ensures smooth transition without pause
    pauseOnHover: true,
    variableWidth: false, // Prevents slide flickering
    fade: false, // Ensures smooth movement
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  




    const [open , setOpen] = useState(false);


   

    const submitReviewToggle = () => {
      open ? setOpen(false) : setOpen(true);
  }
  
  
    const feedbackSettings = {
      dots: true,
      infinite: true,
      slidesToShow: 1, // Show one feedback at a time
      slidesToScroll: 1,
      autoplay: true, 
      autoplaySpeed: 3000, // Adjust speed between transitions
      speed: 1000, // Transition speed
      cssEase: "ease-in-out", // Smooth transition
      fade: true, // Ensures smooth fade effect
      arrows: false, // Hide arrows if not needed
      pauseOnHover: true
    };

 
         useEffect(()=>{
                  AOS.init()

                  if(FeedError){
                    toast.error(FeedError);
                    dispatch(clearErrors());
                  }
                  if(cardError){
                    toast.error(cardError);
                    dispatch(clearErrors());
                  }
                  if(teamError){
                    toast.error(teamError);
                    dispatch(clearErrors());
                  }
                  dispatch(allFeedbackAction());
                  dispatch(allCardAction());
                  dispatch(allTeamAction());
                },[dispatch, FeedError, cardError, teamError]); 
    
  return (
            <Fragment>
              {
                loading ? (<Loader />) : (
                    <Fragment>
                     <Metadata title={`About Us - The Learning Hub`} /> 
          <div className="aboutUsContainer">
                  <div className='topAffiliationContainer' >
                 <div className="video-background">
                   <video src={video} autoPlay loop muted playsInline />
                 </div>
                  </div>
                <div className='firstMidContainer'>
                    <div className="introduction-container" data-aos="fade-down">
      <h1 className="title" data-aos="fade-down">Who Are We</h1>
   <p className="affiliation-intro"  data-aos="fade-down">
      <strong>The Learning Hub (TLH)</strong> is an international ed-tech platform committed to transforming how students learn and grow in today’s world. TLH bridges the gap between traditional education and future-ready skills
    </p>

       <p className="affiliation-intro" data-aos="fade-down" >
  With a presence across the <strong>MENA region and South Asia</strong>, TLH delivers engaging, tech-enabled learning to students in the <strong>UAE, Saudi Arabia, Qatar, Bahrain, Pakistan, India, Bangladesh, and beyond.</strong> Through certified online schooling, personalized tutoring, and immersive STEAM-based programs, TLH provides learners with the tools to succeed in a fast-changing, digital world.
      </p>

      <h1 className="title" data-aos="fade-down">Our Mission
</h1>

 <p className="affiliation-intro" data-aos="fade-down" >
To make modern, meaningful education accessible to every learner, anywhere in the world, through innovative teaching, technology-driven programs, and personalized support that nurtures curiosity, creativity, and lifelong confidence.

      </p>

        <h1 className="title" data-aos="fade-down">Our Vision

</h1>

<p className="affiliation-intro" data-aos="fade-down" >
To be a global leader in online education by shaping future-ready learners equipped with 21st-century skills, scientific thinking, and a passion for innovation.

      </p>

        <h1 className="title" data-aos="fade-down">Our Core Values
</h1>

    
      <ul className="affiliation-list" >
        <li data-aos="fade-down">
          <strong>Innovation</strong> – Constantly evolving to offer forward-thinking, relevant, and tech-driven learning experiences.
        </li>
        <li data-aos="fade-down">
          <strong>Integrity</strong> – Building trust through transparency, accountability, and ethical education practices.
        </li>
        <li data-aos="fade-down">
          <strong>Inclusivity</strong> – Ensuring every learner has equal access to quality education, regardless of background or location.
        </li>
        <li data-aos="fade-down">
          <strong>Empowerment</strong> –  Equipping students with the tools, skills, and confidence they need to succeed in the real world.
        </li>
        <li data-aos="fade-down">
          <strong>Collaboration</strong> –  Working together with educators, families, and partners to create a strong and supportive learning community.
        </li>
      </ul>

    
    </div>
     </div>   
        <div className='secondMidContainer'>
                    <div className='secondMidContainer1'>
                        <h1>Behind the Vision. </h1>
       
          
    
           
                         <button className="button">
                         <IoLogoYoutube onClick={submitReviewToggle} /> 
                            </button>
    
                         
                     
                           <Dialog
  open={open}
  onClose={submitReviewToggle}
  className="dialogBox"
>
  <DialogContent>
    <iframe
      width="520"
      height="315"
      src="https://www.youtube.com/embed/q8NjbC4uGW4?si=IXLXpGdfxXw6Tfa4"
      title="YouTube video player"
      style={{ border: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className='iframeTag'
    ></iframe>
  </DialogContent>
</Dialog>



            </div>
              <div className='secondMidContainer2'>
              <div >
    
              <Slider {...feedbackSettings} className="feedback-carousel">
    {allFeedbacks  && allFeedbacks.map((feedback, index) => (
      <div className="carouselFeedContainer" key={feedback._id}>
        <i>{feedback.description}</i>
        <img src={feedback.avatar.url} alt={feedback.name} />
        <b>{feedback.name}</b>
        <p>{feedback.title}</p>
      </div>
    ))}
  </Slider>
    </div>
              <div>
                   {
                  cards && cards.map((card)=>(
                    <ClientCard card={card} key={card._id}  />

                  ) )
                }
           
           
              </div>
          </div>
            
    
         </div>
                <div className='thirdMidContainer'>
                    <div>
                    <p data-aos = "fade-down">Our team members</p>
                    <h1 data-aos = "fade-down">Experienced People</h1>
                    <h3 data-aos = "fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                    </div>
                   
                  
                       <Slider {...settings} className='bhai' data-aos="fade-down">
   {teams && teams.map((member) => (
    <TeamMembersCard member={member} key={member._id} />
  ))}
</Slider>


                
                  
             
                </div>
            </div>
            <div className="secondAboutContainer">
            <div className='aboutBottomContainer'>
                    <h1>We have the solutions you are seeking.</h1>
                    <Link to={`/contact-us`}>Discover more</Link>
                </div>
            </div>
    
              </Fragment>
                )
              }
            </Fragment>
            )
          }
      


export default AboutUs