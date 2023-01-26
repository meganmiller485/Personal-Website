import React from 'react';

const About = () => {
  return (
    <div>
      <div id='about-pic-container'></div>
      <header id='header-about'>
        About <span id='me'>Me</span>
      </header>

      <div className='about-container'>
        <p className='about-paragraph'>
          I am based in Denver, Colorado where I love to spend time outside. I
          am a passionate software engineer who specializes in JavaScript web
          development. I enjoy learning and easily adapt to the constantly
          evolving tech world. I am regularly improving my skills and expanding
          my knowledge. My goal is to balance my love of practical technology
          with my commitment to the outdoors.
        </p>
        <p className='skills'>
          <header className='skillheader'>Technical Skills:</header>
          <div>
            {' '}
            JavaScript | React | HTML | CSS Node.js | Express | PostgreSQL |
            Databases | GitHub | ArcGIS Pro
          </div>
        </p>
      </div>
      <div id='about-buttons'>
        <button id='chatbutton'>Let's Talk!</button>
        <button id='resume'>Download my Resume</button>
      </div>
    </div>
  );
};

export default About;
