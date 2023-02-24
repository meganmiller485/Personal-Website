import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const navLinks = [
  { navLinkId: 'HOME', scrollToId: 'hero-container' },
  { navLinkId: 'ABOUT', scrollToId: 'about-pic-container' },
  { navLinkId: 'PORTFOLIO', scrollToId: 'big-portfolio-container' },
  { navLinkId: 'CONTACT', scrollToId: 'big-contact-container' },
];

const NavLinkStuff = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: 'smooth', // gives an ease-in-out effect to our scroll
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const NavBar = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  const [openPlease, setOpenPlease] = useState(false);
  const handlePlease = () => {
    setOpenPlease(!openPlease);
  };

  return (
    <div id='is-sticky'>
      <button
        className='my-button'
        id='my-button'
        onClick={handlePlease}
      >
        <FontAwesomeIcon
          className='fas fa-bars'
          icon={faBars}
          color='black'
        />
      </button>
      {openPlease ? (
        <div
          className='nav-elements-mobile'
          id='nav-mobile'
        >
          {navLinks.map(({ navLinkId, scrollToId }) => (
            <NavLinkStuff
              key={navLinkId}
              navLinkId={navLinkId}
              scrollToId={scrollToId}
              activeNavLinkId={activeNavLinkId}
              setActiveNavLinkId={setActiveNavLinkId}
            />
          ))}
        </div>
      ) : null}
      <div className='navbar'>
        <span id='MEG'>
          <a
            id='MEG'
            href='#hero-container'
          >
            Megan Miller
          </a>
        </span>
        <nav>
          <div className='nav-elements'>
            {navLinks.map(({ navLinkId, scrollToId }) => (
              <NavLinkStuff
                key={navLinkId}
                navLinkId={navLinkId}
                scrollToId={scrollToId}
                activeNavLinkId={activeNavLinkId}
                setActiveNavLinkId={setActiveNavLinkId}
              />
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
