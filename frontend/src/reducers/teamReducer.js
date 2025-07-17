import { ALL_TEAM_FAIL, ALL_TEAM_REQUEST, ALL_TEAM_SUCCESS, CLEAR_ERRORS, CREATE_TEAM_FAIL, CREATE_TEAM_REQUEST, CREATE_TEAM_RESET, CREATE_TEAM_SUCCESS, DELETE_TEAM_FAIL, DELETE_TEAM_REQUEST, DELETE_TEAM_RESET, DELETE_TEAM_SUCCESS, TEAM_DETAILS_FAIL, TEAM_DETAILS_REQUEST, TEAM_DETAILS_SUCCESS, UPDATE_TEAM_FAIL, UPDATE_TEAM_REQUEST, UPDATE_TEAM_RESET, UPDATE_TEAM_SUCCESS } from "../constants/TeamConstants";


// Get All Team Data
export const getAllTeamReducer = (state={teams:[]}, action) => {
    switch (action.type) {
        case ALL_TEAM_REQUEST:
            return {
                ...state,
                loading: true,
                teams:[]
            }
        case ALL_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                teams:action.payload.teams
            };
        case ALL_TEAM_FAIL:
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
export const getTeamDetailsReducer = (state={team:{}}, action) => {
    switch (action.type) {
        case TEAM_DETAILS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case TEAM_DETAILS_SUCCESS:
            return {
                ...state,
                loading: false,
                team: action.payload.team
            }    
        case TEAM_DETAILS_FAIL:
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
export const createTeamReducer = (state= {team:{}},action) => {
    switch (action.type) {
        case CREATE_TEAM_REQUEST:
            case DELETE_TEAM_REQUEST:
                case UPDATE_TEAM_REQUEST:
            return {
                ...state,
                loading: true
            }
        case CREATE_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                team:action.payload.team,
                success: action.payload.success
            }  
        case DELETE_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
                message: action.payload.message
            } 
            case UPDATE_TEAM_SUCCESS:
            return {
                ...state,
                loading: false,
                success: action.payload.success,
            }      

        case CREATE_TEAM_FAIL:
            case DELETE_TEAM_FAIL:
                case UPDATE_TEAM_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }  
        case CREATE_TEAM_RESET:
            case UPDATE_TEAM_RESET:
            return {
                ...state,
                loading: false,
                success: false,
            }     
        case DELETE_TEAM_RESET:
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