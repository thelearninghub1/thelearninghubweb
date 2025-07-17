
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { createStudentAction , clearErrors } from '../../../actions/studentAction';
import { CREATE_STUDENT_RESET } from '../../../constants/studentFeedbackConstants';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import './CreateStudent.css';
import Loader from '../../layout/Loader/Loader';

const CreateStudent = () => {
  const {loading,error,success} = useSelector((state)=>state.createStudent)

  const dispatch = useDispatch();
  const history = useNavigate();
  const [ytLink,setYtLink] = useState('');

  
  

  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('ytLink',ytLink);
    dispatch(createStudentAction(myForm));
  }

  useEffect(() => {
  
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success('Feedback Created Successfully');
      history(`/dashboard`)
      dispatch({type: CREATE_STUDENT_RESET});
    }

  },[dispatch,error,success,history]);
  return (
        <Fragment>
          {
            loading ? (<Loader/>) : (
              <Fragment>
              <div className='dashboardMainWrapper'>
                
           
                <div className=" createdashboard">
             
                    <div>
                        <Sidebar />
                    </div>
                    <div>
          
                    <div className="createTeamContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Create Student Feedback Card</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='studentInput'>

<input type="text"  className="input" 
value={ytLink} 
onChange={(e)=>setYtLink(e.target.value)}
  />  
                      <i>Youtube Embbed Link</i>

                      
                      </label>
                     

                      </div>
                    
                     
          
          
          
          
          
          
          
          
                     
                     
                      
                    
                   
                    
                     
                   
                     
                      <button type="submit" className="buttonBtn">Confirm  
                      </button>
                    </form>
                  </div>
                </div>
                    </div> 
          
          
          
                     
                    </div>
                </div>
            
            
            
            </Fragment>
            )
          }
        </Fragment>
  )
}

export default CreateStudent