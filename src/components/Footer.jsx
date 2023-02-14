import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div id='footer-container'>
      <footer id='footer'>
        <FontAwesomeIcon
          className='instagram-social'
          icon={faCopyright}
          size='1x'
          color='rgb(92, 92, 92)'
        />
        Megan Miller
      </footer>
    </div>
  );
};

export default Footer;
