import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
const About = () => {
  return (
    <>
      <Jump>
        <div className="about" id="about">
          <div className="row">
            <div className="col-md-6 col-sm-12 col-xl-6 col-lg-6 col-xs-12 about-img">
              <img
                src="https://i.postimg.cc/3Y8F2MMF/Whats-App-Image-2024-07-21-at-17-35-15-9f61086e.jpg"
                alt="profile_pic"
              />
            </div>
            <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
              <h1>About me</h1>
              <p>
              Full Stack web & app Developer adept in working in both 
              front-end and back-end development processes. Highly skilled in 
              programming, design, development, Marketing and 
              implementation of functional specifications.
              </p>
            </div>
          </div>
        </div>
      </Jump>
    </>
  );
};

export default About;
