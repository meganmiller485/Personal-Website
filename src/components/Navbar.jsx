import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div
      className='navbar'
      id='is-sticky'
    >
      <span>Megan Miller</span>
      <span className='links'>
        <NavLink
          className='link'
          to='/'
        >
          HOME
        </NavLink>
        <NavLink
          className='link'
          to='/about'
        >
          ABOUT
        </NavLink>
        <NavLink
          className='link'
          to='/portfolio'
        >
          PORTFOLIO
        </NavLink>
        <NavLink
          id='contact-link'
          className='link'
          to='/contact'
        >
          CONTACT
        </NavLink>
      </span>
    </div>
  );
};

export default NavBar;
