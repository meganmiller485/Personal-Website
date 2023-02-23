import React, { useState } from 'react';

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
  return (
    <div
      className='navbar'
      id='is-sticky'
    >
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
  );
};

export default NavBar;
