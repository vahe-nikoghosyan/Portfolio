import React from "react";
import "./social.scss";

const Social = () => {
  return (
    <div className="social">
      <p>Follow me</p>
      <div>
        <a href="something" target="_blank">
          <img src="/images/github.svg" alt="Github" width="44" />
        </a>
        <a href="something" target="_blank">
          <img src="/images/instagram.png" alt="Instagram" width="44" />
        </a>
        <a href="something" target="_blank">
          <img src="/images/facebook.svg" alt="Facebook" width="44" />
        </a>
        <a href="something" target="_blank">
          <img src="/images/linkedin.svg" alt="Linkedin" width="44" />
        </a>
      </div>
    </div>
  );
};

export default Social;
