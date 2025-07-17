
import axios from 'axios';
import { ALL_SUBJECT_FAIL, ALL_SUBJECT_REQUEST, ALL_SUBJECT_SUCCESS, CLEAR_ERRORS, CREATE_SUBJECT_FAIL, CREATE_SUBJECT_REQUEST, CREATE_SUBJECT_SUCCESS, DELETE_SUBJECT_FAIL, DELETE_SUBJECT_REQUEST, DELETE_SUBJECT_SUCCESS, SUBJECT_DETAILS_FAIL, SUBJECT_DETAILS_REQUEST, SUBJECT_DETAILS_SUCCESS, UPDATE_SUBJECT_FAIL, UPDATE_SUBJECT_REQUEST, UPDATE_SUBJECT_SUCCESS } from "../constants/subjectConstants";



// All Subject Actions
export const allProjectsAction = (currentPage=1, grade = "" ) => async (dispatch) => {
    try {
        dispatch({type:ALL_SUBJECT_REQUEST});


        let link = `/api/v1//subjects?page=${currentPage}`


        if (grade) {
            link = `/api/v1//subjects?page=${currentPage}&grade=${grade}`
        }


        const {data} = await axios.get(link);

        dispatch({
            type:ALL_SUBJECT_SUCCESS,
            payload:data
        })
    } catch (error) {
        dispatch({
            type:ALL_SUBJECT_FAIL,
            payload:error.response.data.message
        })
    }
};

// Get All Subjects Data
export const allSubjectsAction = () => async (dispatch) => {
    try {
        dispatch({type:ALL_SUBJECT_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/subjects`);

        dispatch({
            type:ALL_SUBJECT_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_SUBJECT_FAIL,
            payload: error.response.data.message,
        })
    }
};


// Get Subject Details  
export const subjectDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type:SUBJECT_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/subject/${id}`)

        dispatch({
            type:SUBJECT_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:SUBJECT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};



// Create Dashboard Action  --Admin
export const createSubjectAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CREATE_SUBJECT_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"},
        withCredentials: true
    }

        const {data} = await axios.post(`/api/v1/admin/subject/create`,newDashboardData,config);

        dispatch({
            type:CREATE_SUBJECT_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CREATE_SUBJECT_FAIL,
            payload: error.response.data.message
        })
    }
};





// Delete Dashboard   ---Admin
export const deleteSubjectAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_SUBJECT_REQUEST});

        const config = {headers: {"Content-Type": "application/json"},
        withCredentials: true
    };

        const {data} = await axios.delete(`/api/v1/admin/subject/${id}`,config);

        dispatch({
            type:DELETE_SUBJECT_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_SUBJECT_FAIL,
            payload:error.response.data.message
        })
    }
};



// Update Dashboard  --Admin
export const updateSubjectAction = (id,newdashboardData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_SUBJECT_REQUEST});

        const config = { headers:{ 'Content-Type': 'application/json' } ,
        withCredentials: true

     } 
        const {data} = await axios.put(`/api/v1/admin/subject/${id}`,newdashboardData,config);

        dispatch({
            type:UPDATE_SUBJECT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_SUBJECT_FAIL,
            payload:error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS});
}