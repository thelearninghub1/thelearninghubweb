import React , {useState , useEffect, Fragment} from "react";
import './Home.css';
import laptopImage from '../../assets/landing1.jpg';
import { IoLogoYoutube } from "react-icons/io";
import { Dialog, DialogContent } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ClientCard from '../About/ClientCard';
import TeamMembersCard from '../About/TeamMembersCard';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/video.mp4';
import PartnerCard from '../Admission/PartnerCard';
import {useDispatch , useSelector} from 'react-redux';
import { allStudentAction , clearErrors } from "../../actions/studentAction";
import { allFeedbackAction } from "../../actions/feedbackActions";
import { allCardAction } from "../../actions/cardActions";
import {toast} from 'react-toastify';
import { allTeamAction } from "../../actions/teamActions";
import { allPartnerAction } from "../../actions/techActions";
import Loader from "../layout/Loader/Loader";
import Metadata from "../layout/Metadata/Metadata";
import { Link } from "react-router-dom";

const Home = () => {

  const dispatch = useDispatch();
  const { loading, error, feedbacks:allStudentFeedbacks } = useSelector((state) => state.allStudent);
  const {  error:FeedError, feedbacks:allFeedbacks } = useSelector((state) => state.allFeedbacks);
  const {  error:teamError, teams } = useSelector((state) => state.allTeams);
  const {  error:cardError, cards } = useSelector((state) => state.allCards);
  const {  error:partnerError,partners  } = useSelector((state) => state.allPartners);
 
  const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ];
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

  const textOptions = [
    "   LIVE Classes",  
    "   Federal Board Approved",
    "   British Aligned Curriculum",
    "   A/O Levels Tuitions",
  ];

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
}


 
    const [open , setOpen] = useState(false);
  
    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const typingSpeed = isDeleting ? 50 : 150; // Typing & deleting speed

     useEffect(() => {

  

                        AOS.init()

                      
      
        const currentWord = textOptions[index];
        let timeout;
    
        if (!isDeleting && text === currentWord) {
          timeout = setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else if (isDeleting && text === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % textOptions.length); // Move to next word
        } else {
          timeout = setTimeout(() => {
            setText((prev) =>
              isDeleting
                ? prev.slice(0, -1) // Remove last character
                : currentWord.slice(0, prev.length + 1) // Add next character
            );
          }, typingSpeed);
        }
    
        return () => clearTimeout(timeout);




    





      }, [text, isDeleting, index ]);


      useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
        if (FeedError) {
          toast.error(FeedError);
          dispatch(clearErrors());
        }
        if(teamError){
          toast.error(teamError);
          dispatch(clearErrors());
        }
        if(cardError){
            
            toast.error(cardError);
            dispatch(clearErrors());
        }
        if(partnerError){
            toast.error(partnerError);
            dispatch(clearErrors());
        }
        dispatch(allCardAction());
        dispatch(allTeamAction());
        dispatch(allPartnerAction())
        dispatch(allStudentAction());
        dispatch(allFeedbackAction())
      },[error, dispatch , FeedError , cardError,teamError,partnerError]);

    
  return (
     <Fragment>
      {
        loading ? (<Loader/>):(

          <Fragment>
                        <Metadata title={`The Learning Hub`}/>


          <div className="servicesDetailsContainer">

    <section className="hero">
    <video autoPlay loop muted playsInline className="background-video">
    <source src={video} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
      <div className="hero-content">
        <h4 className="subheading">Foundation Stage 1 to 12th Grade </h4>
      
        <h1 className="heading">Virtual School for Pakistani Parents in Subregions of MENA & Asia</h1>
        <h1 className="typing-text">
        We Offer 
        {text}
      <span className="cursor">|</span>
    </h1>
        <p className="description">
        Become lifelong learners with our STEAM lessons that cater students' success in academics and life.
        </p>

        
        <Link to={`/contact-us`} className="btn">Inquire Now</Link>
      </div>
      <div className="hero-image">
{/*  
        <img src={header} alt="Kid Reading" />

 */}    </div>
    </section>
   

         <div className="thirdApplyBottomContainer">
                   <div className="learn-portal-container">
           
       
             {/* Enrollment Button */}
             <section className="learn-enrollment" data-aos="fade-down">
               <button className="learn-enroll-btn">
                 ENROLL YOUR CHILD FOR SESSION 2025-26 AND BECOME PART OF THE LEARNING HUB.
               </button>
             </section>
       
             {/* Content Section */}
             <section className="learn-content-section" data-aos="fade-down">
               <div className="learn-text-content">
                 <h2 className="learn-highlight-title">Quality STEAM Online Ed-Tech at TLH:</h2>
            <div className="learn-description">

  <ul>
    <li>Accessible to all types of learners across the globe.</li>
    <li>Live virtual classrooms for interactive e-learning experiences.</li>
    <li>Comprehensive Learning Management System (LMS) support:</li>
    <ul>
      <li>Access study packs and learning materials remotely.</li>
      <li>Submit assignments easily through the platform.</li>
      <li>Participate in class discussions and collaborative activities.</li>
      <li>Track academic progress in an organized and efficient manner.</li>
    </ul>
  </ul>
</div>

                 <Link to={`/apply-now`} className="learn-apply-btn">APPLY NOW</Link>
               </div>
               <div className="learn-image-container">
  <iframe
      width="600"
      height="365"
      src="https://www.youtube.com/embed/AjBy6h_Xb2k?si=-Y4Hz-bDaUyG2hlK"
      title="YouTube video player"
      style={{ border: 0 }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className='iframeTag'
    ></iframe>               </div>
             </section>
           </div>
                   </div>
    </div>
     {/* Happy Students Section */}
     <section className="happy-students-section">
        <h2 className="happy-students-title" data-aos="fade-down">Happy Students</h2>
        <div className="video-container" data-aos="fade-down">
          { allStudentFeedbacks && allStudentFeedbacks.map((video) => (
            <iframe
              key={video._id}
              className="student-video"
              src={video.ytLink}
              title={video._id}
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </section>

      <div className="homeCenterContainer">
      <div className='secondMidContainer'>
                    <div className='secondMidContainer1' data-aos="fade-down">
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

              <div className='secondMidContainer2' data-aos="fade-down">
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
                    <h1 data-aos = "fade-down">Our Anchors</h1>
                    <h3 data-aos = "fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                    </div>
                   
                  
                       <Slider {...settings} className='bhai' data-aos="fade-down">
  {teams && teams.map((member) => (
    <TeamMembersCard member={member} key={member._id} />
  ))}
</Slider>


                
                  
             
                </div>
                   {/* Our Partners Section */}
      <div className='thirdMidContainer'>
                    <div>
                    <p data-aos = "fade-down">Our team Partners</p>
                    <h1 data-aos = "fade-down">Technology Partners</h1>
                    <h3 data-aos = "fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                    </div>
                   
                  
                       <Slider {...settings} className='bhai' data-aos="fade-down">
  {partners && partners.map((member) => (
    <PartnerCard member={member} key={member._id} />
  ))}
</Slider>


                
                  
             
                </div>
      </div>

      {/* Why Choose Learn Section */}
      <section className="why-choose-section">
        <h2 className="section-title" data-aos="fade-down">Why The Learning Hub ?</h2>
        <div className="why-choose-grid" data-aos="fade-down">
          {featured.map((feature) => (
            <div key={feature.id} className="why-choose-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

    </Fragment>
        )
      }
     </Fragment>

  );
};

export default Home;
