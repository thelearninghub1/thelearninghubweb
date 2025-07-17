import { ALL_CALENDER_FAIL, ALL_CALENDER_REQUEST, ALL_CALENDER_SUCCESS, CALENDER_DETAILS_FAIL, CALENDER_DETAILS_REQUEST, CALENDER_DETAILS_SUCCESS, CLEAR_ERRORS, CREATE_CALENDER_FAIL, CREATE_CALENDER_REQUEST, CREATE_CALENDER_SUCCESS, DELETE_CALENDER_FAIL, DELETE_CALENDER_REQUEST, DELETE_CALENDER_SUCCESS, UPDATE_CALENDER_FAIL, UPDATE_CALENDER_REQUEST, UPDATE_CALENDER_SUCCESS } from "../constants/calenderConstants";
import axios  from "axios";


// Get All Calender Data
export const allCalenderAction = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_CALENDER_REQUEST });

    const { data } = await axios.get(`/api/v1/calenders`);

    dispatch({
      type: ALL_CALENDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_CALENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Calender Details
export const calenderDetailsAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: CALENDER_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/v1/admin/calender/${id}`);

    dispatch({
      type: CALENDER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CALENDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Create Calender Action --Admin
export const createCalenderAction = (newCalenderData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_CALENDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.post(
      `/api/v1/admin/calender/create`,
      newCalenderData,
      config
    );

    dispatch({
      type: CREATE_CALENDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_CALENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Delete Calender --Admin
export const deleteCalenderAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CALENDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.delete(
      `/api/v1/admin/calender/${id}`,
      config
    );

    dispatch({
      type: DELETE_CALENDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CALENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Update Calender --Admin
export const updateCalenderAction = (id, newCalenderData) => async (dispatch) => {
  try {
    dispatch({ type: UPDATE_CALENDER_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    };

    const { data } = await axios.put(
      `/api/v1/admin/calender/${id}`,
      newCalenderData,
      config
    );

    dispatch({
      type: UPDATE_CALENDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_CALENDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
