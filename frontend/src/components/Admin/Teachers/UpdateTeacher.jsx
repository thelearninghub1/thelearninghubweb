
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateTeacherAction , clearErrors, teacherDetailsAction } from '../../../actions/teacherActions';
import { UPDATE_TEACHER_RESET } from '../../../constants/teacherConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateTeacher = () => {

  const {loading,error,success} = useSelector((state)=>state.createTeacher)
  const {error:detailsError,teacher} = useSelector((state)=>state.teacherDetails)

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
  
    dispatch(updateTeacherAction(id,myForm));
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
      toast.success('Teacher Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_TEACHER_RESET});
    }

    if (teacher && teacher._id !== id) {
        dispatch(teacherDetailsAction(id));
            
        } else {
            setName(teacher.name);
            setTitle(teacher.title);
            setDescription(teacher.description);
            setAvatarPreview(teacher.avatar.url);
        }
     

  },[dispatch,error,success,history,teacher,id]);
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
                    <h1>Update Teacher Card</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i>Teacher Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                          />
                      <i>Teacher Title</i>

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
                      <i>Description</i>
          
                      
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

export default UpdateTeacher