import React, { Fragment, useEffect, useState } from 'react';
import './UpdatePassword.css';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { updatePasswordAction , clearErrors } from '../../../actions/userActions';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { toast } from 'react-toastify';
import { UPDATE_PASSWORD_RESET } from '../../../constants/userConstant';
import Loader from '../../layout/Loader/Loader';


const UpdatePassword = () => {
    const dispatch = useDispatch();
    const {error,loading,success} = useSelector((state)=>state.updatePassword);
    const history = useNavigate();

    const [oldPassword,setOldPassword] = useState("");
    const [newPassword,setNewPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");

    const updatePasswordSubmitHandler = (e) => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.set("oldPassword",oldPassword);
        myForm.set("newPassword",newPassword);
        myForm.set("confirmPassword",confirmPassword);

        dispatch(updatePasswordAction(myForm));
    }

    useEffect(()=>{
        if (error) {
            toast.error(error);
            dispatch(clearErrors());
        }
        if (success) {
            toast.success(`Passwords updated successfully`);
            history(`/account`);
            dispatch({
                type:UPDATE_PASSWORD_RESET
            })
            
        }
    },[error,dispatch,success,history]);
  return (
    <Fragment>
        {
            loading ? (<Loader/>):(
                <Fragment>
        <div className="UpdatePasswordContainer">
            <div className="updatePasswordBox">
            <div className="updatePasswordHeading">Update Password</div>
                <form className='updatePasswordForm' onSubmit={updatePasswordSubmitHandler}>
                    <div className="oldPassword">
                    <VpnKeyIcon/>
                        <input 
                        type="password"
                        required 
                        placeholder='Old Password' 
                        value={oldPassword}
                        onChange={(e)=>setOldPassword(e.target.value)}
                         />
                    </div>
                    <div className="newPassword">
                        <LockOpenIcon/>
                        <input 
                        type="password" 
                        required

                        placeholder='New Password'
                        value={newPassword}
                        onChange={(e)=>setNewPassword(e.target.value)}

                         />
                    </div>
                    <div className="confirmNewPassword">
                    <LockIcon/>                      
                        <input 
                        type="password" 
                        required 
                        placeholder='Confirm Password' 
                        value={confirmPassword}
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                         />
                    </div>
                    <input type="submit" value="Change Password" className='updatePasswordBtn' />
                </form>
            </div>
        </div>
</Fragment>
            )
        }
    </Fragment>
)
}

export default UpdatePassword