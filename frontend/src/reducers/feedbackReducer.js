import {
    ALL_FEEDBACK_REQUEST,
    ALL_FEEDBACK_SUCCESS,
    ALL_FEEDBACK_FAIL,
    CREATE_FEEDBACK_REQUEST,
    CREATE_FEEDBACK_SUCCESS,
    CREATE_FEEDBACK_FAIL,
    CREATE_FEEDBACK_RESET,
    DELETE_FEEDBACK_REQUEST,
    DELETE_FEEDBACK_SUCCESS,
    DELETE_FEEDBACK_FAIL,
    DELETE_FEEDBACK_RESET,
    UPDATE_FEEDBACK_REQUEST,
    UPDATE_FEEDBACK_SUCCESS,
    UPDATE_FEEDBACK_FAIL,
    UPDATE_FEEDBACK_RESET,
    FEEDBACK_DETAILS_REQUEST,
    FEEDBACK_DETAILS_SUCCESS,
    FEEDBACK_DETAILS_FAIL,
    CLEAR_ERRORS,
} from "../constants/feedbackConstants";

// Get All Feedbacks
export const getFeedbackReducer = (state = { feedbacks: [] }, action) => {
    switch (action.type) {
        case ALL_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true,
                feedbacks: [],
            };
        case ALL_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                feedbacks: action.payload.feedbacks,
            };
        case ALL_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

// Get Feedback Details
export const getFeedbackDetailsReducer = (state = { feedback: {} }, action) => {
    switch (action.type) {
        case FEEDBACK_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FEEDBACK_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                feedback: action.payload.feedback,
            };
        case FEEDBACK_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};

// Create, Update, Delete Feedback
export const createFeedbackReducer = (state = { feedback: {} }, action) => {
    switch (action.type) {
        case CREATE_FEEDBACK_REQUEST:
        case DELETE_FEEDBACK_REQUEST:
        case UPDATE_FEEDBACK_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CREATE_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                feedback: action.payload.feedback,
                success: action.payload.success,
            };
        case DELETE_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message,
            };
        case UPDATE_FEEDBACK_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            };
        case CREATE_FEEDBACK_FAIL:
        case DELETE_FEEDBACK_FAIL:
        case UPDATE_FEEDBACK_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CREATE_FEEDBACK_RESET:
        case UPDATE_FEEDBACK_RESET:
            return {
                ...state,
                loading: false,
                success: false,
            };
        case DELETE_FEEDBACK_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                message: null,
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
