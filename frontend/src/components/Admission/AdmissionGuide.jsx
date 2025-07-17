import React, { Fragment, useEffect } from 'react';
import './AdmissionGuide.css';
import {Link} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import video from '../../assets/afilation.mp4';
import Metadata from '../layout/Metadata/Metadata';


const AdmissionGuide = () => {


    const steps = [
        { step: "Step 1", title: "INQUIRY", desc: "Parent submit the admission application form, communicate briefly about the child's educational needs." },
        { step: "Step 2", title: "DEMO", desc: "3 days trail demonstration is given to every child, to give an idea of the school environment." },
        { step: "Step 3", title: "PLACEMENT TEST", desc: "Child takes admission assessment, after the test we will entroll every students in the class as per his/her calibre." },
        { step: "Step 4", title: "ADMISSION", desc: "Submission of remaining admission documents and then applicant & parents attend discussion meeting with the school head." },
      ];
   const ageGroups = [
  { age: "3+", grade: "FS1" },
  { age: "4+", grade: "FS2" },
  { age: "5+", grade: "FS3" },
  { age: "6+", grade: "1" },
  { age: "7+", grade: "2" },
  { age: "8+", grade: "3" },
  { age: "9+", grade: "4" },
  { age: "10+", grade: "5" },
  { age: "11+", grade: "6" },
  { age: "12+", grade: "7" },
  { age: "13+", grade: "8" },
  { age: "14+", grade: "9" },
  { age: "15+", grade: "10" },
  { age: "16+", grade: "11" },
  { age: "17+", grade: "12" },
];


       useEffect(()=>{
          AOS.init()
        },[])
    return (
     
                <Fragment>
                          <Metadata title="Admission Guide - The Learning Hub" />
                  
                    <div className="servicesContainer">
                        <div className='topServicesContainer'>
                            
                        </div>
                        <div className='bottomServicesContainer' >
                        <div className="registration-age-container">
      {/* Registration Steps */}
      <div className="registration-steps">
        <h2>THE ADMISSION PROCEDURE</h2>
        <div className="steps-container">
          {steps.map((item, index) => (
            <div key={index} className="step-box" data-aos = "fade-down">
              <span className="step-number">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Age Criteria */}
      <div className="age-criteria">
        <h2>Age Criteria</h2>
        <table>
          <thead>
            <tr>
              <th>Age (Years)</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody >
            {ageGroups.map((item, index) => (
              <tr key={index}>
                <td>{item.age}</td>
                <td>{item.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='admissionBtnContainer'>
        <Link to={`/apply-now`} className='AdmissionBtn'>Apply Now</Link>

        </div>
      </div>




    </div>
                        </div>
                    </div>
                </Fragment>
            )}

export default AdmissionGuide;

