import React from "react";
import "./aboutMe.scss";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="info">
        <div className="tags top-tags">
          {/* ***** START HTML BODY ***** */}
          <div className="html-tag">{"<html>"}</div>
          <div className="body-tag">{"<body>"}</div>
          {/* ***** START HTML BODY ***** */}
          <h2>My, Myself & I</h2>

          <p>
            I’m a Front-End Developer located in Armenia. I have a serious
            passion for UI effects, animations and creating intuitive, dynamic
            user experiences. Well-organised person, problem solver, independent
            employee with high attention to detail.
          </p>
          {/* ***** END HTML BODY ***** */}
          <div className="body-tag">{"</body>"}</div>
          <div>{"</html>"}</div>
          {/* ***** END HTML BODY ***** */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
