import {CLEAR_ERRORS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOAD_USER_REQUEST, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, RESET_PASSWORD_FAIL, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_REQUEST, UPDATE_PASSWORD_FAIL, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_REQUEST, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL} from "../constants/userConstant";
import axios from 'axios';

// Login User Action
export const loginUserAction = (email,password) => async (dispatch) => {
    try {

        dispatch({type:LOGIN_USER_REQUEST});

        const config = {headers:{'Content-Type':'application/json'}, withCredentials: true}

        const {data} = await axios.post(`/api/v1/user/login`,{email,password},config  );

        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:data 
        })
        
    } catch (error) {
        dispatch({
            type:LOGIN_USER_FAIL,
            payload:error.response.data.message
        })
    }
};

// Register User Action 
export const registerUserAction = (newUserData) => async (dispatch) => {
    try {
        dispatch({type: REGISTER_USER_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"}, withCredentials: true};

        const {data} = await axios.post(`/api/v1/user/create`,newUserData,config);

        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:REGISTER_USER_FAIL,
            payload:error.response.data.message
        })
    }
};


// Forgot Password 
export const forgotPasswordAction = (email) => async (dispatch) => {
    try {
        dispatch({type:FORGOT_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type":"application/json"}}

        const {data} = await axios.post(`/api/v1/forgot/password`,{email},config);


        dispatch({
            type:FORGOT_PASSWORD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:FORGOT_PASSWORD_FAIL,
            payload:error.response.data.message
        })
    }
};



//  Load User  Action
export const loadUserAction = () => async (dispatch) => {
    try {
        dispatch({type:LOAD_USER_REQUEST});

   
        const {data} = await axios.get(`/api/v1/me` , {
            withCredentials: true,
          });

        dispatch({
            type:LOAD_USER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:LOAD_USER_FAIL,
            payload:error.response.data.message
        })
    }
};


// Logout User
export const logoutUser = () => async (dispatch) => {
    try {

        await axios.get(`/api/v1/user/logout`, {
            withCredentials: true
          })

        dispatch({
            type:LOGOUT_USER_SUCCESS,

        })
        
    } catch (error) {
        dispatch({
            type:LOGOUT_USER_FAIL,
            payload: error.response.data.message
        })
    }
}

//  User Details Action
export const userDetailsAction = () => async (dispatch) => {
    try {
        dispatch({type:USER_DETAILS_REQUEST});

  
        const {data} = await axios.get(`/api/v1/me`, {
            withCredentials: true
          });

        dispatch({
            type:USER_DETAILS_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:USER_DETAILS_FAIL,
            payload:error.response.data.message
        })
    }
};



// Reset Password
export const resetPasswordAction = (token,passwords) => async (dispatch) => {
    try {
        dispatch({type:RESET_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type":"application/json"}}

        const {data} = await axios.put(`/api/v1/password/reset/${token}`,passwords,config);


        dispatch({
            type:RESET_PASSWORD_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:RESET_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
};

// Update Password
export const updatePasswordAction = (passwords) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_PASSWORD_REQUEST});

        const config = {headers: {"Content-Type": "application/json"}, 
            withCredentials: true
          };

        const {data} = await axios.put(`/api/v1/password/update`,passwords,config);

        dispatch({
            type:UPDATE_PASSWORD_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:UPDATE_PASSWORD_FAIL,
            payload: error.response.data.message
        })
    }
};


// Update Profile Action  --Admin
export const updateProfileAction = (newUserData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_USER_REQUEST});

        const config = {headers: {'Content-Type': 'multipart/form-data'},            
        withCredentials: true
    };

        const {data} = await axios.put(`/api/v1/profile/update`,newUserData,config);

        dispatch({
            type:UPDATE_USER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:UPDATE_USER_FAIL,
            payload:error.response.data.message
        })
    }
};


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS})
}