import { ALL_TEAM_FAIL, ALL_TEAM_REQUEST, ALL_TEAM_SUCCESS, CLEAR_ERRORS, CREATE_TEAM_FAIL, CREATE_TEAM_REQUEST, CREATE_TEAM_SUCCESS, DELETE_TEAM_FAIL, DELETE_TEAM_REQUEST, DELETE_TEAM_SUCCESS, TEAM_DETAILS_FAIL, TEAM_DETAILS_REQUEST, TEAM_DETAILS_SUCCESS, UPDATE_TEAM_FAIL, UPDATE_TEAM_REQUEST, UPDATE_TEAM_SUCCESS } from "../constants/TeamConstants";

import axios from 'axios';


// Get All Teams Data
export const allTeamAction = () => async (dispatch) => {
    try {
        dispatch({type:ALL_TEAM_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/teams`);

        dispatch({
            type:ALL_TEAM_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:ALL_TEAM_FAIL,
            payload: error.response.data.message,
        })
    }
};



// Get Teams Details  
export const teamsDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({type:TEAM_DETAILS_REQUEST});

        const {data} = await axios.get(`/api/v1/admin/team/${id}`)

        dispatch({
            type:TEAM_DETAILS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type:TEAM_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
};



// Create Team Action  --Admin
export const createTeamAction = (newDashboardData) => async (dispatch) => {
    try {
        dispatch({type:CREATE_TEAM_REQUEST});

        const config = {headers: {"Content-Type":"multipart/form-data"},
        withCredentials: true
    }

        const {data} = await axios.post(`/api/v1/admin/team/create`,newDashboardData,config);

        dispatch({
            type:CREATE_TEAM_SUCCESS,
            payload: data
        })


    } catch (error) {
        dispatch({
            type:CREATE_TEAM_FAIL,
            payload: error.response.data.message
        })
    }
};




// Delete TeaM   ---Admin
export const deleteTeamAction = (id) => async (dispatch) => {
    try {
        dispatch({type:DELETE_TEAM_REQUEST});

        const config = {headers: {"Content-Type": "application/json"},
        withCredentials: true
    };

        const {data} = await axios.delete(`/api/v1/admin/team/${id}`,config);

        dispatch({
            type:DELETE_TEAM_SUCCESS,
            payload:data
        })
        
    } catch (error) {
        dispatch({
            type:DELETE_TEAM_FAIL,
            payload:error.response.data.message
        })
    }
};


// Update Dashboard  --Admin
export const updateTeamAction = (id,newdashboardData) => async (dispatch) => {
    try {
        dispatch({type:UPDATE_TEAM_REQUEST});

        const config = { headers:{ 'Content-Type': 'application/json' } ,
        withCredentials: true

     } 
        const {data} = await axios.put(`/api/v1/admin/teaM/${id}`,newdashboardData,config);

        dispatch({
            type:UPDATE_TEAM_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type:UPDATE_TEAM_FAIL,
            payload:error.response.data.message
        })
    }
}


// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({type:CLEAR_ERRORS});
}