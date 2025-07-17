import React, { Fragment, useEffect, useRef } from "react";
import "./Activities.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { allExtraAction , clearErrors } from "../../../actions/affilationAction";
import { useDispatch, useSelector } from "react-redux";
import {toast} from "react-toastify";
import { allStudentAction } from "../../../actions/studentAction";
import Loader from "../../layout/Loader/Loader";
import video from '../../../assets/cacurricular.mp4';
import Metadata from "../../layout/Metadata/Metadata";

const Activities = () => {
  const dispatch = useDispatch();
  const {error:detailsError,afiliations} = useSelector((state)=>state.allAffiliation);

  const { loading, error, feedbacks:allStudentFeedbacks } = useSelector((state) => state.allStudent);




  

   useEffect(()=>{
                AOS.init()
                if (error) {
                  toast.error(error);
                  dispatch(clearErrors());
                }
                 if (detailsError) {
                  toast.error(detailsError);
                  dispatch(clearErrors());
                }
                dispatch(allStudentAction());
                dispatch(allExtraAction())
              },[dispatch, error, detailsError])

  return (
 <Fragment>
  {
    loading ? (<Loader />):(
       <Fragment>
                <Metadata title={`Extra Curricular Activities - The Learning Hub`} />

      <div className="servicesDetailsContainer">
       <div className='topAffiliationContainer' >
      <div className="video-background">
        <video src={video} autoPlay loop muted playsInline />
      </div>
                        </div>
      <div className="bottomServiceDetailsContainer">
    
           {afiliations && afiliations.map((service) => (
          <div
            className="servicesDetailsCardContainer"
            key={service._id}
            data-aos="fade-down"
          >
            <div className="cardContent">
              <img src={service.avatar.url} alt={service.title} />
              <div className="textContent">
                <h1>{service.title}</h1>
                <p>{service.description}</p>
              </div>
            </div>
            </div>

        ))}
     
      </div>
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
  </Fragment>
    )
  }
 </Fragment>
   
  );
};

export default Activities;
