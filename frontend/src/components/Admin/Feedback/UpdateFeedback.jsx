
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateFeedbackAction , clearErrors , feedbackDetailsAction } from '../../../actions/feedbackActions';
import { UPDATE_FEEDBACK_RESET } from '../../../constants/feedbackConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateFeedback = () => {

  const {loading,error,success} = useSelector((state)=>state.createFeedback)
  const {error:detailsError,feedback} = useSelector((state)=>state.feedbackDetails)

  const dispatch = useDispatch();
  const history = useNavigate();
  const {id}  =  useParams();
  const [description, setDescription] = useState('');
  const [name,setName] = useState('');
  const [title,setTitle] = useState('');

  
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const newDataChange = (e) => {

    if (e.target.name === "avatar") {
     const reader = new FileReader();

     reader.onload = () => {
       if (reader.readyState === 2) {
         setAvatarPreview(reader.result);
         setAvatar(reader.result);
       }
     }
     reader.readAsDataURL(e.target.files[0]);

    }
}


  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('description',description);
    myForm.set('name',name);
    myForm.set("title",title);
    if (avatar ) {
        myForm.append("avatar", avatar);
      }
  
    dispatch(updateFeedbackAction(id,myForm));
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
      toast.success('Feedback Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_FEEDBACK_RESET});
    }

    if (feedback && feedback._id !== id) {
        dispatch(feedbackDetailsAction(id));
            
        } else {
            setName(feedback.name);
            setTitle(feedback.title);
            setDescription(feedback.description);
            setAvatarPreview(feedback.avatar.url);
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
          
                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Update Feedback Card</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i>Client Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                          />
                      <i>Client Title</i>

                      </label>
                   

                      </div>
                    
                      <div className='highlightsInput'>
                      <label className='highInput'>
          
          
                      <textarea
                      type="text"  
                      className="input" 
                      name='description'
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
            />  
                      <i>Feedback</i>
          
                      
                      </label>
                   
                      </div>
          
          
          
          
          
          
          
          
                     
                         <div className='highlightsInput'>
                         <div className="inputBox" id='avatarPreview'> 
          
          <img 
          alt="Avatar Preview" 
          className='avatarImage' 
          src= {avatarPreview}
          />
          <input 
          type="file"
         name="avatar" 
         accept='image/*'
         onChange={newDataChange}
          />
    
     </div>    
          
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

export default UpdateFeedback