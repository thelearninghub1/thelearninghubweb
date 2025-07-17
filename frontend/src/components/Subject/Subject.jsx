import React, { Fragment, useEffect, useState } from 'react'
import './Subject.css';
import Pagination from 'react-js-pagination';
import SubjectCard from './SubjectCard.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector , useDispatch } from 'react-redux';
import { allProjectsAction , clearErrors } from '../../actions/subjectActions';
import { toast } from 'react-toastify';
import Loader from '../layout/Loader/Loader.jsx';
import video from '../../assets/subject.mp4';
import Metadata from '../layout/Metadata/Metadata.jsx';


const Subject = () => {

    const dispatch = useDispatch();
    const {loading, error, subjects , resultPerPage , subjectsCount} = useSelector((state) => state.allSub);
        const [currentPage , setCurrentPage] = useState(1);
        const [grade , setGrade] = useState("");



    const removeFilters = () => {
        window.location.reload();
    }
  
   const categories = [
  "Foundation Stage 1",
  "Foundation Stage 2",
  "Foundation Stage 3",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12"
];


      useEffect(()=>{
              AOS.init()
              if (error) {
                  toast.error(error);
                  dispatch(clearErrors());
                
              }
              dispatch(allProjectsAction(currentPage,grade));
            },[error, dispatch, currentPage,grade]);
  return (
                <Fragment>
                    {
                        loading ? (<Loader/>):(
                            <Fragment>
                <Metadata title={`Subject Summary - The Learning Hub`} />

                <div className="ourProjectsContainer">
                   <div className='topAffiliationContainer' >
  <div className="video-background">
    <video src={video} autoPlay loop muted playsInline />
  </div>
                    </div>
                    <div className='midProjectContainer'>
                    <button className='categoryFilter removeFilter' onClick={removeFilters}>All</button>

                        {
                            categories && categories.map((grade)=>(
                                <ul key={grade} className='categoryFilter' onClick={()=>setGrade(grade)}>
                                    <li>{grade} </li>
                                </ul>
                            ))
                        }
                    </div>
                    <div className='bottomProjectContainer' >
                    {
                        subjects && subjects.map((subject)=>(
                            <SubjectCard subject={subject} key={subject._id} />
                        ))
                    }
                        </div>
        
                        <div className="paginationContainer">
                        <Pagination
                        activePage={currentPage}
                        onChange={(e)=>setCurrentPage(e)}
                        itemsCountPerPage={resultPerPage}
                        totalItemsCount={subjectsCount}
                        nextPageText={"Next"}
                        firstPageText={"1st"}
                        lastPageText={"Last"}
                        prevPageText={"Prev"}
                        itemClass='item-class'
                        linkClass='item-link'
                        activeClass='active-item'
                        activeLinkClass='active-link'
                         />
                    </div>    
                </div>
               
            </Fragment>
                        )
                    }
                </Fragment>
            )
        }

export default Subject