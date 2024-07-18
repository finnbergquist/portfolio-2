// AboutPage.js

import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import readmeContent from '../../mark-down-files/profile';
import './AboutPage.css';

const AboutPage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after component is mounted to trigger the transition
    setIsActive(true);
  }, []);

  return (
    <div className={`about-page ${isActive ? 'active' : ''}`}>
      <div className={`window ${isActive ? 'active' : ''}`}>
        <h2>About Me</h2>
        
        <div class="parent-container">
          <div class="skills-container">
            <ReactMarkdown>{readmeContent}</ReactMarkdown>
          </div>

          <div class = "summary"> 
            <br/>
            <p>  
              As a recent graduate from Bowdoin College with dual majors in Physics and Computer Science, I am thrilled to continue my journey as a backend engineer at Marketron, where I initially began as a Software Engineering intern in May 2022. My academic background in math and physics has equipped me with a robust foundation in analytical thinking, which I seamlessly integrate into my coding projects.

              Throughout my time at Bowdoin, I delved deep into various coding projects, ranging from embedded processors to AI applications in financial trading simulations and full-stack web development. These experiences not only expanded my technical repertoire but also nurtured my passion for innovation and problem-solving.

              Now, as a full-time backend engineer at Marketron, I bring this passion and expertise to the forefront, collaborating with a dynamic team to develop robust and scalable solutions that drive the company's success. My journey from intern to full-time team member underscores my dedication to continuous learning and growth in the field of software engineering.
              </p>
          </div>
                    
          
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
