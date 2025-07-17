import {
    ALL_STUDENT_FAIL,
    ALL_STUDENT_REQUEST,
    ALL_STUDENT_SUCCESS,
    CLEAR_ERRORS,
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_RESET,
    CREATE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_RESET,
    DELETE_STUDENT_SUCCESS,
    STUDENT_DETAILS_FAIL,
    STUDENT_DETAILS_REQUEST,
    STUDENT_DETAILS_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_RESET,
    UPDATE_STUDENT_SUCCESS,
  } from "../constants/studentFeedbackConstants";

  export const getAllStudentReducer = (state = { feedbacks: [] }, action) => {
    switch (action.type) {
      case ALL_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
          feedbacks: [],
        };
      case ALL_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          feedbacks: action.payload.feedbacks,
        };
      case ALL_STUDENT_FAIL:
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



  // Single Student Feedback Reducer
  
  export const getStudentDetailsReducer = (state = { feedback: {} }, action) => {
    switch (action.type) {
      case STUDENT_DETAILS_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case STUDENT_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          feedback: action.payload.feedback,
        };
      case STUDENT_DETAILS_FAIL:
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
  


  /// Create Feedback Reducer

  export const createStudentReducer = (state = { feedback: {} }, action) => {
    switch (action.type) {
      case CREATE_STUDENT_REQUEST:
      case DELETE_STUDENT_REQUEST:
      case UPDATE_STUDENT_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case CREATE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          student: action.payload.student,
          success: action.payload.success,
        };
  
      case DELETE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success,
          message: action.payload.message,
        };
  
      case UPDATE_STUDENT_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success,
        };
  
      case CREATE_STUDENT_FAIL:
      case DELETE_STUDENT_FAIL:
      case UPDATE_STUDENT_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
  
      case CREATE_STUDENT_RESET:
      case UPDATE_STUDENT_RESET:
        return {
          ...state,
          loading: false,
          success: false,
        };
  
      case DELETE_STUDENT_RESET:
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
  