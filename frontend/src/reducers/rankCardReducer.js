import {
    ALL_CARD_FAIL,
    ALL_CARD_REQUEST,
    ALL_CARD_SUCCESS,
    CARD_DETAILS_FAIL,
    CARD_DETAILS_REQUEST,
    CARD_DETAILS_SUCCESS,
    CREATE_CARD_FAIL,
    CREATE_CARD_REQUEST,
    CREATE_CARD_RESET,
    CREATE_CARD_SUCCESS,
    DELETE_CARD_FAIL,
    DELETE_CARD_REQUEST,
    DELETE_CARD_RESET,
    DELETE_CARD_SUCCESS,
    UPDATE_CARD_FAIL,
    UPDATE_CARD_REQUEST,
    UPDATE_CARD_RESET,
    UPDATE_CARD_SUCCESS,
    CLEAR_ERRORS
  } from "../constants/rankCardConstants";
  

  // Get All Card Data
export const getAllCardReducer = (state = { cards: [] }, action) => {
    switch (action.type) {
      case ALL_CARD_REQUEST:
        return {
          ...state,
          loading: true,
          cards: []
        };
      case ALL_CARD_SUCCESS:
        return {
          ...state,
          loading: false,
          cards: action.payload.cards
        };
      case ALL_CARD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  
  // Get Card Details
  export const getCardDetailsReducer = (state = { card: {} }, action) => {
    switch (action.type) {
      case CARD_DETAILS_REQUEST:
        return {
          ...state,
          loading: true
        };
      case CARD_DETAILS_SUCCESS:
        return {
          ...state,
          loading: false,
          card: action.payload.card
        };
      case CARD_DETAILS_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  
  // Create / Update / Delete Card
  export const createCardReducer = (state = { card: {} }, action) => {
    switch (action.type) {
      case CREATE_CARD_REQUEST:
      case UPDATE_CARD_REQUEST:
      case DELETE_CARD_REQUEST:
        return {
          ...state,
          loading: true
        };
      case CREATE_CARD_SUCCESS:
        return {
          ...state,
          loading: false,
          card: action.payload.card,
          success: action.payload.success
        };
      case UPDATE_CARD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success
        };
      case DELETE_CARD_SUCCESS:
        return {
          ...state,
          loading: false,
          success: action.payload.success,
          message: action.payload.message
        };
      case CREATE_CARD_FAIL:
      case UPDATE_CARD_FAIL:
      case DELETE_CARD_FAIL:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
      case CREATE_CARD_RESET:
      case UPDATE_CARD_RESET:
        return {
          ...state,
          loading: false,
          success: false
        };
      case DELETE_CARD_RESET:
        return {
          ...state,
          loading: false,
          success: false,
          message: null
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null
        };
      default:
        return state;
    }
  };
  