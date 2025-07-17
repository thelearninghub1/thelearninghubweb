
import axios from 'axios';
import { ALL_TEACHER_FAIL, ALL_TEACHER_REQUEST, ALL_TEACHER_SUCCESS, CLEAR_ERRORS, CREATE_TEACHER_FAIL, CREATE_TEACHER_REQUEST, CREATE_TEACHER_SUCCESS, DELETE_TEACHER_FAIL, DELETE_TEACHER_REQUEST, DELETE_TEACHER_SUCCESS, TEACHER_DETAILS_FAIL, TEACHER_DETAILS_REQUEST, TEACHER_DETAILS_SUCCESS, UPDATE_TEACHER_FAIL, UPDATE_TEACHER_REQUEST, UPDATE_TEACHER_SUCCESS } from "../constants/teacherConstants";


// Get All Teachers Data
export const allTeacherAction = () => async (dispatch) => {
    try {
        dispatch({type:ALL_TEACHER_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/teachers`);

        dispatch({
            type:ALL_TEACHER_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_TEACHER_FAIL,
            payload: error.response.data.message,
        })
    }
};


// Get Teacher Details  
export const teacherDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type:TEACHER_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/teacher/${id}`)

        dispatch({
            type:TEACHER_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:TEACHER_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}; 



// Create Teacher Action  --Admin
export const createTeacherAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CREATE_TEACHER_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"},
        withCredentials: true
    }

        const {data} = await axios.post(`/api/v1/admin/teacher/create`,newDashboardData,config);

        dispatch({
            type:CREATE_TEACHER_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CREATE_TEACHER_FAIL,
            payload: error.response.data.message
        })
    }
};





// Delete Teacher   ---Admin
export const deleteTeacherAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_TEACHER_REQUEST});

        const config = {headers: {"Content-Type": "application/json"},
        withCredentials: true
    };

        const {data} = await axios.delete(`/api/v1/admin/teacher/${id}`,config);

        dispatch({
            type:DELETE_TEACHER_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_TEACHER_FAIL,
            payload:error.response.data.message
        })
    }
};



// Update Dashboard  --Admin
export const updateTeacherAction = (id,newdashboardData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_TEACHER_REQUEST});

        const config = { headers:{ 'Content-Type': 'application/json' } ,
        withCredentials: true

     } 
        const {data} = await axios.put(`/api/v1/admin/teacher/${id}`,newdashboardData,config);

        dispatch({
            type:UPDATE_TEACHER_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_TEACHER_FAIL,
            payload:error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS});
}