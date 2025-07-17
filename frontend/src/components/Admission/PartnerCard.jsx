import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './PartnerCard.css'

const PartnerCard = ({member}) => {
  useEffect(()=>{
    AOS.init()

  },[])
  return (
    <Fragment>
    <div className="partnerContainer"  data-aos = "fade-down" key={member._id}>
            <div>
                <img src={member.avatar.url} alt={member.name} />
            </div>
           
        </div>
    </Fragment>
  )
}

export default PartnerCard