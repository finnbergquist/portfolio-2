// ProjectModule.js

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './ProjectModule.css';

const ProjectModule = ({ photo, description, githubLink, additionalPhotos, title }) => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div className="project-module">
      <div className="project-module" style={{ backgroundImage: `url(${photo})` }}>
        <div className="description">{title}</div>
        <a className = "a" href={githubLink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} /> {/* GitHub icon */}
        </a>
        <button className='button' onClick={togglePopup}>More Details</button>
    </div>
        {showPopup && (
            <>
                <div className="popup-background"></div>
                <div className="popup">
                    <div className="popup-content">
                    <div className="popup-photos">
                      {additionalPhotos && additionalPhotos[0] && <img src={additionalPhotos[0]} alt="Photo 1" />}
                      {additionalPhotos && additionalPhotos[1] && <img src={additionalPhotos[1]} alt="Photo 2" />}
                    </div>
                        <div className="popup-textbox">
                        <p></p>
                        <p>{description}</p>
                        </div>
                        <a className="github-button" href={githubLink} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <button className="close-button" onClick={togglePopup}>Close</button>
                    </div>
                    </div>
            </>
        )}
    </div>
  );
};

export default ProjectModule;
