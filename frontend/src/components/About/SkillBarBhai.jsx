import React from 'react'
import './SkillBarBhai.css';

const SkillBarBhai = ({skill,level}) => {
    


  return (
    <>
         <div className="skill">
      <div className="skill-name">{skill}</div>
      <div className="skill-level">
        <div className="skill-level-bar" style={{ width:`${level}%`}}></div>
</div>
</div>
    </>
  )
}

export default SkillBarBhai


