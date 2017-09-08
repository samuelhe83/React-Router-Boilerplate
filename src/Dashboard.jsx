import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = props => {
  return (
    <div>
      <header className="dashboard">
        <Link to="/">
          <img src="/assets/images/logo.png" alt="Cyanotrol" className="logo" />
        </Link>
        <Link to="/use" className="navButton">
          How To Use
        </Link>
        <Link to="/technical" className="navButton">
          Technical
        </Link>
        <Link to="/about" className="navButton">
          About Us
        </Link>
      </header>
    </div>
  );
};

export default Dashboard;
