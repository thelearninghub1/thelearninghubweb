import  { Fragment , useEffect } from "react";
import './Affiliation.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../../../assets/afilation.mp4';
import {useDispatch , useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import { allAffiliationAction , clearErrors } from "../../../actions/affilationAction";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";


const Affiliation = () => {

  const dispatch = useDispatch();
  const {loading,error,afiliations} = useSelector((state)=>state.allAffiliation);
  

  
   
    useEffect(()=>{
          AOS.init()

          if (error) {
            toast.error(error);
            dispatch(clearErrors());
            
          }
          dispatch(allAffiliationAction())
        },[error,dispatch]) 
 
  return (
              <Fragment>
                {
                  loading ? (<Loader />) : (
                      <Fragment>
        <Metadata title="Affiliation & Accreditation - The Learning Hub" />

                <div className="ourProjectsContainer">
                    <div className='topAffiliationContainer' >
  <div className="video-background">
    <video src={video} autoPlay loop muted playsInline />
  </div>
                    </div>

                    <div className="introduction-container" data-aos="fade-down">
      <h1 className="title" data-aos="fade-down">Affiliation & Accreditation</h1>
   <p className="affiliation-intro" >
        The Learning Hub is a certified educational institution recognized by the <strong>Federal Board of Intermediate and Secondary Education (FBISE), Islamabad</strong>. Our programs are aligned with international standards and offer globally accepted certifications.
      </p>

      <p className="affiliation-subtitle" >We are proudly affiliated with:</p>
      <ul className="affiliation-list" >
        <li>
          <strong>FBISE Islamabad; Institution Code: 3124</strong> – Ensuring academic integrity and nationwide recognition.
        </li>
        <li>
          <strong>Private Cambridge Setup</strong> – Offering customized Cambridge programs for families seeking flexibility with global standards.
        </li>
        <li>
          <strong>The Education Consultancy (TEC)</strong> – Our academic partner committed to excellence in education across borders.
        </li>
        <li>
          <strong>EDAP School Management System</strong> – A digital platform to manage and streamline academic, administrative, and communication processes.
        </li>
      </ul>

      <p className="affiliation-text">
        All academic stages, from Nursery to SSC-II, follow a structured study map designed to meet curriculum standards and promote STEAM learning across all levels.
      </p>
      <p className="affiliation-text">
        Our certifications, partnerships, and educational model ensure students receive a future-ready, credible, and globally accepted education.
      </p>
    </div>
    <div className='bottomProjectContainer' >
             
    <div className="education-container">
      {afiliations && afiliations.map((program) => (
        
        <div key={program._id} className="program-card">
        <div className="content">
          <h2 className="title" data-aos="fade-down">{program.title}</h2>
       
          <p className="extra-info" data-aos="fade-down">{program.description}</p>
        </div>
        
        <div className="roadmap-container" data-aos="fade-down">
          <img src={program.avatar.url} alt={`${program.title} Roadmap`} className="roadmap" />
        </div>
      </div>
      ))}
    </div>
    </div >
                   
                </div>
               
            </Fragment>
                  )
                }
              </Fragment>
            )
        }

export default Affiliation