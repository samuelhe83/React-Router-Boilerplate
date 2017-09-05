import React, { Component } from 'react';
// import Dropdown from './Dropdown';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <header className="dashboard">
          <DropdownButton title={'Test'} id={'1'} className="dropdown">
            <LinkContainer to="/test">
              <MenuItem>Test</MenuItem>
            </LinkContainer>
          </DropdownButton>
          <DropdownButton title={'Test'} id={'1'} className="dropdown">
            <LinkContainer to="/test">
              <MenuItem>Test</MenuItem>
            </LinkContainer>
          </DropdownButton>
          <DropdownButton title={'Test'} id={'1'} className="dropdown">
            <LinkContainer to="/test">
              <MenuItem>Test</MenuItem>
            </LinkContainer>
          </DropdownButton>
        </header>
      </div>
    );
  }
}

export default Dashboard;
