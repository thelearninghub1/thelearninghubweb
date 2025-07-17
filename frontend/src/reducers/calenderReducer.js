import { ALL_CALENDER_FAIL, ALL_CALENDER_REQUEST, ALL_CALENDER_SUCCESS, CALENDER_DETAILS_FAIL, CALENDER_DETAILS_REQUEST, CALENDER_DETAILS_SUCCESS, CLEAR_ERRORS, CREATE_CALENDER_FAIL, CREATE_CALENDER_REQUEST, CREATE_CALENDER_RESET, CREATE_CALENDER_SUCCESS, DELETE_CALENDER_FAIL, DELETE_CALENDER_REQUEST, DELETE_CALENDER_RESET, DELETE_CALENDER_SUCCESS, UPDATE_CALENDER_FAIL, UPDATE_CALENDER_REQUEST, UPDATE_CALENDER_RESET, UPDATE_CALENDER_SUCCESS } from "../constants/calenderConstants";

// Get All Calender 
export const allCalenderReducer = (state={calenders:[]},action) => {
    switch (action.type) {
        case ALL_CALENDER_REQUEST:
            return{
                ...state,
                loading:true,
                calenders:[]
            }
        case ALL_CALENDER_SUCCESS:
            return {
                ...state,
                loading:false,
                calenders:action.payload.calenders

            }    
        case ALL_CALENDER_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            }   
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }     
            
    
        default:
            return state;
    }

}


// Calender Details 
export const calenderDetailReducer = (state={calender:{}},action) => {
    switch (action.type) {
        case CALENDER_DETAILS_REQUEST:
            return {
                ...state,
                loading:true
            }
        case CALENDER_DETAILS_SUCCESS:
            return {
                ...state,
                loading:false,
                calender:action.payload.calender
            }   
        case CALENDER_DETAILS_FAIL:
            return {
                ...state,
                loading:false,
                error:action.payload
            } 
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }        
            
    
        default:
            return state
    }
};



// Create & Update & Delete Reducer
export const createCalenderReducer = (state={calender:{}},action) => {
    switch (action.type) {
        case CREATE_CALENDER_REQUEST:
            case UPDATE_CALENDER_REQUEST:
                case DELETE_CALENDER_REQUEST:
                    return {
                        ...state,
                        loading:true
                    }
        case CREATE_CALENDER_SUCCESS:
            case UPDATE_CALENDER_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    calender:action.payload.calender,
                    success:action.payload.success
                }   
        case DELETE_CALENDER_SUCCESS:
            return {
                     ...state,
                    loading:false,
                    message:action.payload.message,
                    success:action.payload.success
            }  
        case CREATE_CALENDER_FAIL:
            case UPDATE_CALENDER_FAIL:
                case DELETE_CALENDER_FAIL:
                    return {
                        ...state,
                        loading:false,
                        error:action.payload
                    }           
        case CREATE_CALENDER_RESET:
            case UPDATE_CALENDER_RESET:
                return {
                    ...state,
                    loading:false,
                    success:false,

                }
        case DELETE_CALENDER_RESET:
            return {
                ...state,
                loading:false,
                success:false,
                message:null
            }    
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null
            }        
        default:
            return state
    }
}