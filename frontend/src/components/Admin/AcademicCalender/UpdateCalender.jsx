
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateCalenderAction , clearErrors, calenderDetailsAction } from '../../../actions/calenderAction';
import { UPDATE_CALENDER_RESET } from '../../../constants/calenderConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateCalender = () => {

  const {loading,error,success} = useSelector((state)=>state.createCalender)
  const {error:detailsError,calender} = useSelector((state)=>state.calenderDetails)

  const dispatch = useDispatch();
  const history = useNavigate();
  const {id}  =  useParams();
  
    const [details, setDetails] = useState('');
    const [date,setDate] = useState('');

  



  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('details',details);
    myForm.set("date",date);
   
  
    dispatch(updateCalenderAction(id,myForm));
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
      toast.success('Academic Calendar Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_CALENDER_RESET});
    }

    if (calender && calender._id !== id) {
        dispatch(calenderDetailsAction(id));
            
        } else {
            setDate(calender.date);
            setDetails(calender.details);
        }
     

  },[dispatch,error,success,history,calender,id]);
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
          
                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Update Academic Calendar </h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                   
                      <label  className='PartnerInput' >

                        <input type="text"  className="input" 
                        value={date} 
                        onChange={(e)=>setDate(e.target.value)}
                          />
                      <i>Academic Calendar Date</i>

                      </label>
                   

                      </div>
                    
                      <div className='highlightsInput'>
                      <label className='highInput'>
          
          
                      <textarea
                      type="text"  
                      className="input" 
                      name='details'
                      value={details}
                      onChange={(e)=>setDetails(e.target.value)}
            />  
                      <i>Description</i>
          
                      
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

export default UpdateCalender