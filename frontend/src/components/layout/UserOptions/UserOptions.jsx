import React, { Fragment, useState } from 'react';
import './UserOptions.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {SpeedDial,SpeedDialAction} from '@mui/lab';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../../../actions/userActions';
import {useDispatch} from 'react-redux';
import Backdrop from '@mui/material/Backdrop';
import { toast } from 'react-toastify';


const UserOptions = ({user}) => {

    const actions = [
        {icon:<DashboardIcon/>,name:"Dashboard",func:dashboardFunction},
        {icon:<HomeIcon/>,name:"Home",func:homeFunction},
        {icon:<AccountBoxIcon/>,name:"Profile",func:profileFunction},
        {icon:<ExitToAppIcon/>,name:"Logout",func:logoutFunction},
    ]
    const [open,setOpen] = useState(false);
    const dispatch = useDispatch();

    const history = useNavigate();

    function dashboardFunction() {
        history(`/dashboard`)
    };

    function homeFunction() {
        history(`/`)
    };

    function profileFunction() {
        history(`/account`)
    };

    function logoutFunction() {
        dispatch(logoutUser());
        history(`/super-admin-panel-login`);
        toast.success(`Logged Out`)


    }

  return (
<Fragment>
<Backdrop open={open} style={{zIndex : "10"}}/>
  <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'absolute', bottom: 16, right: 16 }}
        icon={
            <img src={user.avatar.url ? user.avatar.url:"/Profile.png"} alt='Profile' className='speedDailImage'/>
        }
        open={open}
        onOpen={()=>setOpen(true)}
        onClose={()=>setOpen(false)}
        direction="down"
        className='speedDailBhai'

      >
        {actions && actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.func} 
          />
        ))}
      </SpeedDial>
    </Fragment>
  )
}

export default UserOptions