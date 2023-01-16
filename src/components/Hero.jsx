import React from "react";
import hero from "../assets/images/heropic.jpg";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-intro">
          <div className="greeting">Welcome! My name is</div>
          <div className="star"> Megan Miller</div>
          <div>
            {" "}
            I am a
            <span id="type-writer">
              <Typewriter
                loop
                cursor
                cursorStyle="|"
                typeSpeed={120}
                deleteSpeed={50}
                delaySpeed={1000}
                words={[" Developer", " Web Designer", " Software Engineer"]}
              />
            </span>
          </div>
        </div>
        <div>
          <img
            id="idpic"
            src={hero}
            alt="me"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
