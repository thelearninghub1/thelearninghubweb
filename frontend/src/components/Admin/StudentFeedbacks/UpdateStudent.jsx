
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateStudentAction , clearErrors , studentDetailsAction } from '../../../actions/studentAction';
import { UPDATE_STUDENT_RESET } from '../../../constants/studentFeedbackConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateStudent = () => {

  const {loading,error,success} = useSelector((state)=>state.createStudent)
  const {error:detailsError,feedback} = useSelector((state)=>state.studentDetails)

  const dispatch = useDispatch();
  const history = useNavigate();
  const {id}  =  useParams();
  const [ytLink,setYtLink] = useState('');



  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("ytLink",ytLink);
 

  
    dispatch(updateStudentAction(id,myForm));
  }

  useEffect(() => {
  
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (detailsError) {
        toast.error(detailsError);
        dispatch(clearErrors());
      }
    if (success) {
      toast.success('Student Feedback Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_STUDENT_RESET});
    }

    if (feedback && feedback._id !== id) {
        dispatch(studentDetailsAction(id));
            
        } else {
            setYtLink(feedback.ytLink);
        }
     

  },[dispatch,error,success,history,feedback,id]);
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
                    <h1>Update  Student Feedback Card</h1>
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

export default UpdateStudent