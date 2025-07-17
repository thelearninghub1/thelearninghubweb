import React, { Fragment , useState , useEffect } from 'react';
import {Link , useNavigate , useLocation} from "react-router-dom";
import './Login.css';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useDispatch , useSelector} from 'react-redux';
import { loginUserAction , clearErrors } from '../../../actions/userActions';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';


const Login = () => {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState(""); 


  const dispatch = useDispatch();
  const history = useNavigate();
  const location = useLocation();
  const redirect = location.search ? location.search.split('=')[1]:"/account";

  const {loading,error,isAuthenticatedUser} = useSelector((state)=>state.loginUser);


  const loginSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("email",email);
    myForm.set("password",password);

    dispatch(loginUserAction(email,password));
  }

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
  
    if (isAuthenticatedUser) {
      toast.success(`Login Successfully`);
        history(redirect)
    }
  }, [dispatch, error, history, isAuthenticatedUser]);



  return (
           
                  <Fragment>
                    {
                      loading ? (<Loader/>):(
                        <div className='login'>
                  <div className="loginContainer">
                      <form  className='loginForm' onSubmit={loginSubmitHandler}>
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
                          type="email"
                          placeholder='Admin Email' 
                          required 
                          value={email}
                          onChange={(e)=>setEmail(e.target.value)}
                           />
                           <input 
                           type="password" 
                           required 
                           placeholder='Admin Password' 
                           value={password}
                           onChange={(e)=>setPassword(e.target.value)}

                            />
                            <Button type='submit' variant='contained' >Login</Button>
                            <Link to={`/password/forgot`} className='forgotBtn' >Forgot Password</Link>
                         </div>
                      </form>
                  </div>
                  </div>
                      )
                    }
                  </Fragment>
                )
              }

export default Login