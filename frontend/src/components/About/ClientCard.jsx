import React, { Fragment, useEffect } from 'react';
import './ClientCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ClientCard = ({card}) => {

    useEffect(()=>{
        AOS.init()
      },[]) 
  return (
    <Fragment>
         <div className='clientCardContainer' data-aos = "fade-down">
               
               <div>
                   <img src={card.avatar && card.avatar.url} alt={card.title} />
               </div>

               <div>
                   <h2>{card.value}</h2>
                   <h3>{card.name}</h3>
               </div>
           </div>
    </Fragment>
  )
}

export default ClientCard