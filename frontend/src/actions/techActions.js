import {
    ALL_PARTNER_FAIL,
    ALL_PARTNER_REQUEST,
    ALL_PARTNER_SUCCESS,
    CLEAR_ERRORS,
    CREATE_PARTNER_FAIL,
    CREATE_PARTNER_REQUEST,
    CREATE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAIL,
    DELETE_PARTNER_REQUEST,
    DELETE_PARTNER_SUCCESS,
    PARTNER_DETAILS_FAIL,
    PARTNER_DETAILS_REQUEST,
    PARTNER_DETAILS_SUCCESS,
    UPDATE_PARTNER_FAIL,
    UPDATE_PARTNER_REQUEST,
    UPDATE_PARTNER_SUCCESS
} from "../constants/TechConstants";

import axios from 'axios';

// Get All Partners Data
export const allPartnerAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PARTNER_REQUEST });

        const { data } = await axios.get(`/api/v1/partners`);

        dispatch({
            type: ALL_PARTNER_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_PARTNER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Partner Details
export const partnerDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: PARTNER_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/partner/${id}`);

        dispatch({
            type: PARTNER_DETAILS_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: PARTNER_DETAILS_FAIL,
            payload: error.response.data.message
        });
    }
};

// Create Partner Action -- Admin
export const createPartnerAction = (newPartnerData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_PARTNER_REQUEST });

        const config = {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true
        };

        const { data } = await axios.post(`/api/v1/admin/partner/create`, newPartnerData, config);

        dispatch({
            type: CREATE_PARTNER_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: CREATE_PARTNER_FAIL,
            payload: error.response.data.message
        });
    }
};

// Delete Partner -- Admin
export const deletePartnerAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PARTNER_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        };

        const { data } = await axios.delete(`/api/v1/admin/partner/${id}`, config);

        dispatch({
            type: DELETE_PARTNER_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: DELETE_PARTNER_FAIL,
            payload: error.response.data.message
        });
    }
};

// Update Partner -- Admin
export const updatePartnerAction = (id, updatedPartnerData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_PARTNER_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true
        };

        const { data } = await axios.put(`/api/v1/admin/partner/${id}`, updatedPartnerData, config);

        dispatch({
            type: UPDATE_PARTNER_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: UPDATE_PARTNER_FAIL,
            payload: error.response.data.message
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
