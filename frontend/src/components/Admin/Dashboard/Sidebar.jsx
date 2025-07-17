import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HandshakeIcon from '@mui/icons-material/Handshake';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';
import PagesIcon from '@mui/icons-material/Pages';
import GradeIcon from '@mui/icons-material/Grade';
import AddIcon from '@mui/icons-material/Add';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './Sidebar.css';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import SupportIcon from '@mui/icons-material/Support';
import AssessmentIcon from '@mui/icons-material/Assessment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AlignHorizontalCenterIcon from '@mui/icons-material/AlignHorizontalCenter';
const SidebarItem = ({ title, icon, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="sidebarItem">
      <div className="sidebarTitle" onClick={() => setOpen(!open)}>
        {icon}
        <span className="sidebarText">{title}</span>
      </div>
      {open && <div className="sidebarContent">{children}</div>}
    </div>
  );
};

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);
  const navigate = useNavigate();

  return (
    <div className={showMenu ? 'open sidebarMainContainer' : 'close sidebarMainContainer'}>
      <div className="sidebarr">

      <SidebarItem title="Subjects" icon={<CastForEducationIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/subjects')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Subjects</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/subject/create')}>
            <AddIcon />
            <span className="sidebarText">Create Subject</span>
          </div>
        </SidebarItem>

       

        <SidebarItem title="Teachers" icon={<PersonAddIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/teachers')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Teachers</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/teacher/create')}>
            <AddIcon />
            <span className="sidebarText">Create Teacher</span>
          </div>
        </SidebarItem>

  <SidebarItem title="Instructional" icon={<AssessmentIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/instructionals')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Instructionals</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/instructional/create')}>
            <AddIcon />
            <span className="sidebarText">Create Instructional </span>
          </div>
        </SidebarItem>
      

     

        <SidebarItem title="Teams" icon={<PeopleAltIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/teams')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Members</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/team/create')}>
            <AddIcon />
            <span className="sidebarText">Create Member</span>
          </div>
        </SidebarItem>

         <SidebarItem title="Features" icon={<AlignHorizontalCenterIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/features')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Features</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/feature/create')}>
            <AddIcon />
            <span className="sidebarText">Create Feature</span>
          </div>
        </SidebarItem>


          <SidebarItem title="Academic Support" icon={<SupportIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/supports')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Supports</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/support/create')}>
            <AddIcon />
            <span className="sidebarText">Create Support</span>
          </div>
        </SidebarItem>



         <SidebarItem title="Affiliation" icon={<AcUnitIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/affiliations')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Affiliation</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/affiliation/create')}>
            <AddIcon />
            <span className="sidebarText">Create Affiliation</span>
          </div>
        </SidebarItem>


        <SidebarItem title="Students Reviews" icon={<PagesIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/students')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Students</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/student/create')}>
            <AddIcon />
            <span className="sidebarText">Create Feedbacks</span>
          </div>
        </SidebarItem>

         <SidebarItem title="Extra Activities" icon={<AddToQueueIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/activities')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Activities</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/activities/create')}>
            <AddIcon />
            <span className="sidebarText">Create Activity</span>
          </div>
        </SidebarItem>

        <SidebarItem title="Tech Partners" icon={<HandshakeIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/partners')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Partners</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/partner/create')}>
            <AddIcon />
            <span className="sidebarText">Create Partner</span>
          </div>
        </SidebarItem>

          <SidebarItem title="Academic Calendar" icon={<CalendarMonthIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/calenders')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Calendars</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/calendar/create')}>
            <AddIcon />
            <span className="sidebarText">Create Calendar</span>
          </div>
        </SidebarItem>

        <SidebarItem title="Feedbacks" icon={<GradeIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/feedbacks')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Feedbacks</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/feedback/create')}>
            <AddIcon />
            <span className="sidebarText">Create Feedback</span>
          </div>
        </SidebarItem>

        <SidebarItem title="Cards" icon={<CardMembershipIcon />}>
          <div className="sidebarLink" onClick={() => navigate('/admin/cards')}>
            <SpaceDashboardIcon />
            <span className="sidebarText">All Cards</span>
          </div>
          <div className="sidebarLink" onClick={() => navigate('/admin/card/create')}>
            <AddIcon />
            <span className="sidebarText">Create Card</span>
          </div>
        </SidebarItem>

        <div className="sidebarLink" onClick={() => navigate('/')}>
          <ExitToAppIcon />
          <span className="sidebarText">Logout</span>
        </div>
      </div>

      <div onClick={toggleMenu} className="toggleContainerBtn">
        <ArrowBackIosNewIcon />
      </div>
    </div>
  );
};

export default Sidebar;
