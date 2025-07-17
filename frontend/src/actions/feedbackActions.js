import axios from 'axios';
import {
    ALL_FEEDBACK_REQUEST,
    ALL_FEEDBACK_SUCCESS,
    ALL_FEEDBACK_FAIL,
    FEEDBACK_DETAILS_REQUEST,
    FEEDBACK_DETAILS_SUCCESS,
    FEEDBACK_DETAILS_FAIL,
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_SUCCESS,
    CREATE_FEEDBACK_FAIL,
    DELETE_FEEDBACK_REQUEST,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_FAIL,
    UPDATE_FEEDBACK_REQUEST,
    UPDATE_FEEDBACK_SUCCESS,
    UPDATE_FEEDBACK_FAIL,
    CLEAR_ERRORS,
} from "../constants/feedbackConstants";

// Get All Feedbacks
export const allFeedbackAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_FEEDBACK_REQUEST });

        const { data } = await axios.get(`/api/v1/feedbacks`);

        dispatch({
            type: ALL_FEEDBACK_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: ALL_FEEDBACK_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Get Feedback Details
export const feedbackDetailsAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: FEEDBACK_DETAILS_REQUEST });

        const { data } = await axios.get(`/api/v1/admin/feedback/${id}`);

        dispatch({
            type: FEEDBACK_DETAILS_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: FEEDBACK_DETAILS_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Create Feedback --Admin
export const createFeedbackAction = (newFeedbackData) => async (dispatch) => {
    try {
        dispatch({ type: CREATE_FEEDBACK_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };

        const { data } = await axios.post(`/api/v1/admin/feedback/create`, newFeedbackData, config);

        dispatch({
            type: CREATE_FEEDBACK_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: CREATE_FEEDBACK_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Delete Feedback --Admin
export const deleteFeedbackAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_FEEDBACK_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };

        const { data } = await axios.delete(`/api/v1/admin/feedback/${id}`, config);

        dispatch({
            type: DELETE_FEEDBACK_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: DELETE_FEEDBACK_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Update Feedback --Admin
export const updateFeedbackAction = (id, updatedFeedbackData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_FEEDBACK_REQUEST });

        const config = {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
        };

        const { data } = await axios.put(`/api/v1/admin/feedback/${id}`, updatedFeedbackData, config);

        dispatch({
            type: UPDATE_FEEDBACK_SUCCESS,
            payload: data,
        });

    } catch (error) {
        dispatch({
            type: UPDATE_FEEDBACK_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
};
