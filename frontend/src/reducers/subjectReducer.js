import { ALL_SUBJECT_FAIL, ALL_SUBJECT_REQUEST, ALL_SUBJECT_SUCCESS, CLEAR_ERRORS, CREATE_SUBJECT_FAIL, CREATE_SUBJECT_REQUEST, CREATE_SUBJECT_RESET, CREATE_SUBJECT_SUCCESS, DELETE_SUBJECT_FAIL, DELETE_SUBJECT_REQUEST, DELETE_SUBJECT_RESET, DELETE_SUBJECT_SUCCESS, SUBJECT_DETAILS_FAIL, SUBJECT_DETAILS_REQUEST, SUBJECT_DETAILS_SUCCESS, UPDATE_SUBJECT_FAIL, UPDATE_SUBJECT_REQUEST, UPDATE_SUBJECT_RESET, UPDATE_SUBJECT_SUCCESS } from "../constants/subjectConstants";







// Get All Subjects Data

// Get All Projects 
export const getAllprojectsReducer = (state={subjects:[]},action) =>{
    switch (action.type) {
        case ALL_SUBJECT_REQUEST:
            return {
                loading: true,
                subjects:[]
            }
        case ALL_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                subjects:action.payload.subjects,
                subjectsCount:action.payload.subjectsCount,
                resultPerPage:action.payload.resultPerPage,
            }    
        case ALL_SUBJECT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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


// Get All Subjects Data --Admin
export const getDashboardReducer = (state={subjects:[]}, action) => {
    switch (action.type) {
        case ALL_SUBJECT_REQUEST:
            return {
                ...state,
                loading: true,
                subjects:[]
            }
        case ALL_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                subjects:action.payload.subjects
            };
        case ALL_SUBJECT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
                
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



// Get Subjects Details 
export const getDashboardDetailsReducer = (state={subject:{}}, action) => {
    switch (action.type) {
        case SUBJECT_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case SUBJECT_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                subject: action.payload.subject
            }    
        case SUBJECT_DETAILS_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
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


// Create Dashboard --Admin
export const createDasboardReducer = (state= {dashboard:{}},action) => {
    switch (action.type) {
        case CREATE_SUBJECT_REQUEST:
            case DELETE_SUBJECT_REQUEST:
                case UPDATE_SUBJECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                subject:action.payload.subject,
                success: action.payload.success
            }  
        case DELETE_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            } 
            case UPDATE_SUBJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            }      

        case CREATE_SUBJECT_FAIL:
            case DELETE_SUBJECT_FAIL:
                case UPDATE_SUBJECT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        case CREATE_SUBJECT_RESET:
            case UPDATE_SUBJECT_RESET:
            return {
                ...state,
                loading: false,
                success: false,
            }     
        case DELETE_SUBJECT_RESET:
            return {
                ...state,
                loading: false,
                success: false,
                message:null
            }   
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }     
    
        default:
            return state;
    }
}