// BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css'; // Add CSS for the background video styling
import video from '../../videos/sunset.mp4';


const BackgroundVideo = () => {
  return (
    <video className="background-video" autoPlay loop muted>
      <source src={video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
