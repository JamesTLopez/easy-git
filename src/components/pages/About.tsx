import React from "react";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="title">
          <p>About</p>
        </div>
        <div className="content">
          <div className="description">
            <p>
              A simple react typescript app that searches and displays a users
              github repos and information.
            </p>
          </div>
          <div className="sub-title">
       
            <div className="tech">
            <p>Technologies</p>
                <ul>
                    <li>Typescript</li>
                    <li>Scss</li>
                    <li>Github API</li>
                    <li>React</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
