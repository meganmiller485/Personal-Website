import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div
      className='navbar'
      id='is-sticky'
    >
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/portfolio'>Portfolio</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  );
};

export default NavBar;
