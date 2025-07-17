import React, { Fragment } from 'react';
import './Dashboard.css';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Fragment>
      <div className='dashboardMainWrapper'>
        <div className="dashboardLayout">
          <div>
            <Sidebar />
          </div>
          <div>
            <div className='dashboardContentWrapper'>
              <div className="dashboardSummarySection">
                <div>
                  <p>
                    <h1>Welcome</h1> Admin Panel
                  </p>
                </div>
                <div className="dashboardStatsBox">
                  <Link>
                    <p>Member's</p>
                    <p>12</p>
                  </Link>
                  <Link>
                    <p>Feedbacks</p>
                    <p>15</p>
                  </Link>
                  <Link>
                    <p>Courses</p>
                    <p>34</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
