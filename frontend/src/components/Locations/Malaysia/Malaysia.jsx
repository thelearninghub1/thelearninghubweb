import React, { Fragment , useState , useEffect} from 'react';
import './Malaysia.css';
import Select from "react-select";
import countries from "world-countries";
import laptopImage from '../../../assets/location.gif';

import ClientCard from '../../About/ClientCard';
import { IoLogoYoutube } from "react-icons/io";
import { Dialog, DialogContent } from '@mui/material';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import PartnerCard from '../../Admission/PartnerCard';
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { allStudentAction , clearErrors } from "../../../actions/studentAction";
import Loader from '../../layout/Loader/Loader';
import { toast } from 'react-toastify';
import { allFeedbackAction } from "../../../actions/feedbackActions";
import { allCardAction } from "../../../actions/cardActions";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { allPartnerAction } from "../../../actions/techActions";
import { createCallBackAction } from '../../../actions/contactUsAction';
import { CONTACT_US_RESET } from '../../../constants/contactUsContants';
import Metadata from '../../layout/Metadata/Metadata';
import video from '../../../assets/malaysia.mp4';



// Format countries for dropdown
const formattedCountries = countries.map((country) => ({
  value: country.cca2,
  label: `${country.name.common} (${country.cca2})`,
  flag: `https://flagcdn.com/w40/${country.cca2.toLowerCase()}.png`,
}));

const textOptions = [
  "Online",
  "Tech",
  "Without Books",
  "From Home",
];
const Malaysia = () => {
    const programs = [
    "Online schooling",
"One to One tutoring ",
"O/A levels tuitions",
"Grade 9 and 10 Federal Board",
"Coding",
"Abacus Mathematics"
]


const [name,setName] = useState("")
const [email,setEmail] = useState("")
const [country, setCountry] = useState(""); // safe to use null
const [program,setProgram] = useState("")
const [phoneNo,setPhoneNo] = useState("")
const [WhatsAppNo,setWhatsAppNo] = useState("")


    const dispatch = useDispatch();
      const {  error:FormError, success } = useSelector((state) => state.createContactUs);
  
    const { loading, error, feedbacks:allStudentFeedbacks } = useSelector((state) => state.allStudent);
    const {  error:FeedError, feedbacks:allFeedbacks } = useSelector((state) => state.allFeedbacks);
    const {  error:cardError, cards } = useSelector((state) => state.allCards);
    const {  error:partnerError,partners  } = useSelector((state) => state.allPartners);
    const {error:featureError,afiliations} = useSelector((state)=>state.allAffiliation);
  
  

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 50 : 150; // Typing & deleting speed

  useEffect(() => {
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
  }, [text, isDeleting, index]);

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



 
    const handleSubmit = (e) => {
      e.preventDefault();
      const myForm = new FormData();
      myForm.set("name",name);
      myForm.set("email",email);
      myForm.set("program",program);
      myForm.set("phoneNo",phoneNo);
      myForm.set("WhatsAppNo",WhatsAppNo);
  
  myForm.set("country", country?.label ?? "");
  
  
      dispatch(createCallBackAction(myForm))
    };
  const [open , setOpen] = useState(false);
  
  
     
  
      const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
    }

   const featured = [
    { id: 1, title: "No Physical Barriers", description: " Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ]; 
  
    
useEffect(()=>{
    
                                  AOS.init()
              if (error) {
                    toast.error(error);
                    dispatch(clearErrors());
                  }
                  if (FeedError) {
                    toast.error(FeedError)
                    dispatch(clearErrors())
                  }
                  if (cardError) {
                    toast.error(cardError)
                    dispatch(clearErrors())
                    
                  }
                  if (partnerError) {
                    toast.error(partnerError)
                    dispatch(clearErrors())
    
                  }
                    if (featureError) {
                    toast.error(featureError)
                    dispatch(clearErrors())
    
                  }
                  if(FormError){
                              toast.error(FormError);
                              dispatch(clearErrors());
                          }
                             if (success) {
                      toast.success(`Thank you. Our team will contact you soon!`);
                      dispatch({type:CONTACT_US_RESET})
                  // Reset Fields
                      setName("");
                      setEmail("");
                      setCountry("");
                      setPhoneNo("");
                      setProgram("");
                      setWhatsAppNo("");
                  
                            
                          }
                  dispatch(allCardAction())
                  dispatch(allStudentAction())
                  dispatch(allFeedbackAction())
                  dispatch(allPartnerAction())
    
        },[error,dispatch,FeedError,FormError,success,cardError,partnerError,featureError])
        

  return (

      <Fragment>
        {
          loading ? (<Loader/>):(
              <Fragment>
                <Metadata title={`Malaysia - The Learning Hub`} />
          <div className="servicesDetailsContainer">
            <div className='topMalaysiaContainer'>
                      <video autoPlay loop muted playsInline className="back-background-video">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
                          <div className="container"></div>
            <div className="container">
      <div className="left-section">
      
      </div>

      <div className="right-section">
        <h3>We are here to help</h3>
        <p>Speak with an Admission Counselor</p>
          <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Full Name*"
        required
        value={name}
        onChange={(e)=>setName(e.target.value)}
      />
      <input
        type="email"
        name="email"
        placeholder="Email*"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone*"
        required
        value={phoneNo}
        onChange={(e)=>setPhoneNo(e.target.value)}
      />
      <input
        type="text"
        name="whatsapp"
        placeholder="Whatsapp"
        value={WhatsAppNo}
        onChange={(e)=>setWhatsAppNo(e.target.value)}
      />
      <select name="program" required value={program} onChange={(e)=>setProgram(e.target.value)}>
        <option value="">-- Choose Program --</option>
        {programs && programs.map((program, index) => (
      <option key={index} value={program}>
        {program}
      </option>
    ))}
      </select>
  <Select
  options={formattedCountries}
  value={country || ""}
  onChange={(selectedOption) => setCountry(selectedOption)}
  placeholder="Select Country"
  className="country-select"
  getOptionLabel={(e) => (
    <div className="country-option">
      <img src={e.flag} alt="" width="20px" style={{ marginRight: 10 }} />
      {e.label}
    </div>
  )}
/>


     
      <button type="submit" className="request-btn">REQUEST A CALL BACK</button>
    </form>
      </div>
    </div>
            </div>
            
            <div className="thirdApplyBottomContainer">
            <div className="learn-portal-container">
    

      {/* Enrollment Button */}
      <section className="learn-enrollment" data-aos="fade-down">
        <button className="learn-enroll-btn">
          ENROLL YOUR CHILD FOR SESSION 2025-26 AND BECOME PART OF THE LEARN COMMUNITY.
        </button>
      </section>

      {/* Content Section */}
      <section className="learn-content-section" data-aos="fade-down">
    <div className="learn-text-content">
    
    

      <div className="introduction-container" data-aos="fade-down">
      <h1 className="title" data-aos="fade-down">Learning That Inspires</h1>
   <p className="affiliation-intro" data-aos="fade-down">
At TLH, we believe that learning should feel like an adventure. It should spark curiosity and build confidence. That’s why our programs are designed to be interactive, creative, and future-focused.      </p>

      <p className="affiliation-subtitle"  data-aos="fade-down">We offer:</p>
      <ul className="affiliation-list" >
        <li data-aos="fade-down">
          <strong>Certified online schooling</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Personalized tutoring</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Live study support and exam preperation</strong> 
        </li>
        <li data-aos="fade-down">
          <strong>Hands-on STEAM programs</strong> 
        </li>
      </ul>

      <p className="affiliation-text" data-aos="fade-down">
Whether you are a school looking to add VR/AR learning, a parent seeking a strong STEAM foundation, or a student ready to dive into coding, robotics, or design, we have something for you.      </p>
      <button className="learn-apply-btn">APPLY NOW</button>
  
    </div>


    </div>
    <div className="learn-image-container">
      <img src={laptopImage} alt="Learn Academy Platform" />
    </div>
  </section>
    </div>
            </div>
            <div className="thirdApplyBottomContainer2">
            <div className="edu-portal-container">
      <div className="edu-cards-container" data-aos="fade-down">
        {afiliations && afiliations.map((feature) => (
          <div key={feature.id} className="edu-feature-card">
            <img src={feature.avatar.url} alt={feature.title} className="edu-card-image" />
            <h3 className="edu-card-title">{feature.title}</h3>
            <p className="edu-card-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <button className="edu-enroll-btn" data-aos="fade-down">ENROLL NOW</button>
    </div>
            </div>
            <div> 
            <div className="affiliation-container">
      {/* Affiliations & Accreditations Section */}
      <section className="affiliation-section">
    <h2 className="affiliation-title" data-aos="fade-down">Accreditation & Affiliation</h2>
   <p className="affiliation-list" >
        <p data-aos="fade-down">
          <strong>FBISE Islamabad; Institution Code: 3124</strong> – Ensuring academic integrity and nationwide recognition.
        </p>
        <p data-aos="fade-down">
          <strong>Private Cambridge Setup</strong> – Offering customized Cambridge programs for families seeking flexibility with global standards.
        </p>
        <p data-aos="fade-down">
          <strong>The Education Consultancy (TEC)</strong> – Our academic partner committed to excellence in education across borders.
        </p>
        <p data-aos="fade-down">
          <strong>EDAP School Management System</strong> – A digital platform to manage and streamline academic, administrative, and communication processes.
        </p>
      </p>
  </section>

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
            </div>
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
            </div>
            <div className="thirdApplyBottomContainer5">
            <div className="homepage-container">
      {/* Our Partners Section */}
      <div className='thirdMidContainer'>
                    <div>
                    <p data-aos = "fade-down">Our team Partners</p>
                    <h1 data-aos = "fade-down">Our  Partners</h1>
                    <h3 data-aos = "fade-down">Teamwork is the ability to work together toward a common vision. The ability is to directly involve the individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.</h3>
                    </div>
                   
                  
                       <Slider {...settings} className='bhai' data-aos="fade-down">
   {partners && partners.map((member) => (
    <PartnerCard member={member} key={member._id} />
  ))}
</Slider>


                
                  
             
                </div>

      {/* Why Choose Learn Section */}
      <section className="why-choose-section">
        <h2 className="section-title" data-aos="fade-down">Why Choose Learn</h2>
        <div className="why-choose-grid" data-aos="fade-down">
          {featured.map((feature) => (
            <div key={feature.id} className="why-choose-card">
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
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

export default Malaysia