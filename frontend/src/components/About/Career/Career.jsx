import React, { Fragment, useEffect, useRef, useState } from "react";
import './Career.css';
import AOS from 'aos';
import { useDispatch, useSelector } from "react-redux";
import { toast } from 'react-toastify';
import { createCareerAction, clearErrors } from "../../../actions/careerAction";
import 'aos/dist/aos.css';
import { CAREER_SUBMIT_RESET } from "../../../constants/careerConstants";
import Loader from "../../layout/Loader/Loader";
import Metadata from "../../layout/Metadata/Metadata";

const Career = () => {
  const dispatch = useDispatch();
  const { loading, error, success, message } = useSelector((state) => state.careerCareer);

  const [form, setForm] = useState({
    name: '',
    email: '',
    country: '',
    applyFor: '',
    message: ''
  });

  const [cv, setCv] = useState(null);
  const [certificates, setCertificates] = useState([]);

  // Refs for file inputs
  const cvInputRef = useRef();
  const certificatesInputRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === 'cv') {
      setCv(files[0]);
    } else if (name === 'certificates') {
      setCertificates(Array.from(files));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (cv) formData.append('cv', cv);
    certificates.forEach(file => formData.append('certificates', file));

    dispatch(createCareerAction(formData));
  };

  useEffect(() => {
    AOS.init();

    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      toast.success(message);
      dispatch({ type: CAREER_SUBMIT_RESET });

      // ✅ Reset form state
      setForm({
        name: '',
        email: '',
        country: '',
        applyFor: '',
        message: ''
      });
      setCv(null);
      setCertificates([]);

      // ✅ Reset file inputs
      if (cvInputRef.current) cvInputRef.current.value = '';
      if (certificatesInputRef.current) certificatesInputRef.current.value = '';
    }
  }, [error, success, message, dispatch]);

  return (
    <Fragment>
      {loading ? (
      <Loader />
      ) : (
        <Fragment>
        <Metadata title="Career At TLH - The Learning Hub" />

          <div className="ourProjectsContainer">
            <div className='topCareerContainer'></div>

            <div className='middlecontactPartnerContainer'>
              <h1 data-aos="fade-down">Join Our Team</h1>
              <form className='contactUsPartnerForm' data-aos="fade-down" onSubmit={handleSubmit}>
                <div>
                  <input type="text" placeholder='Full Name' required name="name" value={form.name} onChange={handleChange} />
                </div>
                <div>
                  <input type="email" required name="email" placeholder="Email" value={form.email} onChange={handleChange} />
                </div>
                <div>
                  <input type="text" placeholder='Position Applying For' required name="applyFor" value={form.applyFor} onChange={handleChange} />
                </div>
                <div>
                  <input type="text" required name="country" placeholder="Country" value={form.country} onChange={handleChange} />
                </div>
                <div>
                  <textarea placeholder='Additional Information ...' required rows={10} name="message" value={form.message} onChange={handleChange} />
                </div>
                <div className="cvContainer">
                  <label>Upload Your CV Here</label>
                  <input
                    type="file"
                    name="cv"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    ref={cvInputRef}
                    required
                  />
                </div>
                <div className="cvContainer">
                  <label>Other Testimonials (e.g Certificates)</label>
                  <input
                    type="file"
                    name="certificates"
                    accept=".pdf,.jpg,.png"
                    multiple
                    onChange={handleFileChange}
                    ref={certificatesInputRef}
                  />
                </div>
                <input type="submit" value="Send" className='contactPartnerBtn' />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Career;
