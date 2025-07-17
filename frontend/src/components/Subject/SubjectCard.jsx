import React, { Fragment, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './SubjectCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SubjectCard = ({subject}) => {

  useEffect(()=>{
    AOS.init()
  },[])
 
  return (
    <Fragment>
        <Link to={`/subject/${subject._id}`} className='ourProjectCardContainer' data-aos = "fade-down" >
            <div>
                <img src={subject.images[0].url} alt={subject.name} />
            </div>
            <div>
              <p>{subject.name}</p>
            </div>
        </Link>
    </Fragment>
  )
}

export default SubjectCard
