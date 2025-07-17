import React, { Fragment, useState , useEffect } from 'react';
import {useNavigate , useLocation} from "react-router-dom";
import './Signup.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { registerUserAction , clearErrors} from '../../../actions/userActions';
import { toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import Loader from '../../layout/Loader/Loader';


const Signup = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1]:"/account";
  const {loading,error,isAuthenticatedUser} = useSelector((state)=>state.loginUser);

  const [avatarPreview , setAvatarPreview] = useState("/Profile.png");
  const [avatar, setAvatar] = useState("/Profile.png");
  const [user,setUser] = useState({
    email:"",
    password:"",
    name:"",
  })
  const {
    name, 
    email, 
    password, 
  } = user;

    const registerDataChange = (e) => {
      if (e.target.name === "avatar") {
        const reader = new FileReader();
  
        reader.onload = () => {
          if (reader.readyState === 2) {
            setAvatarPreview(reader.result);
            setAvatar(reader.result);
          }
        }
  
        reader.readAsDataURL(e.target.files[0]);
      } else {
        setUser({...user,[e.target.name]:e.target.value});
        
      }
    };

    const registerSubmitHandler = (e) => {
      e.preventDefault();
  
      const myForm = new FormData();
  
      myForm.set("name",name);
      myForm.set("email",email);
      myForm.set("password",password);
      myForm.set("avatar",avatar);
  
      dispatch(registerUserAction(myForm))
    };


     useEffect(() => {
        if (error) {
          toast.error(error);
          dispatch(clearErrors());
        }
      
        if (isAuthenticatedUser) {
          toast.success(`Register Successfully`);
            history(redirect)
        }
      }, [dispatch, error, history, isAuthenticatedUser]);
    
  return (
           
                <Fragment>
                  {
                    loading ? (<Loader/>):(  
                    <div className='signup'>
                      <div className="loginContainer">
                          <form  className='signupForm' onSubmit={registerSubmitHandler} >
                          <Typography variant='h4'>
                              <p>A</p>
                              <p>D</p>
                              <p>M</p>
                              <p>I</p>
                              <p style={{ marginRight: "1vmax" }}>N</p>
                  
                              <p>P</p>
                              <p>A</p>
                              <p>N</p>
                              <p>E</p>
                              <p>L</p>
                              </Typography>
                             <div>
                             <input 
                              type="name"
                              placeholder='Enter Your Name' 
                              required 
                              value={name}
                              name='name'
                              onChange={registerDataChange}/>
                              <input 
                              type="email"
                              placeholder='Admin Email' 
                              required 
                              name='email'
                              value={email}
                              onChange={registerDataChange}
                               />
                               <input 
                               type="password" 
                               required 
                               name='password'
                               placeholder='Admin Password' 
                               value={password}
                               onChange={registerDataChange}
                                />
                                 <div className=" signupInput newSignupFields" id='avatarPreview'> 
    
    
    <img 
    src={avatarPreview} 
    alt="Avatar Preview" 
    className='avatarImage' />
    
    <input 
    type="file"
    name="avatar" 
    accept='image/*'
    onChange={registerDataChange}
    />
    
    
    </div> 
                                <Button type='submit' variant='contained' >Register</Button>
                             </div>
                          </form>
                      </div>
                      </div>
                      )
                  }
                </Fragment>
                )
              }

export default Signup