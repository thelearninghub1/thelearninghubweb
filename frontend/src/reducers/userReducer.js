import {CLEAR_ERRORS, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAIL, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER_REQUEST, LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAIL, LOGOUT_USER_SUCCESS, LOGOUT_USER_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, FORGOT_PASSWORD_REQUEST, RESET_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, RESET_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, RESET_PASSWORD_FAIL, FORGOT_PASSWORD_RESET, UPDATE_PASSWORD_REQUEST, UPDATE_USER_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_USER_SUCCESS, UPDATE_PASSWORD_FAIL, UPDATE_USER_FAIL, UPDATE_PASSWORD_RESET, UPDATE_USER_RESET} from "../constants/userConstant";

// Login User Reducer
export const loginUserReducer = (state={user:{}},action) => {
    switch (action.type) {
            case REGISTER_USER_REQUEST:
                case LOGIN_USER_REQUEST:
                    case LOAD_USER_REQUEST:
            return {
                loading: true,
                isAuthenticatedUser:false
            }
            case LOGOUT_USER_SUCCESS:
                return {
                    loading: false,
                    user: null,
                    isAuthenticatedUser: false,
                  };
        case REGISTER_USER_SUCCESS:
            case LOGIN_USER_SUCCESS:
                case LOAD_USER_SUCCESS:
        return {
            ...state,
            loading: false,
            user: action.payload.user,
            isAuthenticatedUser: true
        }    

        case LOGOUT_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    

           
            case REGISTER_USER_FAIL:
                case LOGIN_USER_FAIL:
            return {
                ...state, 
                loading: false,
                error: action.payload,
                isAuthenticatedUser: false,
                user:null
            }
            case LOAD_USER_FAIL:
                return {
                  loading: false,
                  isAuthenticatedUser: false,
                  user: null,
                  error: action.payload,
                };
        case CLEAR_ERRORS: 
        return {
            ...state,
            error:null
        }    
            
    
        default:
            return state;
    }
};


// Forgot Password 
export const forgotPasswordReducer = (state={forgotPassword:{}},action) => {

    switch (action.type) {
        case FORGOT_PASSWORD_REQUEST:
            case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            }  
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success
            }    
        case FORGOT_PASSWORD_FAIL:
            case RESET_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            } 

        case FORGOT_PASSWORD_RESET:
            return {
                ...state,
                loading: false,
                success: false,

            }         
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
    
        default:
            return state;
    }
};





// Get login User Details Reducer   --Admin
export const getLoginDetailsReducer = (state={user:{}},action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            } 
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                user:action.payload.user,

            }    
        case USER_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            }   
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }     
        default:
            return state;
    }
};


// Update User Password
export const updateUserPasswordReducer = (state={user:{}}, action) => {
    switch (action.type) {
        case UPDATE_PASSWORD_REQUEST:
                case UPDATE_USER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            }    
            case UPDATE_USER_SUCCESS:
                return {
                    ...state,
                    loading: false,
                    success: action.payload.success,
                    user: action.payload.user
                } 

      
        case UPDATE_PASSWORD_FAIL:
                case UPDATE_USER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }    
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                loading: false,
                success:false
            }  
        case UPDATE_USER_RESET:
          return  {
                ...state,
                loading: false,
                success:false ,
            }    
     
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }    
            
    
        default:
            return state;
    }
};