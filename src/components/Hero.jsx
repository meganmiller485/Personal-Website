import React from 'react';
import hero from '../assets/images/heropic.jpg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
          <div class='middle'>
            <a
              href='/about'
              class='btn btn1'
            >
              Checkout My Site
              <span>
                <FontAwesomeIcon
                  id='chev'
                  icon={faChevronRight}
                  color='black'
                />
              </span>
            </a>{' '}
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
          <FontAwesomeIcon
            className='social'
            id='linkedin'
            icon={faLinkedin}
            color='black'
          />
        </a>
        <a
          href='https://github.com/meganmiller485'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            className='social'
            id='github'
            icon={faGithub}
            color='black'
          />
        </a>
        <a
          href='https://mail.google.com/mail/u/0/#inbox?compose=new'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            className='social'
            id='email'
            icon={faEnvelope}
            color='black'
          />
        </a>

        <a
          href='https://www.instagram.com/lilmillerrr/?hl=en'
          target='_blank'
          rel='noreferrer'
        >
          <FontAwesomeIcon
            className='social'
            id='instagram'
            icon={faInstagram}
            color='black'
          />
        </a>
      </footer>
    </>
  );
};

export default Hero;
