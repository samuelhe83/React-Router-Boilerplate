import React, { Component } from 'react';
import { Link } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    let menuState = !this.state.menuActive;
    this.setState({ menuActive: menuState });
  }

  createDropdown() {
    // {this.props.linkItems.map(item => {
    //   <li>
    //     <Link to={`${this.props.endpoint}`} />
    //   </li>;
    // })}
    if (this.state.menuActive) {
      return <ul>Dropdown</ul>;
    } else {
      return '';
    }
  }

  render() {
    return (
      <div>
        <li onMouseEnter={this.toggleActive} onMouseLeave={this.toggleActive} className="dropdown">
          Click Me
          <ReactCSSTransitionGroup transitionName="menu" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
            {this.createDropdown()}
          </ReactCSSTransitionGroup>
        </li>
      </div>
    );
  }
}

export default Dropdown;
