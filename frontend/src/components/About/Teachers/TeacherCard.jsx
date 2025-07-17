import React, { Fragment, useEffect , useState} from 'react';
import { Dialog, DialogContent } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';


const TeacherCard = ({member}) => {
    const [open , setOpen] = useState(false);
  
  
     
  
      const submitReviewToggle = () => {
        open ? setOpen(false) : setOpen(true);
    }
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
                <button className='learn-apply-btn' onClick={submitReviewToggle}>About me</button>
                
                                           <Dialog
                  open={open}
                  onClose={submitReviewToggle}
                  className="dialogBox"
                >
                  <DialogContent>
                  <div className='TeacherDescription'>
                  <h2>{member.name}</h2>
                  <p>{member.description}</p>
                  </div>
                  </DialogContent>
                </Dialog>
                
                
            </div>
        </div> 
    </Fragment>
  )
}

export default TeacherCard