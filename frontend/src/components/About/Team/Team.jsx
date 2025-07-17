import React, { Fragment, useEffect } from 'react'
import './Team.css';
import Pagination from 'react-js-pagination';
import TeamMembersCard from '../../About/TeamMembersCard';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { allTeamAction , clearErrors } from "../../../actions/teamActions";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';
import Metadata from '../../layout/Metadata/Metadata';


const Team = () => {
  const {  error:teamError, teams , loading } = useSelector((state) => state.allTeams);
  const dispatch = useDispatch();

   
      useEffect(()=>{
                       AOS.init()

  if(teamError){
          toast.error(teamError);
          dispatch(clearErrors());
        }
                dispatch(allTeamAction());
        

                     },[dispatch,teamError]) 
 
  
 
  return (
                <Fragment>
                  {
                    loading ? (<Loader/>) : (
                      <Fragment>
        <Metadata title="Our Team - The Learning Hub" />

                <div className="ourProjectsContainer">
                    <div className='topTeamContainer'>
                      
                    </div>
               
                    <div className='bottomProjectContainer' >
                    {teams && teams.map((member) => (
    <TeamMembersCard member={member} key={member._id} />
  ))}                        </div>
        
                </div>
               
            </Fragment>
                    )
                  }
                </Fragment>
            )
        }

export default Team