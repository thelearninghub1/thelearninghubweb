import {
    ALL_CARD_FAIL,
    ALL_CARD_REQUEST,
    ALL_CARD_SUCCESS,
    CARD_DETAILS_FAIL,
    CARD_DETAILS_REQUEST,
    CARD_DETAILS_SUCCESS,
    CREATE_CARD_FAIL,
    CREATE_CARD_REQUEST,
    CREATE_CARD_SUCCESS,
    DELETE_CARD_FAIL,
    DELETE_CARD_REQUEST,
    DELETE_CARD_SUCCESS,
    UPDATE_CARD_FAIL,
    UPDATE_CARD_REQUEST,
    UPDATE_CARD_SUCCESS,
    CLEAR_ERRORS
  } from "../constants/rankCardConstants";
  
  import axios from "axios";
// Get All Cards
export const allCardAction = () => async (dispatch) => {
    try {
      dispatch({ type: ALL_CARD_REQUEST });
  
      const { data } = await axios.get("/api/v1/cards");
  
      dispatch({
        type: ALL_CARD_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: ALL_CARD_FAIL,
        payload: error.response.data.message
      });
    }
  };
  
  // Get Card Details
  export const cardDetailsAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: CARD_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/admin/card/${id}`);
  
      dispatch({
        type: CARD_DETAILS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: CARD_DETAILS_FAIL,
        payload: error.response.data.message
      });
    }
  };
  
  // Create Card -- Admin
  export const createCardAction = (newCardData) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_CARD_REQUEST });
  
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true
      };
  
      const { data } = await axios.post(
        "/api/v1/admin/card/create",
        newCardData,
        config
      );
  
      dispatch({
        type: CREATE_CARD_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: CREATE_CARD_FAIL,
        payload: error.response.data.message
      });
    }
  };
  
  // Delete Card -- Admin
  export const deleteCardAction = (id) => async (dispatch) => {
    try {
      dispatch({ type: DELETE_CARD_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
  
      const { data } = await axios.delete(
        `/api/v1/admin/card/${id}`,
        config
      );
  
      dispatch({
        type: DELETE_CARD_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: DELETE_CARD_FAIL,
        payload: error.response.data.message
      });
    }
  };
  
  // Update Card -- Admin
  export const updateCardAction = (id, newCardData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_CARD_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
        withCredentials: true
      };
  
      const { data } = await axios.put(
        `/api/v1/admin/card/${id}`,
        newCardData,
        config
      );
  
      dispatch({
        type: UPDATE_CARD_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CARD_FAIL,
        payload: error.response.data.message
      });
    }
  };
  
  // Clear Errors
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
    