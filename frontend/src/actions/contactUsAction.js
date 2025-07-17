import { CLEAR_ERRORS, CONTACT_US_FAIL, CONTACT_US_REQUEST, CONTACT_US_SUCCESS } from "../constants/contactUsContants";

import axios from 'axios';


// Create Team Action  --Admin
export const createContactUsAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CONTACT_US_REQUEST});

        const config = {headers: {"Content-Type":"application/json"},
    }

        const {data} = await axios.post(`/api/v1/contactUs`,newDashboardData,config);

        dispatch({
            type:CONTACT_US_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CONTACT_US_FAIL,
            payload: error.response.data.message
        })
    }
};



//  Partner Contact Us Action  --Admin

export const createPartnerContactUsAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CONTACT_US_REQUEST});

        const config = {headers: {"Content-Type":"application/json"},
    }

        const {data} = await axios.post(`/api/v1/partner-with-us`,newDashboardData,config);

        dispatch({
            type:CONTACT_US_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CONTACT_US_FAIL,
            payload: error.response.data.message
        })
    }
};

// Create Call Back Action  

export const createCallBackAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CONTACT_US_REQUEST});

        const config = {headers: {"Content-Type":"application/json"},
    }

        const {data} = await axios.post(`/api/v1/call-back`,newDashboardData,config);

        dispatch({
            type:CONTACT_US_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CONTACT_US_FAIL,
            payload: error.response.data.message
        })
    }
};



// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    });
};