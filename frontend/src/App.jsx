import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Header from './components/layout/Header/Header';
import ContactOptions from './components/layout/Header/ContactOptions';
import WebFont from 'webfontloader';
import Footer from './components/layout/Footer/Footer';
import ContactUs from './components/Contact/ContactUs';
import ContactPartnerWithUs from './components/Contact/ContactPartnerWithUs';
import AboutUs from './components/About/AboutUs';
import Subject from './components/Subject/Subject';
import SubjectDetails from './components/Subject/SubjectDetails';
import AdmissionGuide from './components/Admission/AdmissionGuide';
import Apply from './components/Admission/Apply';
import Ksa from './components/Locations/Ksa/Ksa';
import Uae from './components/Locations/Uae/Uae';
import Oman from './components/Locations/Oman/Oman';
import Malaysia from './components/Locations/Malaysia/Malaysia';
import Turkey from './components/Locations/Turkey/Turkey';
import Qatar from './components/Locations/Qatar/Qatar';
import Bahrain from './components/Locations/Bahrain/Bahrain';
import History from './components/About/History/History';
import Team from './components/About/Team/Team';
import Teachers from './components/About/Teachers/Teachers';
import TechPartners from './components/About/TechPartners/TechPartners';
import Career from './components/About/Career/Career';
import Affiliation from './components/About/Affiliation/Affiliation';
import SkillDevelopment from './components/Academics/Skills/SkillDevelopment';
import Instrumental from './components/Academics/Instrumental/Instrumental';
import Support from './components/Academics/Support/Support';
import Activities from './components/Academics/Activities/Activities';
import Calendar from './components/Academics/Calendar/Calendar';
import Login from './components/Admin/Login/Login';
import ForgotPassword from './components/Admin/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Admin/ResetPassword/ResetPassword';
import Dashboard from './components/Admin/Dashboard/Dashboard';
import Home from './components/Home/Home';
import Signup from './components/Admin/Signup/Signup';
import React from 'react';
import LoginUserDetails from './components/Admin/Profile/LoginUserDetails';
import { loadUserAction } from './actions/userActions';
import { useDispatch , useSelector } from 'react-redux';
import UpdatePassword from './components/Admin/UpdatePassword/UpdatePassword';
import UpdateProfile from './components/Admin/UpdateProfile/UpdateProfile';
import UserOptions from './components/layout/UserOptions/UserOptions';
import CreateSubject from './components/Admin/Subjects/CreateSubject';
import AllSubjects from './components/Admin/Subjects/AllSubjects';
import UpdateSubject from './components/Admin/Subjects/UpdateSubject';
import CreateTeacher from './components/Admin/Teachers/CreateTeacher';
import AllTeachers from './components/Admin/Teachers/AllTeachers';
import UpdateTeacher from './components/Admin/Teachers/UpdateTeacher';
import CreateTeam from './components/Admin/Teams/CreateTeam';
import AllTeam from './components/Admin/Teams/AllTeam';
import UpdateTeam from './components/Admin/Teams/UpdateTeam';
import CreatePartner from './components/Admin/TechPartners/CreatePartner';
import AllPartners from './components/Admin/TechPartners/AllPartners';
import UpdatePartner from './components/Admin/TechPartners/UpdatePartner';
import CreateFeedback from './components/Admin/Feedback/CreateFeedback';
import AllFeedbacks from './components/Admin/Feedback/AllFeedbacks';
import UpdateFeedback from './components/Admin/Feedback/UpdateFeedback';
import CreateCard from './components/Admin/Cards/CreateCard';
import AllCards from './components/Admin/Cards/AllCards';
import UpdateCard from './components/Admin/Cards/UpdateCard';
import CreateStudent from './components/Admin/StudentFeedbacks/CreateStudent';
import AllStudents from './components/Admin/StudentFeedbacks/AllStudents';
import UpdateStudent from './components/Admin/StudentFeedbacks/UpdateStudent';
import CreateAffiliation from './components/Admin/Affiliation/CreateAffiliation';
import AllAffiliation from './components/Admin/Affiliation/AllAffiliation';
import UpdateAffiliation from './components/Admin/Affiliation/UpdateAffiliation';
import CreateExtra from './components/Admin/ExtraActivities/CreateExtra';
import AllExtra from './components/Admin/ExtraActivities/AllExtra';
import UpdateExtra from './components/Admin/ExtraActivities/UpdateExtra';
import CreateInstructional from './components/Admin/Instructionals/CreateInstructional';
import AllInstructional from './components/Admin/Instructionals/AllInstructional';
import UpdateInstructional from './components/Admin/Instructionals/UpdateInstructional';
import CreateSupport from './components/Admin/AcamedicSupport/CreateSupport';
import AllSupports from './components/Admin/AcamedicSupport/AllSupports';
import UpdateSupport from './components/Admin/AcamedicSupport/UpdateSupport';
import CreateCalender from './components/Admin/AcademicCalender/CreateCalender';
import UpdateCalender from './components/Admin/AcademicCalender/UpdateCalender';
import AllCalenders from './components/Admin/AcademicCalender/AllCalenders';
import CreateFeature from './components/Admin/Features/CreateFeature';
import AllFeature from './components/Admin/Features/AllFeature';
import UpdateFeature from './components/Admin/Features/UpdateFeature';
import PageNotFound from './components/layout/PageNotFound/PageNotFound';

function App() {
 

const dispatch = useDispatch();

const {isAuthenticatedUser , user} = useSelector((state)=>state.loginUser)

  React.useEffect(()=>{

    WebFont.load({
     google:{
       families:["Roboto","Poppins","Inter","Lato"]
     }
    })

    dispatch(loadUserAction());
     },[dispatch]);

  return (
    <>
    <Router>
      <Header />
      {isAuthenticatedUser && <UserOptions user={user} /> }  
      <ContactOptions />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/*' element={<PageNotFound />} />

        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/partner-with-us' element={<ContactPartnerWithUs />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/subjects-summary' element={<Subject />} />
        <Route path='/subject/:id' element={<SubjectDetails />} />
        <Route path='/registeration-guide' element={<AdmissionGuide />} />
        <Route path='/apply-now' element={<Apply />} />
        <Route path='/ksa' element={<Ksa />} />
        <Route path='/uae' element={<Uae />} />
        <Route path='/oman' element={<Oman />} />
        <Route path='/malaysia' element={<Malaysia />} />
        <Route path='/turkey' element={<Turkey />} />
        <Route path='/qatar' element={<Qatar />} />
        <Route path='/bahrain' element={<Bahrain />} />
        <Route path='/our-history' element={<History />} />
        <Route path='/our-team' element={<Team />} />
        <Route path='/our-teachers' element={<Teachers />} />
        <Route path='/technology-partners' element={<TechPartners />} />
        <Route path='/career' element={<Career />} />
        <Route path='/affiliation-accreditation' element={<Affiliation />} />
        <Route path='/skills-development-courses' element={<SkillDevelopment />} />
        <Route path='/instructional-methods' element={<Instrumental />} />
        <Route path='/academic-support' element={<Support />} />
        <Route path='/extra-curricular-activities' element={<Activities />} />
        <Route path='/academic-calendar' element={<Calendar />} />
        <Route path='/super-admin-panel-login' element={<Login />} />
        <Route path='/password/forgot' element={<ForgotPassword />} />
        <Route path='/password/reset/:token' element={<ResetPassword />} />
        <Route path='/dashboard' element={isAuthenticatedUser ? <Dashboard />:<Login/>} />
        <Route path='/super-admin-panel-register' element={<Signup />} />
        <Route path='/account' element={isAuthenticatedUser ? <LoginUserDetails />:<Login/>   } />
        <Route path='/password/update' element={isAuthenticatedUser ? <UpdatePassword />:<Login/>   } />
        <Route path='/me/update' element={isAuthenticatedUser ? <UpdateProfile />:<Login/>   } />
        <Route path='/admin/subject/create' element={isAuthenticatedUser ? <CreateSubject />:<Login/>   } />
        <Route path='/admin/subjects' element={isAuthenticatedUser ? <AllSubjects />:<Login/>   } />
        <Route path='/admin/subjects/edit/:id' element={isAuthenticatedUser ? <UpdateSubject />:<Login/>   } />
        <Route path='/admin/teacher/create' element={isAuthenticatedUser ? <CreateTeacher />:<Login/>   } />
        <Route path='/admin/teachers' element={isAuthenticatedUser ? <AllTeachers />:<Login/>   } />
        <Route path='/admin/teachers/edit/:id' element={isAuthenticatedUser ? <UpdateTeacher />:<Login/>   } />
        <Route path='/admin/team/create' element={isAuthenticatedUser ? <CreateTeam />:<Login/>   } />
        <Route path='/admin/teams' element={isAuthenticatedUser ? <AllTeam />:<Login/>   } />
        <Route path='/admin/teams/edit/:id' element={isAuthenticatedUser ? <UpdateTeam />:<Login/>   } />
        <Route path='/admin/partner/create' element={isAuthenticatedUser ? <CreatePartner />:<Login/>   } />
        <Route path='/admin/partners' element={isAuthenticatedUser ? <AllPartners />:<Login/>   } />
        <Route path='/admin/partners/edit/:id' element={isAuthenticatedUser ? <UpdatePartner />:<Login/>   } />
        <Route path='/admin/feedback/create' element={isAuthenticatedUser ? <CreateFeedback />:<Login/>   } />
        <Route path='/admin/feedbacks' element={isAuthenticatedUser ? <AllFeedbacks />:<Login/>   } />
        <Route path='/admin/feedbacks/edit/:id' element={isAuthenticatedUser ? <UpdateFeedback />:<Login/>   } />
        <Route path='/admin/card/create' element={isAuthenticatedUser ? <CreateCard />:<Login/>   } />
        <Route path='/admin/cards' element={isAuthenticatedUser ? <AllCards />:<Login/>   } />
        <Route path='/admin/cards/edit/:id' element={isAuthenticatedUser ? <UpdateCard />:<Login/>   } />
        <Route path='/admin/student/create' element={isAuthenticatedUser ? <CreateStudent />:<Login/>   } />
        <Route path='/admin/students' element={isAuthenticatedUser ? <AllStudents />:<Login/>   } />
        <Route path='/admin/students/edit/:id' element={isAuthenticatedUser ? <UpdateStudent />:<Login/>   } />
        <Route path='/admin/affiliation/create' element={isAuthenticatedUser ? <CreateAffiliation />:<Login/>   } />
        <Route path='/admin/affiliations' element={isAuthenticatedUser ? <AllAffiliation />:<Login/>   } />
        <Route path='/admin/affiliations/edit/:id' element={isAuthenticatedUser ? <UpdateAffiliation />:<Login/>   } />
        <Route path='/admin/activities/create' element={isAuthenticatedUser ? <CreateExtra />:<Login/>   } />
        <Route path='/admin/activities' element={isAuthenticatedUser ? <AllExtra />:<Login/>   } />
        <Route path='/admin/activities/edit/:id' element={isAuthenticatedUser ? <UpdateExtra />:<Login/>   } />
        <Route path='/admin/instructional/create' element={isAuthenticatedUser ? <CreateInstructional />:<Login/>   } />
        <Route path='/admin/instructionals' element={isAuthenticatedUser ? <AllInstructional />:<Login/>   } />
        <Route path='/admin/instructionals/edit/:id' element={isAuthenticatedUser ? <UpdateInstructional />:<Login/>   } />
        <Route path='/admin/support/create' element={isAuthenticatedUser ? <CreateSupport />:<Login/>   } />
        <Route path='/admin/supports' element={isAuthenticatedUser ? <AllSupports />:<Login/>   } />
        <Route path='/admin/supports/edit/:id' element={isAuthenticatedUser ? <UpdateSupport />:<Login/>   } />
        <Route path='/admin/calendar/create' element={isAuthenticatedUser ? <CreateCalender />:<Login/>   } />
        <Route path='/admin/calenders/edit/:id' element={isAuthenticatedUser ? <UpdateCalender />:<Login/>   } />
        <Route path='/admin/calenders' element={isAuthenticatedUser ? <AllCalenders />:<Login/>   } />
        <Route path='/admin/feature/create' element={isAuthenticatedUser ? <CreateFeature />:<Login/>   } />
        <Route path='/admin/features' element={isAuthenticatedUser ? <AllFeature />:<Login/>   } />
        <Route path='/admin/features/edit/:id' element={isAuthenticatedUser ? <UpdateFeature />:<Login/>   } />


      </Routes>
      <Footer />
      
    </Router>

    </>
  )
}

export default App
