import React, { useEffect, useRef } from "react";
import "./Instrumental.css";
import "./InstrumentCard.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Fragment } from "react";
import Loader from "../../layout/Loader/Loader";
import { toast } from "react-toastify";
import { useDispatch , useSelector } from "react-redux";
import { allInstructionalAction , clearErrors } from "../../../actions/affilationAction";
import video from '../../../assets/instructional.mp4'
import Metadata from "../../layout/Metadata/Metadata";

const Instrumental = () => {
 
 const dispatch = useDispatch();
  const {loading, error:detailsError,afiliations} = useSelector((state)=>state.allAffiliation);





  

   useEffect(()=>{
                AOS.init()
              
                 if (detailsError) {
                  toast.error(detailsError);
                  dispatch(clearErrors());
                }
                dispatch(allInstructionalAction())
              },[dispatch, detailsError])

  return (
    <Fragment>
      {loading ? (<Loader/>):(

        <Fragment>
          <Metadata title={`Instructional Methods - The Learning Hub`} />
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
    </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Instrumental;
