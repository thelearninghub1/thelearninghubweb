import React, { Fragment , useState , useEffect} from 'react';
import {useNavigate , useParams} from "react-router-dom";
import './ResetPassword.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { resetPasswordAction , clearErrors } from '../../../actions/userActions';
import { useDispatch , useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';

const ResetPassword = () => {

  const dispatch = useDispatch();
  const {loading,error,success} = useSelector((state)=>state.forgotPassword);

  const {token} = useParams()

  const history = useNavigate();

  const [newPassword,setNewPassword] = useState("");
  const [confirmPassword,setConfirmPassword] = useState("");

  const resetPasswordSubmitHandler = (e)=> {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("newPassword",newPassword);
    myForm.set("confirmPassword",confirmPassword);

    dispatch(resetPasswordAction(token,{newPassword,confirmPassword}))
  }

  useEffect(()=>{
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success(`Password Reset Successfully`);
      history(`/super-admin-panel-login`)
    }
  },[history,success,error,dispatch]);

  return (
           <Fragment>
            {
              loading ? (<Loader/>):(
                <Fragment>
                    <div className='login'>
                  <div className="loginContainer">
                      <form  className='loginForm' onSubmit={resetPasswordSubmitHandler} >
                      <Typography variant='h4'>
                          <p>R</p>
                          <p>E</p>
                          <p>S</p>
                          <p>E</p>
                          <p style={{ marginRight: "1vmax" }}>T</p>
              
                          <p>P</p>
                          <p>A</p>
                          <p>S</p>
                          <p>S</p>
                          <p>W</p>
                          <p>O</p>
                          <p>R</p>
                          <p>D</p>
                          </Typography>
                         <div>
                          <input 
                          type="password"
                          placeholder='New Password' 
                          value={newPassword}
                          onChange={(e)=>setNewPassword(e.target.value) }
                          required 
                           />
                           <input 
                           type="password" 
                           required 
                          value={confirmPassword}
                          onChange={(e)=>setConfirmPassword(e.target.value) }
                           placeholder='Confirm Password' 
                            />
                            <Button type='submit' variant='contained' >Send</Button>
                         </div>
                      </form>
                  </div>
                  </div>
                </Fragment>  
              )
            }
           </Fragment>
  )
}

export default ResetPassword