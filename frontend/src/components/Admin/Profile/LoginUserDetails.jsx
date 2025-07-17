import React, { Fragment, useEffect } from 'react';
import { userDetailsAction , clearErrors , logoutUser } from '../../../actions/userActions';
import {useDispatch , useSelector} from 'react-redux';
import './LoginUserDetails.css';
import {Link , useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';


const LoginUserDetails = () => {
  const dispatch = useDispatch();
  const {user,loading,error} = useSelector((state)=>state.userDetails);
  const {isAuthenticatedUser} = useSelector((state)=>state.loginUser);
  const history = useNavigate();

  useEffect(()=>{
  
    if (error) {
        toast.error(error);
      dispatch(clearErrors());
    }
    if (isAuthenticatedUser === false) {
      history(`/super-admin-panel-login`)
    }
 
  dispatch(userDetailsAction())

  },[error, dispatch,isAuthenticatedUser,history]);

  
  function logoutSubmitHandler() {
    dispatch(logoutUser());
    history(`/million-dreams-login`)
    toast.success(`Logged out successfully`);
  }

  return (
    <Fragment>
      {
        loading ? (<Loader/>):(
          <Fragment>
            <div className="profileContainer">
        <div>
        <img src={user.avatar && user.avatar.url} alt={user.name} />
        <Link to={`/me/update`}>Edit Profile</Link>
        </div>
        <div>
            <div>
                <h4>Full Name</h4>
                <p>{user && user.name}</p>            </div>
            <div>
                <h4>Email</h4>
                <p>{user && user.email}</p>
                            </div>
            <div>
                <h4>Joined On</h4>
                <p>{String(user.createdAt).substr(0,10)}</p>
            </div>
            <div>
                <Link to={`/password/update`}>Change Password</Link>
                <Link onClick={logoutSubmitHandler} >Logout</Link>
            </div>
        </div>
    </div>
          </Fragment>
        )
      }
    </Fragment>
  )
}

export default LoginUserDetails 