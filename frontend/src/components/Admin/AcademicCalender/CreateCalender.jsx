
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { createCalenderAction , clearErrors } from '../../../actions/calenderAction';
import { CREATE_CALENDER_RESET } from '../../../constants/calenderConstants';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const CreateCalender = () => {
  const {loading,error,success} = useSelector((state)=>state.createCalender)

  const dispatch = useDispatch();
  const history = useNavigate();
  const [details, setDetails] = useState('');
  const [date,setDate] = useState('');

  

 


  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("date",date);
    myForm.set("details",details);
  
    dispatch(createCalenderAction(myForm));
  }

  useEffect(() => {
  
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success('Academic Calendar Created Successfully');
      history(`/dashboard`)
      dispatch({type: CREATE_CALENDER_RESET});
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
          
                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Create Academic Calendar </h1>
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

export default CreateCalender