import {
  ALL_AFFILIATION_FAIL,
  ALL_AFFILIATION_REQUEST,
  ALL_AFFILIATION_SUCCESS,
  CLEAR_ERRORS,
  CREATE_AFFILIATION_FAIL,
  CREATE_AFFILIATION_REQUEST,
  CREATE_AFFILIATION_RESET,
  CREATE_AFFILIATION_SUCCESS,
  DELETE_AFFILIATION_FAIL,
  DELETE_AFFILIATION_REQUEST,
  DELETE_AFFILIATION_RESET,
  DELETE_AFFILIATION_SUCCESS,
  AFFILIATION_DETAILS_FAIL,
  AFFILIATION_DETAILS_REQUEST,
  AFFILIATION_DETAILS_SUCCESS,
  UPDATE_AFFILIATION_FAIL,
  UPDATE_AFFILIATION_REQUEST,
  UPDATE_AFFILIATION_RESET,
  UPDATE_AFFILIATION_SUCCESS,
} from "../constants/afilationConstants";

// Get All Affiliation Data
export const getAllAffiliationReducer = (state = { afiliations: [] }, action) => {
  switch (action.type) {
    case ALL_AFFILIATION_REQUEST:
      return {
        ...state,
        loading: true,
        afiliations: [],
      };
    case ALL_AFFILIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        afiliations: action.payload.afiliations,
      };
    case ALL_AFFILIATION_FAIL:
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

// Get Affiliation Details 
export const getAffiliationDetailsReducer = (state = { afiliation: {} }, action) => {
  switch (action.type) {
    case AFFILIATION_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case AFFILIATION_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        afiliation: action.payload.afiliation,
      };
    case AFFILIATION_DETAILS_FAIL:
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

// Create / Update / Delete Affiliation --Admin
export const createAffiliationReducer = (state = { affiliation: {} }, action) => {
  switch (action.type) {
    case CREATE_AFFILIATION_REQUEST:
    case DELETE_AFFILIATION_REQUEST:
    case UPDATE_AFFILIATION_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_AFFILIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        afiliation: action.payload.afiliation,
        success: action.payload.success,
      };

    case DELETE_AFFILIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
        message: action.payload.message,
      };

    case UPDATE_AFFILIATION_SUCCESS:
      return {
        ...state,
        loading: false,
        success: action.payload.success,
      };

    case CREATE_AFFILIATION_FAIL:
    case DELETE_AFFILIATION_FAIL:
    case UPDATE_AFFILIATION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CREATE_AFFILIATION_RESET:
    case UPDATE_AFFILIATION_RESET:
      return {
        ...state,
        loading: false,
        success: false,
      };

    case DELETE_AFFILIATION_RESET:
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
