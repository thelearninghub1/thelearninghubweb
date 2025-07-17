import React, { Fragment , useState , useEffect } from 'react';
import './ForgotPassword.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { forgotPasswordAction , clearErrors } from '../../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import { toast } from 'react-toastify';
import { FORGOT_PASSWORD_RESET } from '../../../constants/userConstant';
import Loader from '../../layout/Loader/Loader';



const ForgotPassword = () => {


  const dispatch = useDispatch();
  const {loading,error,message,success} = useSelector((state)=>state.forgotPassword);
  const [email,setEmail] = useState("");

  const forgotPasswordSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email", email);

    dispatch(forgotPasswordAction(email))
  }
  useEffect(()=>{
    if (error) {
          toast.error(error);
      dispatch(clearErrors());
    };
    if (success) {
      toast.success(message);

      dispatch({type:FORGOT_PASSWORD_RESET})

    }
  },[error,dispatch,success,message])
  return (
           
               <Fragment>
                {
                  loading ? (<Loader/>):(
                    <div className='forgot'>
                    <div className="forgotContainer">
                        <form  className='forgotForm' onSubmit={forgotPasswordSubmitHandler} >
                        <Typography variant='h4'>
                            <p>F</p>
                            <p>O</p>
                            <p>R</p>
                            <p>G</p>
                            <p>O</p>
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
                            type="email"
                            placeholder='Enter Your Email' 
                            required 
                            name='email' 
                            value={email} 
                            onChange={(e)=>setEmail(e.target.value)} 
                             />
                           
                              <Button type='submit' variant='contained' >Send</Button>
                           </div>
                        </form>
                    </div>
                    </div>
                  )
                }
               </Fragment>
                )
              }

export default ForgotPassword