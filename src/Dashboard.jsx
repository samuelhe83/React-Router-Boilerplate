import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="dashboard">
          <Link to="/">
            <img src="Logo-option1.png" alt="Cyanotrol" className="logo" />
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
  }
}

export default Dashboard;
