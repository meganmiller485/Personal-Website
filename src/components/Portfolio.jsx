import React from 'react';
import paint from '../assets/images/painbrush.png';
import fitness from '../assets/images/fitness.png';

const Portfolio = () => {
  return (
    <div id='big-portfolio-container'>
      <header id='header-portfolio'>
        <span id='portfolioMe'>
          Welcome To My <span id='me'>Portfolio</span>
        </span>
      </header>
      <div className='portfolio-intro'>Check out some of my work:</div>
      <div className='portfolio-container'>
        <div className='singleProjContainer'>
          <img
            className='proj-Img'
            src={paint}
            alt='img'
          ></img>
          <div className='proj-overlay'>
            <a
              href='https://creative-juices.fly.dev/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='proj-desc'>
                Creative Juices<div id='techs-used'>React / JS</div>
              </div>
            </a>
          </div>
        </div>

        <div className='singleProjContainer'>
          <img
            className='proj-Img'
            src={fitness}
            alt='img'
          ></img>
          <div className='proj-overlay'>
            <a
              href='https://github.com/meganmiller485/fitnessTracker'
              target='_blank'
              rel='noreferrer'
            >
              <div className='proj-desc'>
                Fitness Tracker <div id='techs-used'>React / JS</div>
              </div>
            </a>
          </div>
        </div>

        <div className='singleProjContainer'>
          <img
            className='proj-Img'
            src='https://images.squarespace-cdn.com/content/v1/609173bccf308b7f7e1122a0/1621006808313-Y5ZZ2NB7NAC0QS628AYI/Allotment+Ash+Tree+Ring+unframed+print.jpg?format=1000w'
            alt='img'
          ></img>
          <div className='proj-overlay'>
            <div className='proj-desc'>
              Wild Tree Rings <div id='techs-used'>React / JS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
