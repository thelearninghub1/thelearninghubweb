import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';
import Metadata from '../Metadata/Metadata';

const PageNotFound = () => {
  return (
    <Fragment>
      <Metadata title="Page Not Found - The Learning Hub" />
      <div className="notfound-container">
        <div className="main">
          {[...Array(5)].map((_, x) => (
            <div className="bubble" key={x}></div>
          ))}
          <h1>404</h1>
          <p>It looks like you're lost...</p>
          <br />
          <span>That's a trouble?</span>
          <Link to="/">
            <button type="button">Go back</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default PageNotFound;
