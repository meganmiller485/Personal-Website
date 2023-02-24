import React from 'react';
import aboutCollage from '../assets/images/aboutPics.png';
import geology from '../assets/images/geology.png';
import resume from '../assets/images/MeganMiller_Resume.pdf';

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
            Since 2022, I have dedicated my time to solving complex problems
            with enthusiasm and grace. Though I specialize in{' '}
            <span id='java-word'>JavaScript</span> web development, I love
            exploring new technologies and implementing them into my projects.
            When i'm not behing the screen, you can find me tromping around in
            the mountains, snow or shine.{' '}
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
              <div className='bar'>
                <div className='skills js'></div>
                <span className='percent'>70%</span>
              </div>

              <p className='tech'>HTML</p>
              <div className='bar'>
                <div className='skills html'></div>
                <span className='percent'>90%</span>
              </div>

              <p className='tech'>CSS</p>
              <div className='bar'>
                <div className='skills css'></div>
                <span className='percent'>80%</span>
              </div>

              <p className='tech'>React</p>
              <div className='bar'>
                <div className='skills react'></div>
                <span className='percent'>85%</span>
              </div>

              <p className='tech'>NodeJS</p>
              <div className='bar'>
                <div className='skills node'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>ExpressJS</p>
              <div className='bar'>
                <div className='skills express'></div>
                <span className='percent'>65%</span>
              </div>

              <p className='tech'>PostgreSQL</p>
              <div className='bar'>
                <div className='skills postgresql'></div>
                <span className='percent'>65%</span>
              </div>
            </div>

            <div className='skills-paragraph'>
              I make a point to know the latest technologies so that I can
              produce the most <span className='power-word'>efficient</span>,{' '}
              <span className='power-word'>responsive</span>,{' '}
              <span className='power-word'>dynamic</span> and{' '}
              <span className='power-word'>intuitive</span> of projects. I have
              experience with:
              <ul className='list'>
                <li className='listItem'>GitHub</li>
                <li className='listItem'>RESTful API</li>
                <li className='listItem'>Agile Development</li>
                <li className='listItem'>Vite</li>
                <li className='listItem'>Carousel</li>
                <li className='listItem'>Redux</li>
                <li className='listItem'>Bootstrap</li>
                <li className='listItem'>Email JS</li>
                <li className='listItem'>Linux</li>
                <li className='listItem'>PayPal React</li>
                <li className='listItem'>ArcGIS Pro</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id='about-buttons'>
        <button className='button'>
          <a
            id='talk'
            href='#big-contact-container'
          >
            Let's Chat!
          </a>
        </button>
        <a
          href={resume}
          download='MeganMiller_Resume'
          target='_blank'
          rel='noreferrer'
        >
          <button
            className='button'
            id='resume'
          >
            Download my Resume
          </button>
        </a>
      </div>
      <hr className='aboutHR'></hr>
      <div className='allstory'>
        <span className='storyheader'>
          <span>
            My<span id='story-word'> Story</span>
          </span>
        </span>
        <div className='mystory'>
          <span>
            <img
              id='geologypic'
              src={geology}
              alt='geology'
            />
          </span>
          <div>
            <p className='top-paragraph'>
              I am a graduate from{' '}
              <span>
                <a
                  id='csu'
                  href='https://www.colostate.edu/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Colorado State University
                </a>
              </span>{' '}
              with a Bachelor of Science in Geology and a recipient of a
              Certificate of Completion in Software Engineering powered by
              <span>
                <a
                  id='fullstack'
                  href='https://www.fullstackacademy.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  {' '}
                  Fullstack Academy
                </a>
              </span>
              . My choice of major in Geological Sciences came from my passion
              for being outside. I grew up hiking in the Rocky Mountains,
              snowboarding in the Cascades, and recently jumped into all things
              trail running in the foothills of the Front Range. As a transfer
              student at Colorado State University, my time was limited to
              complete my core requirements. Still, after taking a class in GIS,
              I recognized my passion for technical solutions to practical
              problems and used my remaining courses to pursue subjects such as
              Programming for GIS and Remote Sensing.
            </p>
          </div>
        </div>
        <p className='story-extend'>
          After graduation, I knew I wanted to pursue software engineering, but
          most importantly, to find a way to balance my commitment to the planet
          with my love for all things behind the screen. I have most recently
          graduated from Fullstack Academys software engineering bootcamp, which
          focuses on the NERD stack, systems design, and computer science.
          During my time there, I gained experience as a full-stack developer
          and was successful in building and deploying various web applications
          where I utilized a multitude of technologies. I absolutely love
          software design, learning new techniques, strengthening my skills, and
          creating something to be proud of.
        </p>
      </div>
    </div>
  );
};

export default About;
