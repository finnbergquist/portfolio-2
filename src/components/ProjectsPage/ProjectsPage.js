// ProjectsPage.js

import React, { useEffect, useState } from 'react';
import ProjectModule from "../ProjectModule/ProjectModule"; // Import the ProjectModule component
import './ProjectsPage.css';
import groove1 from '../../photos/groove1.png';
import groove2 from '../../photos/groove2.png';
import groove3 from '../../photos/groove3.png';
import traffic from '../../photos/traffic.png';
import traffic1 from '../../photos/traffic1.png';
import stocks from '../../photos/stocks.png';
import stocks1 from '../../photos/stocks1.png';
import stocks2 from '../../photos/stocks2.png';
import poetry from '../../photos/poetry.png';
import ising from '../../photos/ising.png';
import ising1 from '../../photos/ising1.png';
import ising2 from '../../photos/ising2.png';
import symphony from '../../photos/symphony.png';
import symphony1 from '../../photos/symphony1.png';
import symphony2 from '../../photos/symphony2.png';

const ProjectsPage = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Set isActive to true after component is mounted to trigger the transition
    setIsActive(true);
  }, []);

  // Define your GitHub projects here
  const projects = [
    {
      id: 1,
      photo: groove1,
      description: `GrooveBlocks is a digital solution to early music education,
      reimagining traditional methods by prioritizing gratifying songwriting experiences
      and adaptive learning environments over boring sight reading and instrument centered learning.
      As co-founder, my role involved leading the software and hardware development teams in creating a 
      physical modular musical building blocks and an integrated digital 
      application that seamlessly transitions between learning, jamming, and creating
      modes. Through sleek hardware featuring vibrant Neopixel lights and intuitive
      software , GrooveBlocks was designed to help students to explore
      their musical creativity while providing structured guidance and encouragement
      along their journey. Our product fostered improvisation, collaboration, 
      and personalized musical expression. My co-founder and I pitched this product to an angel investors
      at Walnut Ventures.`,
      githubLink: 'https://github.com/finnbergquist/Groove-Blocks',
      additionalPhotos: [groove2, groove3]
    },
    {
      id: 2,
      photo: stocks2,
      description: `With a partner, we explored utilizing stock data from Yahoo to construct a neural
      network capable of trading. Our endeavor aimed to leverage the power of Deep Q 
      Learning as an improvement over tabular Q learning in handling continuous 
      state representations. Despite facing challenges in optimizing the Deep Q Trader 
      model, which included implementing techniques such as Convolutional Neural Networks,
       Double Q, and Experience Replay, our project provided valuable insights into the 
       complexities of applying deep learning to real-world trading scenarios. Through 
       experimentation with epsilon decay and loss analysis, we gained a deeper understanding 
       of neural network optimization. While our project did not yield the desired outcome
       of trading profitably outside of our training date ranges on a consistent basis,
        it contributed to our broader understanding of utilizing neural networks for trading
         purposes.`,
      githubLink: 'https://github.com/finnbergquist/Stock-Trader-Neural-Net',
      additionalPhotos: [stocks, stocks1]
    },
    {
      id: 3,
      photo: poetry,
      description: `This project introduces an AI poetry tool to aid in the creative process of writing poetry.
      This project utilizes popular libraries such as numpy, keras, tensorflow, sklearn, and flask to implement 
      the AI and NLP functionalities, providing a seamless and efficient user experience.The AI 
      component of the tool is a neural network, trained on a diverse dataset comprising 
      thousands of lines of poetry from various poets.
      Through NLP techniques, this neural network has learned to understand the structure and patterns
       of poetic language. When prompted, it can generate suggestions for the next word in a poem 
       based on its understanding of poetic conventions and stylistic nuances.
      Users have the flexibility to interact with the tool in multiple ways. They can input their 
      own words, guiding the direction of their poem, or they can rely on the AI's suggestions for 
      inspiration. This seamless integration of human input and AI-generated output creates a 
      collaborative environment where users can explore different poetic avenues with ease.
      Furthermore, the tool allows users to evaluate the quality of generated poetry using metrics
      such as RMSE (root mean squared error). This metric provides insights into how closely the 
      AI-generated content aligns with the expected patterns of poetic language, helping users refine their compositions.
      Overall, by combining AI and NLP technologies, this poetry tool offers a unique and innovative
      approach to writing poetry, empowering users to unleash their creativity with the assistance
      of intelligent algorithms.`,
      githubLink: 'https://github.com/finnbergquist/poetry_generator',
      additionalPhotos: [],
    },
    {
      id: 4,
      photo: ising2,
      description: `
      In this project, a partner and I investigated the magnetic properties of two-dimensional ferromagnetic
       materials using a Python simulation based on the Ising model. The Ising model simplifies
        atomic interactions by representing spins as discrete values, allowing us to explore 
        magnetic behavior. Employing the Metropolis algorithm, we simulated spin interactions at
         different temperatures, considering thermal fluctuations. Our Python framework, 
         encapsulated in a "world" class, facilitated simulations and analysis, including methods 
         for energy and magnetization calculations. Addressing boundary conditions was crucial, 
         and we devised strategies to ensure accurate calculations near lattice edges. The 
         simulation provided insights into energy and magnetization behaviors, revealing transitions
          towards paramagnetic behavior at higher temperatures and equilibrium states at lower 
          temperatures. Through computational simulations, we gained valuable insights into
           ferromagnetic materials' magnetic properties, demonstrating the Ising model's utility
            in understanding condensed matter physics phenomena.`,
      githubLink: 'https://github.com/finnbergquist/IsingModel',
      additionalPhotos: [ising1, ising],
    },
    {
      id: 5,
      photo: symphony,
      description: `This project is still in its prototype stage. The concept was born from my 
      obsession with musical production and education. I firmly believe that the best way for kids
       to learn music is through tactile experimentation. I wanted to recreate the musical sequencing
        that is possible in digital audio workspaces like Garage Band, Logic, and Ableton in 
        a physical form. To do this I built a 4 step, 4 track sequencer and audio blocks that
        magnetically snap into place. Moving forward, I hope to find a way to layer audio files 
        in the same track, add effects, and customize the tempo. This project has taught me 
        about developing a concept into a prototype.

      The prototype runs on a Raspberry Pi, although the next design iteration will run on a 
      Teensy microcontroller with better audio processing capabilities. Each position has in 
      incomplete circuit with a two strips of conductive tape where the audio file pieces can 
      magnetically click into place. When they audio pieces firmly connected, the circuit is 
      completed. Each audio piece has a resistor with unique resistance. This way the central 
      processing unit can identify which piece is connected in any position at all times. One 
      challenge I ran into was fluctuation in resistance when the central processor reads the 
      analog signal from each circuit. This limited using resistors with similar resistance values.`
    ,
    additionalPhotos: [symphony1, symphony2],
    githubLink: "https://github.com/finnbergquist/Symphony"
    }

    // Add more projects as needed
  ];

  return (
    <div className={`projects-page ${isActive ? 'active' : ''}`}>
      <div className={`window ${isActive ? 'active' : ''}`}>
        <h2>Projects</h2>
        {/* Render a ProjectModule component for each project */}
        <div className="project-list">
          {projects.map(project => (
            <ProjectModule
              key={project.id}
              photo={project.photo}
              description={project.description}
              githubLink={project.githubLink}
              additionalPhotos={project.additionalPhotos}
              title = {project.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
