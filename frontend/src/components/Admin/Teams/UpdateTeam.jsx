
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateTeamAction , clearErrors ,teamsDetailsAction  } from '../../../actions/teamActions';
import { UPDATE_TEAM_RESET } from '../../../constants/TeamConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateTeam = () => {

  const {loading,error,success} = useSelector((state)=>state.createTeam)
  const {error:detailsError,team} = useSelector((state)=>state.teamDetails)

  const dispatch = useDispatch();
  const history = useNavigate();
  const {id}  =  useParams();
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
    myForm.set('name',name);
    myForm.set("title",title);
    if (avatar ) {
      myForm.append("avatar", avatar);
    }

  
    dispatch(updateTeamAction(id,myForm));
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
      toast.success('Member Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_TEAM_RESET});
    }

    if (team && team._id !== id) {
        dispatch(teamsDetailsAction(id));
            
        } else {
            setName(team.name);
            setTitle(team.title);
            setAvatarPreview(team.avatar.url);
        }
     

  },[dispatch,error,success,history,team,id]);
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
                    <h1>Update Team Member Card</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i>Member Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={title} 
                        onChange={(e)=>setTitle(e.target.value)}
                          />
                      <i>Member Title</i>

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

export default UpdateTeam