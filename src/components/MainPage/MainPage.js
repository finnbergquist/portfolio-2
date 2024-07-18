// MainPage.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content">
        <h2>Hi, I'm Finn Bergquist</h2>
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and learn more about me.</p>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/finn-bergquist/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/finnbergquist" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>

      </div>
    </div>
  );
};

export default MainPage;
