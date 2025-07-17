
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { updateCardAction , clearErrors , cardDetailsAction } from '../../../actions/cardActions';
import { UPDATE_CARD_RESET } from '../../../constants/rankCardConstants';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const UpdateCard = () => {

  const {loading,error,success} = useSelector((state)=>state.createCard)
  const {error:detailsError,card} = useSelector((state)=>state.cardDetails)

  const dispatch = useDispatch();
  const history = useNavigate();
  const {id}  =  useParams();
  const [name,setName] = useState('');
  const [value,setValue] = useState('');

  
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
    myForm.set("value",value);
    if (avatar ) {
      myForm.append("avatar", avatar);
    }

  
    dispatch(updateCardAction(id,myForm));
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
      toast.success('Card Updated Successfully');
      history(`/dashboard`)
      dispatch({type: UPDATE_CARD_RESET});
    }

if ( card && card._id !== id) {
        dispatch(cardDetailsAction(id));
            
        } else {
            setName(card.name);
            setValue(card.value);
            setAvatarPreview(card.avatar.url);
        }
     

  },[dispatch,error,success,history,card,id]);
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
                    <h1>Update Ranking Card</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i> Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={value} 
                        onChange={(e)=>setValue(e.target.value)}
                          />
                      <i>Value</i>

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

export default UpdateCard