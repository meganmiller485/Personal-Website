import React from "react";

const About = () => {
  return (
    <div>
      <hr className="aboutHR"></hr>
      <header className="header-about">
        About <span id="me">Me</span>
      </header>
      <div className="floating-pics">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Moraine_Lake_17092005.jpg/1200px-Moraine_Lake_17092005.jpg"
          alt="mtns"
        />
        <img
          src="https://peakvisor.com/img/news/southern-rocky-mountains.jpg"
          alt="mtn2"
        />
        <img
          src="https://wildlandtrekking.com/content/uploads/2020/09/ROCKY-MOUNTAINS.jpg"
          alt="mtn3"
        ></img>
        <img
          src="https://www.meganstarr.com/wp-content/uploads/2020/11/Moraine-Lake-in-Banff-Canada.jpg"
          alt="mtn4"
        />
        <img
          src="https://a.cdn-hotels.com/gdcs/production66/d638/09dfd9dc-2af3-4ca4-b1a0-e599fa18ff0c.jpg?impolicy=fcrop&w=800&h=533&q=medium"
          alt="mtn5"
        />
      </div>
      <div className="about-container">
        <p className="about-paragraph">
          I am based in Denver, Colorado where I love to spend time outside. I
          am a passionate software engineer who specializes in JavaScript web
          development. I enjoy learning and easily adapt to the constantly
          evolving tech world. I am regularly improving my skills and expanding
          my knowledge. My goal is to balance my love of practical technology
          with my commitment to the outdoors.
        </p>
        <p className="skills">
          <header className="skillheader">Technical Skills:</header>
          JavaScript | React | Node.js | Express | PostgreSQL | Databases | HTML
          | CSS | GitHub | ArcGIS Pro
        </p>
        <div>
          <button id="chatbutton">Let's Talk!</button>
          <button id="resume">Download my Resume</button>
        </div>
      </div>
    </div>
  );
};

export default About;
