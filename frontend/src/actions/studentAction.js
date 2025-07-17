import {
    ALL_STUDENT_FAIL,
    ALL_STUDENT_REQUEST,
    ALL_STUDENT_SUCCESS,
    CLEAR_ERRORS,
    CREATE_STUDENT_FAIL,
    CREATE_STUDENT_REQUEST,
    CREATE_STUDENT_SUCCESS,
    DELETE_STUDENT_FAIL,
    DELETE_STUDENT_REQUEST,
    DELETE_STUDENT_SUCCESS,
    STUDENT_DETAILS_FAIL,
    STUDENT_DETAILS_REQUEST,
    STUDENT_DETAILS_SUCCESS,
    UPDATE_STUDENT_FAIL,
    UPDATE_STUDENT_REQUEST,
    UPDATE_STUDENT_SUCCESS,
  } from "../constants/studentFeedbackConstants";
  
  import axios from 'axios';

  
  // Get All Students Data

  export const allStudentAction = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_STUDENT_REQUEST });
  
      const { data } = await axios.get(`/api/v1/students`);
  
      dispatch({
        type: ALL_STUDENT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: ALL_STUDENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  


  // Get Student Details

  export const studentDetailsAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: STUDENT_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/admin/student/${id}`);
  
      dispatch({
        type: STUDENT_DETAILS_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: STUDENT_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  

  /// Create Student Action

  export const createStudentAction = (newStudentData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_STUDENT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      };
  
      const { data } = await axios.post(`/api/v1/admin/student/create`, newStudentData, config);
  
      dispatch({
        type: CREATE_STUDENT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: CREATE_STUDENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  // Delete Student Action
  export const deleteStudentAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_STUDENT_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      };
  
      const { data } = await axios.delete(`/api/v1/admin/student/${id}`, config);
  
      dispatch({
        type: DELETE_STUDENT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: DELETE_STUDENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };


  // Update Student Action
  export const updateStudentAction = (id, newStudentData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_STUDENT_REQUEST });
  
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      };
  
      const { data } = await axios.put(`/api/v1/admin/student/${id}`, newStudentData, config);
  
      dispatch({
        type: UPDATE_STUDENT_SUCCESS,
        payload: data,
      });
  
    } catch (error) {
      dispatch({
        type: UPDATE_STUDENT_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  
  
  // Clear Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  