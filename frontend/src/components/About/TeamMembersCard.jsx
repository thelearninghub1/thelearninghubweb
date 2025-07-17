import React, { Fragment, useEffect } from 'react';
import './TeamMemberCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TeamMembersCard = ({member}) => {
  useEffect(()=>{
    AOS.init()

  },[])
  return (
    <Fragment>
    <div className="teamMembersCardContainer"  data-aos = "fade-down" key={member._id}>
            <div>
                <img src={member.avatar.url} alt={member.name} />
            </div>
            <div>
                <h3>{member.name}</h3>
                <p>{member.title}</p>
            </div>
        </div>
    </Fragment>
  )
}

export default TeamMembersCard