import { CAREER_SUBMIT_FAIL, CAREER_SUBMIT_REQUEST, CAREER_SUBMIT_RESET, CAREER_SUBMIT_SUCCESS, CLEAR_ERRORS } from "../constants/careerConstants";

export const createCareerReducer = (state = { message: {} }, action) => {
    switch (action.type) {
        case CAREER_SUBMIT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case CAREER_SUBMIT_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.payload.message,
                success: action.payload.success,
            };
          
   
        case CAREER_SUBMIT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case CAREER_SUBMIT_RESET:
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