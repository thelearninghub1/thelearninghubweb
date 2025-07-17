import React, { Fragment, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Calendar.css';
import { Link } from 'react-router-dom';
import { allCalenderAction, clearErrors } from '../../../actions/calenderAction';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Loader from '../../layout/Loader/Loader';
import video from '../../../assets/calender.mp4';

const Calendar = () => {
  const dispatch = useDispatch();
  const { loading, error, calenders } = useSelector((state) => state.allCalenders);

  useEffect(() => {
    AOS.init();
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    dispatch(allCalenderAction());
  }, [error, dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="calendar-wrapper">
            <div className="calendar-header">
              <div className="calendar-video-container">
                <video src={video} autoPlay loop muted playsInline />
              </div>
            </div>

            <div className="calendar-body">
              <div className="calendar-table-wrapper">
                <div className="calendar-table-scroll">
                  <table className="calendar-table">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
  {calenders &&
    calenders.map((item) => (
      <tr key={item._id}>
        <td>{item.date}</td>
        <td>{item.details}</td>
      </tr>
    ))}
</tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="secondAboutContainer">
            <div className="aboutBottomContainer">
              <h1>We have the solutions you are seeking.</h1>
              <Link to="/contact-us">Discover more</Link>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Calendar;
