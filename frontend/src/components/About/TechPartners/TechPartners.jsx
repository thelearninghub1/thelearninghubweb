import React, { Fragment, useEffect } from 'react'
import PartnerCard from './PartnerCard';
import './TechPartners.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { allPartnerAction , clearErrors} from '../../../actions/techActions';
import Loader from '../../layout/Loader/Loader';
import Metadata from '../../layout/Metadata/Metadata';


const TechPartners = () => {

  const dispatch = useDispatch();
  const { error, partners , loading } = useSelector((state) => state.allPartners);
 


      useEffect(()=>{
   AOS.init({
    once: true,
    offset: 120,
  });

  AOS.refresh();
                       if (error) {
                         toast.error(error);
                         dispatch(clearErrors());
                        
                       }
                       dispatch(allPartnerAction());
                     },[error, dispatch]) 
      
 
  return (
              <Fragment>
                {
                  loading ? (<Loader/>) : (
                    <Fragment>
        <Metadata title="Tech Partners - The Learning Hub" />

                    <div className="ourProjectsContainer">
                        <div className='topTechContainer'>
                         {
                          /*  
                             <h1 data-aos="fade-down">Technology Partners</h1>
                            <p data-aos="fade-down">Partner with us to bring tech-enabled learning to students everywhere.
                            </p>
                           */
                         }
                        </div>
                   
                        <div className='bottomProjectContainer' >
                        <section className="partners-section">
          {partners  && partners.map((partner) => (
            <PartnerCard key={partner._id} partner={partner} />
          ))}
        </section>
                                 </div>
            
                       
                    </div>
                   
                </Fragment>
                  )
                }
              </Fragment>
            )
        }

export default TechPartners