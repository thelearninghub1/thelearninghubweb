import React, { Fragment, useEffect } from 'react'
import SupportCard from './SupportCard.jsx';
import './Support.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { FaPenClip } from "react-icons/fa6";
import { FaBook } from "react-icons/fa";
import { BsBank } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { PiMonitorBold } from "react-icons/pi";
import { FaServicestack } from "react-icons/fa";
import { FaHouseLaptop } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import {toast } from 'react-toastify';
import { allSupportAction , clearErrors } from '../../../actions/affilationAction';
import Loader from '../../layout/Loader/Loader.jsx';
import video from '../../../assets/academic.mp4';
import Metadata from '../../layout/Metadata/Metadata.jsx';

const Support = () => {


  const dispatch = useDispatch();
    const {loading,error,afiliations} = useSelector((state)=>state.allAffiliation);
  

  const featured = [
    { id: 1, title: "No Physical Barriers", description: "Learn from anywhere with fully online classes — quality education delivered right to your home." },
    { id: 2, title: "Modern STEAM Curriculum", description: "Cutting-edge syllabus integrating Science, Technology, Engineering, Arts, and Mathematics to equip students for the future." },
    { id: 3, title: "Continuous Assessment", description: "Structured evaluations to monitor student growth, ensuring steady academic improvement at every stage." },
    { id: 4, title: "Parent-Teacher Collaboration", description: "Parents stay informed through regular updates, progress tracking, and direct communication with instructors." }
  ];
 
    const partnersData = [
        {
          logo: <FaPenClip />, // Replace with actual image <img src="zoom.png" alt="Zoom" />
          title: "Writing Center",
          description:
            "We at LEARN provide writing support services such as writing workshops, writing guides, feedback on drafts, and assistance with research and citations.",
          isLeft: true,
        },
        {
          logo: <FaBook />,
          title: "Library Resources",
          description:
            "We at LEARN Grant access to online libraries, databases, e-books, and academic journals to support research and information retrieval for coursework.",
          isLeft: false,
        },
        {
          logo: <BsBank />,
          title: "Academic Advising",
          description:
            "We at LEARN Assign academic advisors to guide students in course selection, degree planning, academic goal setting, and career pathways.",
          isLeft: true,
        },
        {
          logo: <GiNotebook />,
          title: "Study Skills Workshops",
          description:
            "We at LEARN Conduct workshops or courses on study skills, time management, note-taking techniques, and exam strategies to enhance students' academic performance.",
          isLeft: false,
        },
        {
          logo: <PiMonitorBold />,
          title: "Peer Mentoring Program",
          description:
            "We at LEARN Establish peer mentoring programs where experienced students can mentor and support newer students, offering guidance and sharing their experiences.",
          isLeft: true,
        },
        {
          logo: <FaServicestack />,
          title: "Accessibility Services",
          description:
            "We at LEARN Provide accommodations and support services for students with disabilities, including alternative formats for course materials, assistive technologies, and accessibility tool.",
          isLeft: false,
        },
        {
          logo: <FaHouseLaptop />,
          title: "Technology Support",
          description:
            "We at LEARN Offer technical support services to assist students with issues related to the online learning platform, software applications, and digital tools used in coursework.",
          isLeft: true,
        },
        {
          logo: <PiStudentFill />,
          title: "Career Services",
          description:
            "We at LEARN Provide career counseling, resume writing assistance, job search resources, and internship opportunities to help students transition into their chosen career paths.",
          isLeft: false,
        },
      ];

      useEffect(()=>{
                       AOS.init()

                       if (error) {
                        toast.error(error);
                        dispatch(clearErrors());
                        
                       }
                       dispatch(allSupportAction());
                     },[error,dispatch]) 
      
 
  return (
               <Fragment>
                {
                  loading ? (<Loader/>):(
                     <Fragment>
                <Metadata title={`Academic Support - The Learning Hub`} />

                <div className="ourProjectsContainer">
                     <div className='topAffiliationContainer' >
                       <div className="video-background">
                         <video src={video} autoPlay loop muted playsInline />
                       </div>
                                         </div>
               
                    <div className='bottomProjectContainer' >
                    <section className="partners-section">
      {afiliations && afiliations.map((partner, index) => (
        <SupportCard key={index} partner={partner} />
      ))}
    </section>
                             </div>
        
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

export default Support
