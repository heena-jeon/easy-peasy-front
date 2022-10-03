import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="container">
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"/></svg>
        <span className="fs-4">Simple header</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/courses">Courses</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/faq">FAQs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
      </ul>
    </header>
  </div>
  );
};

export default Header;