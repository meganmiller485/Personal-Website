import React from 'react';
import aspens from '../assets/images/aspens.png';

const About = () => {
  return (
    <div id='big-about-container'>
      <hr className='aboutHR'></hr>
      <header className='header-about'>
        About <span id='me'>Me</span>
      </header>
      <div id='aspen-pic-container'>
        <img
          id='aspen-pic'
          src={aspens}
          alt='aspen img'
        />
      </div>
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
          <div>Front-End: JavaScript | React | HTML | CSS</div>
          <div>Back-End: Node.js | Express | PostgreSQL | Databases |</div>
          <div>Other: GitHub | ArcGIS Pro</div>
        </p>
      </div>
      <div>
        <button id='chatbutton'>Let's Talk!</button>
        <button id='resume'>Download my Resume</button>
      </div>
    </div>
  );
};

export default About;
