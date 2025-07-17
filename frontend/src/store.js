import { configureStore} from '@reduxjs/toolkit';
import {  forgotPasswordReducer, getLoginDetailsReducer, loginUserReducer, updateUserPasswordReducer } from './reducers/userReducer';
import { createDasboardReducer, getAllprojectsReducer, getDashboardDetailsReducer, getDashboardReducer } from './reducers/subjectReducer';
import { createTeacherReducer, getTeacherDetailsReducer, getTeacherReducer } from './reducers/teacherReducer';
import { createTeamReducer, getAllTeamReducer, getTeamDetailsReducer } from './reducers/teamReducer';
import { createPartnerReducer, getAllPartnerReducer, getPartnerDetailsReducer } from './reducers/techReducer';
import { createFeedbackReducer, getFeedbackDetailsReducer, getFeedbackReducer } from './reducers/feedbackReducer';
import { createCardReducer, getAllCardReducer, getCardDetailsReducer } from './reducers/rankCardReducer';
import { createStudentReducer, getAllStudentReducer, getStudentDetailsReducer } from './reducers/studentFeedbackReducer';
import { createContactUsReducer } from './reducers/contactUsReducer';
import { createCareerReducer } from './reducers/careerRuducer';
import { createAffiliationReducer, getAffiliationDetailsReducer, getAllAffiliationReducer } from './reducers/affiliationReducer';
import { allCalenderReducer, calenderDetailReducer, createCalenderReducer } from './reducers/calenderReducer';


const store = configureStore({
    reducer:{
        loginUser:loginUserReducer,
        forgotPassword:forgotPasswordReducer,
        userDetails:getLoginDetailsReducer,
        updatePassword:updateUserPasswordReducer,
        allSubjects:getDashboardReducer,
        subjectDetails:getDashboardDetailsReducer,
        createSubject:createDasboardReducer,
        allTeachers:getTeacherReducer,
        teacherDetails:getTeacherDetailsReducer,
        createTeacher:createTeacherReducer,
        allTeams:getAllTeamReducer,
        teamDetails:getTeamDetailsReducer,
        createTeam:createTeamReducer,
        allPartners:getAllPartnerReducer,
        partnerDetails:getPartnerDetailsReducer,
        createPartner:createPartnerReducer,
        allFeedbacks:getFeedbackReducer,
        feedbackDetails:getFeedbackDetailsReducer,
        createFeedback:createFeedbackReducer,
        allCards:getAllCardReducer,
        cardDetails:getCardDetailsReducer,
        createCard:createCardReducer,
        allStudent:getAllStudentReducer,
        studentDetails:getStudentDetailsReducer,
        createStudent:createStudentReducer,
        createContactUs:createContactUsReducer,
        careerCareer:createCareerReducer,
        allAffiliation:getAllAffiliationReducer,
        affilationDetails:getAffiliationDetailsReducer,
        createAffilation:createAffiliationReducer,
        allSub:getAllprojectsReducer,
        allCalenders:allCalenderReducer,
        calenderDetails:calenderDetailReducer,
        createCalender:createCalenderReducer

    }
});

export default store;