
import { CAREER_SUBMIT_FAIL, CAREER_SUBMIT_REQUEST, CAREER_SUBMIT_SUCCESS, CLEAR_ERRORS } from "../constants/careerConstants";
import axios from 'axios';

// Career Action  --Admin
export const createCareerAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CAREER_SUBMIT_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"},
    }

        const {data} = await axios.post(`/api/v1/submit-form`,newDashboardData,config);

        dispatch({
            type:CAREER_SUBMIT_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CAREER_SUBMIT_FAIL,
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