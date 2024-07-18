// MainPage.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import { resume } from '../../photos/resume.pdf';
import './MainPage.css';

const MainPage = () => {
  return (
    <div className="main-page">
      <div className="content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and learn more about me.</p>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} size="3x" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </a>

        <a href="/path/to/your/resume.pdf" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faFilePdf} size="3x" />
        </a>
      </div>
    </div>
  );
};

export default MainPage;
