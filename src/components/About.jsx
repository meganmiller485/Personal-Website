import React from 'react';
import aboutCollage from '../assets/images/aboutPics.jpeg';

const About = () => {
  return (
    <div>
      <div id='about-pic-container'></div>
      <header id='header-about'>
        <span id='aboutMe'>
          About <span id='me'>Me</span>
          <div className='lilabout'>
            I'm a software developer based in Denver, Colorado.
          </div>
          <div className='lillilabout'>
            Since 2022, I have dedicated my time to solving problems with a fun
            tude. I specialize in <span id='java-word'>JavaScript</span> web
            developement, but am constantly exploring new technologies, and
            implementing the skills I have acquired into different projects.
            When i'm not behing the screen, you can find me tromping around in
            the mountains.{' '}
          </div>
        </span>
        <span>
          <img
            id='aboutPic'
            src={aboutCollage}
            alt='mayflower'
          />
        </span>
      </header>
      <hr className='aboutHR'></hr>

      <div className='about-container'>
        <div className='allskills'>
          <span className='skillheader'>
            <span>
              Technical<span id='skills-word'> Skills</span>
            </span>
          </span>
          <div className='aboutcontent'>
            <div className='skillbars'>
              <p className='tech'>JavaScript</p>
              <div class='bar'>
                <div class='skills js'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>HTML</p>
              <div class='bar'>
                <div class='skills html'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>CSS</p>
              <div class='bar'>
                <div class='skills css'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>React</p>
              <div class='bar'>
                <div class='skills react'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>Node.js</p>
              <div class='bar'>
                <div class='skills node'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>Express.js</p>
              <div class='bar'>
                <div class='skills express'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>PostgreSQL</p>
              <div class='bar'>
                <div class='skills postgresql'></div>
                <span className='percent'>65%</span>
              </div>
            </div>

            <p className='about-paragraph'>
              I am a passionate software engineer who specializes in JavaScript
              web development. I graduated from Fullstack Academy's Software
              Engineering Bootcamp in February 2023 and have a Bachelor's Degree
              in Geology from Colorado State University. Currently, I am based
              in Denver, Colorado, where I am constantly developing. It was in
              the Geosciences Department where I first kindled my love for
              technology. Geographic Information Systems and Remote Sensing
              courses took over my schedule and I knew it was something I would
              want to pursue after graduation. I enjoy learning and easily adapt
              to the constantly evolving tech world. I am regularly improving my
              skills and expanding my knowledge. My goal is to balance my love
              of practical technology with my commitment to the outdoors.
              {/* I am based in Denver, Colorado where I love to spend time outside. 
          I am a passionate software engineer who specializes in JavaScript web
          development. I enjoy learning and easily adapt to the constantly
          evolving tech world. I am regularly improving my skills and expanding
          my knowledge. My goal is to balance my love of practical technology
          with my commitment to the outdoors. */}
            </p>
          </div>
        </div>
      </div>
      <div id='about-buttons'>
        <button id='chatbutton'>Let's Talk!</button>
        <button id='resume'>Download my Resume</button>
      </div>
      <div id='about-pic-container'></div>
    </div>
  );
};

export default About;
