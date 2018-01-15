import React from 'react';
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      <li><NavLink exact to="/single-page-react-app">Home</NavLink></li>
      <li><NavLink to="/single-page-react-app/about">About</NavLink></li>
      <li><NavLink to="/single-page-react-app/teachers">Teachers</NavLink></li>
      <li><NavLink to="/single-page-react-app/courses">Courses</NavLink></li>
    </ul>    
  </header>
);

export default Header;