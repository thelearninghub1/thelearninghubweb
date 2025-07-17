import React, { Fragment, useEffect} from 'react'
import './Teachers.css';
import TeacherCard from './TeacherCard';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { allTeacherAction , clearErrors } from "../../../actions/teacherActions";
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../layout/Loader/Loader';
import video from '../../../assets/teachers.mp4';
import Metadata from '../../layout/Metadata/Metadata';



const Teachers = () => {

  const dispatch = useDispatch();
  const { error, teachers , loading } = useSelector((state) => state.allTeachers);


  
   useEffect(()=>{
                 AOS.init()

                 if (error) {
                   toast.error(error);
                   dispatch(clearErrors());
                  
                 }
                 dispatch(allTeacherAction());
               },[error, dispatch]) 
  
 
  return (
               <Fragment>
                {
                  loading ? (<Loader />) : (
                    <Fragment>
        <Metadata title="Our Teachers - The Learning Hub" />

                    <div className="ourProjectsContainer">
                     <div className='topTeacherContainer'>
  <div className="video-banner">
    <video src={video} autoPlay muted loop playsInline />
  </div>

</div>

                   
                        <div className='bottomProjectContainer' >
                        {teachers && teachers.map((member) => (
        <TeacherCard member={member} key={member._id} />
      ))}                        </div>
            
                        
                    </div>
                   
                </Fragment>
                  )

                }
               </Fragment>
            )
        }

export default Teachers