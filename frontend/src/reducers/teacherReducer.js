import { ALL_TEACHER_FAIL, ALL_TEACHER_REQUEST, ALL_TEACHER_SUCCESS, CLEAR_ERRORS, CREATE_TEACHER_FAIL, CREATE_TEACHER_REQUEST, CREATE_TEACHER_RESET, CREATE_TEACHER_SUCCESS, DELETE_TEACHER_FAIL, DELETE_TEACHER_REQUEST, DELETE_TEACHER_RESET, DELETE_TEACHER_SUCCESS, TEACHER_DETAILS_FAIL, TEACHER_DETAILS_REQUEST, TEACHER_DETAILS_SUCCESS, UPDATE_TEACHER_FAIL, UPDATE_TEACHER_REQUEST, UPDATE_TEACHER_RESET, UPDATE_TEACHER_SUCCESS } from "../constants/teacherConstants";


// Get All Teachers Data
export const getTeacherReducer = (state={teachers:[]}, action) => {
    switch (action.type) {
        case ALL_TEACHER_REQUEST:
            return {
                ...state,
                loading: true,
                teachers:[]
            }
        case ALL_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                teachers:action.payload.teachers
            };
        case ALL_TEACHER_FAIL:
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
export const getTeacherDetailsReducer = (state={teacher:{}}, action) => {
    switch (action.type) {
        case TEACHER_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case TEACHER_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                teacher: action.payload.teacher
            }    
        case TEACHER_DETAILS_FAIL:
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
export const createTeacherReducer = (state= {teacher:{}},action) => {
    switch (action.type) {
        case CREATE_TEACHER_REQUEST:
            case DELETE_TEACHER_REQUEST:
                case UPDATE_TEACHER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                teacher:action.payload.teacher,
                success: action.payload.success
            }  
        case DELETE_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            } 
            case UPDATE_TEACHER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            }      

        case CREATE_TEACHER_FAIL:
            case DELETE_TEACHER_FAIL:
                case UPDATE_TEACHER_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        case CREATE_TEACHER_RESET:
            case UPDATE_TEACHER_RESET:
            return {
                ...state,
                loading: false,
                success: false,
            }     
        case DELETE_TEACHER_RESET:
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