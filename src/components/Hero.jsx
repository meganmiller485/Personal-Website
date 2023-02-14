import React from 'react';
import hero from '../assets/images/heropic.jpg';
import linkedin from '../assets/images/linkedinlogo.png';
import githublogo from '../assets/images/githublogo.webp';

import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <>
      <div
        className='hero-container'
        id='hero-container'
      >
        <div className='hero-intro'>
          <div className='greeting'>Welcome! My name is</div>
          <div className='star'> Megan Miller</div>
          <div className='typewriter'>
            I am a
            <span id='type'>
              <Typewriter
                loop
                cursor
                cursorStyle='|'
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[' Developer.', ' Web Designer.', ' Software Engineer.']}
              />
            </span>
            <div />
          </div>
        </div>
        <div>
          <img
            id='idpic'
            src={hero}
            alt='me'
          />
        </div>
      </div>
      <hr className='heroHR'></hr>
      <footer className='main-foot'>
        <a
          href='https://www.linkedin.com/in/meganmiller485/'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='social'
            id='linkedin'
            src={linkedin}
            alt='linked in'
          ></img>
        </a>
        <a
          href='https://github.com/meganmiller485'
          target='_blank'
          rel='noreferrer'
        >
          <img
            className='social'
            id='github'
            src={githublogo}
            alt='github logo'
          ></img>
        </a>
      </footer>
    </>
  );
};

export default Hero;
