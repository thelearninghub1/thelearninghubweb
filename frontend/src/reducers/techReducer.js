import {
    ALL_PARTNER_FAIL,
    ALL_PARTNER_REQUEST,
    ALL_PARTNER_SUCCESS,
    CLEAR_ERRORS,
    CREATE_PARTNER_FAIL,
    CREATE_PARTNER_REQUEST,
    CREATE_PARTNER_RESET,
    CREATE_PARTNER_SUCCESS,
    DELETE_PARTNER_FAIL,
    DELETE_PARTNER_REQUEST,
    DELETE_PARTNER_RESET,
    DELETE_PARTNER_SUCCESS,
    PARTNER_DETAILS_FAIL,
    PARTNER_DETAILS_REQUEST,
    PARTNER_DETAILS_SUCCESS,
    UPDATE_PARTNER_FAIL,
    UPDATE_PARTNER_REQUEST,
    UPDATE_PARTNER_RESET,
    UPDATE_PARTNER_SUCCESS
} from "../constants/TechConstants";

// Get All Partner Data
export const getAllPartnerReducer = (state = { partners: [] }, action) => {
    switch (action.type) {
        case ALL_PARTNER_REQUEST:
            return {
                ...state,
                loading: true,
                partners: []
            };
        case ALL_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partners: action.payload.partners
            };
        case ALL_PARTNER_FAIL:
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

// Get Partner Details
export const getPartnerDetailsReducer = (state = { partner: {} }, action) => {
    switch (action.type) {
        case PARTNER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case PARTNER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                partner: action.payload.partner
            };
        case PARTNER_DETAILS_FAIL:
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

// Create / Update / Delete Partner -- Admin
export const createPartnerReducer = (state = { partner: {} }, action) => {
    switch (action.type) {
        case CREATE_PARTNER_REQUEST:
        case DELETE_PARTNER_REQUEST:
        case UPDATE_PARTNER_REQUEST:
            return {
                ...state,
                loading: true
            };
        case CREATE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                partner: action.payload.partner,
                success: action.payload.success
            };
        case DELETE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            };
        case UPDATE_PARTNER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success
            };
        case CREATE_PARTNER_FAIL:
        case DELETE_PARTNER_FAIL:
        case UPDATE_PARTNER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case CREATE_PARTNER_RESET:
        case UPDATE_PARTNER_RESET:
            return {
                ...state,
                loading: false,
                success: false
            };
        case DELETE_PARTNER_RESET:
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
