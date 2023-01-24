import React, { useState } from 'react';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'hero-container' },
  { navLinkId: 'About', scrollToId: 'big-about-container' },
  { navLinkId: 'Projects', scrollToId: 'big-projects-container' },
  { navLinkId: 'Contact', scrollToId: 'contact-container' },
];

const NavLink = ({
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
    <div>
      <nav id='nav-bar'>
        {navLinks.map(({ navLinkId, scrollToId }) => (
          <NavLink
            navLinkId={navLinkId}
            scrollToId={scrollToId}
            activeNavLinkId={activeNavLinkId}
            setActiveNavLinkId={setActiveNavLinkId}
          />
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
