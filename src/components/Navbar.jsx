import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div
      className='navbar'
      id='is-sticky'
    >
      <span>
        <NavLink
          to='/about'
          id='MEG'
        >
          Megan Miller
        </NavLink>
      </span>
      <span className='links'>
        <NavLink
          className='link'
          to='/'
          id='HOME'
        >
          HOME
        </NavLink>
        <NavLink
          className='link'
          to='/about'
          id='ABOUT'
        >
          ABOUT
        </NavLink>
        <NavLink
          className='link'
          to='/portfolio'
          id='PORTFOLIO'
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
