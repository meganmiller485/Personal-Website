import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div id='footer-container'>
      <footer id='footer'>
        MEGAN MILLER
        <FontAwesomeIcon
          className='copyright-icon'
          icon={faCopyright}
          color='rgb(92, 92, 92)'
        />{' '}
        2023
      </footer>
    </div>
  );
};

export default Footer;
