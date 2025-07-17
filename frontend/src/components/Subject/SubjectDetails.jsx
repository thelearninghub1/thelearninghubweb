import React, { Fragment, useEffect } from 'react';
import './SubjectDetails.css';
import { useSelector , useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { subjectDetailsAction , clearErrors } from '../../actions/subjectActions';
import { useParams } from 'react-router-dom';
import Loader from '../layout/Loader/Loader';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


const SubjectDetails = () => {

  const dispatch = useDispatch();
  const {error,subject , loading} = useSelector((state)=>state.subjectDetails)
  const {id} = useParams();


 



  useEffect(()=>{
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(subjectDetailsAction(id));
  },[error, dispatch,id]);
  


  return (
            <Fragment>
              {
                loading ? (<Loader/>):(
                  <Fragment>
            <div className="projectDetailsContainer">
                <div>
                      
                    <Carousel
  showThumbs={false}
  infiniteLoop
  showStatus={false}
  autoPlay
  interval={3000}
  className="subjectCarousel"
>
  {subject.images &&
    subject.images.map((img, index) => (
      <div key={index}>
        <img src={img.url} alt={img.alt || `Subject ${index + 1}`} className="carouselImage" />
      </div>
    ))}
</Carousel>

                </div>
                <div>
                    <div>
                        <h3>  {subject && subject.name}</h3>
                        <p>Subject Id # {subject._id}</p>
                    </div>
                    <div>
                        <h3>Subject Grade : </h3>
                        <p>{subject && subject.grade}</p>
                    </div>
                    <div>
                        <h3>Subject Teacher : </h3>
                        <p>{subject && subject.teacher}</p>
                    </div>
                    <div>
                        <h3> Teacher Qualification: </h3>
                        <p>{subject && subject.teacherQualification}</p>
                    </div>
                    <div>
                        <h3>Description :</h3>
                        <p>{subject && subject.description}</p>
                    </div>
                
                </div>
    
            </div>
        </Fragment>
                )
              }
            </Fragment>
        )
    }

export default SubjectDetails
