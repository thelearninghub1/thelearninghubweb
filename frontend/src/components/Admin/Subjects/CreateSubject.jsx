
import React, { Fragment, useEffect, useState } from 'react'
import { useSelector , useDispatch  } from 'react-redux';
import { createSubjectAction , clearErrors } from '../../../actions/subjectActions';
import { CREATE_SUBJECT_RESET } from '../../../constants/subjectConstants';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import { toast } from 'react-toastify';
import './CreateSubject.css';
import Loader from '../../layout/Loader/Loader';

const CreateSubject = () => {
    const categories = [
  "Foundation Stage 1",
  "Foundation Stage 2",
  "Foundation Stage 3",
  "Grade 1",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8",
  "Grade 9",
  "Grade 10",
  "Grade 11",
  "Grade 12"
];
  const {loading,error,success} = useSelector((state)=>state.createSubject)

  const dispatch = useDispatch();
  const history = useNavigate();
  const [description, setDescription] = useState('');
  const [name,setName] = useState('');
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);
  const [teacher,setTeacher] = useState('');
  const [grade,setGrade] = useState('');
  const [teacherQualification,setTeacherQualification] = useState('');

  const createHighlightImagesChange = (e) => {

  
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };


  const createHightlightSubmitHandler  = (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set('description',description);
    myForm.set('name',name);
    myForm.set("teacher",teacher);
    myForm.set("teacherQualification",teacherQualification);
    myForm.set("grade",grade)
    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createSubjectAction(myForm));
  }

  useEffect(() => {
  
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success('Subject Created Successfully');
      history(`/dashboard`)
      dispatch({type: CREATE_SUBJECT_RESET});
    }

  },[dispatch,error,success,history]);
  return (
        <Fragment>
          {
            loading ? (<Loader/>) : (
              <Fragment>
              <div className='dashboardMainWrapper'>
                 
           
                <div className=" createdashboard">
             
                    <div>
                        <Sidebar />
                    </div>
                    <div>
          
                    <div className="createDashboardContainer">
                       <div className="createDashboardContainerForm">
                    <h1>Create Subject Outlook</h1>
                    <form className='highlightForm' onSubmit={createHightlightSubmitHandler} >

                    <div className='dashboardInputs'>
                      <label className='dashInput'>

<input type="text"  className="input" 
value={name} 
onChange={(e)=>setName(e.target.value)}
  />  
                      <i>Subject Name</i>

                      
                      </label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={teacher} 
                        onChange={(e)=>setTeacher(e.target.value)}
                          />
                      <i>Teacher Name</i>

                      </label>
                   

                      </div>
                      <div className='dashboardInputs'>
                   <label className='dashInput'>
  <select
    className="input"
    value={grade}
    onChange={(e) => setGrade(e.target.value)}
  >
    <option value="">Select Grade</option>
    {categories && categories.map((category, index) => (
      <option key={index} value={category}>
        {category}
      </option>
    ))}
  </select>
  <i>Subject Grade</i>
</label>
                      <label  className='dashInput' >

                        <input type="text"  className="input" 
                        value={teacherQualification} 
                        onChange={(e)=>setTeacherQualification(e.target.value)}
                          />
                      <i>Teacher Qualification</i>

                      </label>
                   

                      </div>
                      <div className='highlightsInput'>
                      <label className='highInput'>
          
          
                      <textarea
                      type="text"  
                      className="input" 
                      name='description'
                      value={description}
                      onChange={(e)=>setDescription(e.target.value)}
            />  
                      <i>Description</i>
          
                      
                      </label>
                   
                      </div>
          
          
          
          
          
          
          
          
                     
                         <div className='highlightsInput'>
                         <div className="inputBox" id='avatarPreview'> 
          
                         
            <input
              type="file"
              name="images"
              accept="image/*"
              onChange={createHighlightImagesChange}
              multiple
            />

<div id="createProductFormImage"> 
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product Preview" />
            ))}
          </div>
        
          
          </div> 
          
                          </div>
                     
                      
                    
                   
                    
                     
                   
                     
                      <button type="submit" className="buttonBtn">Confirm  
                      </button>
                    </form>
                  </div>
                </div>
                    </div> 
          
          
          
                     
                    </div>
                </div>
            
            
            
            </Fragment>
            )
          }
        </Fragment>
  )
}

export default CreateSubject