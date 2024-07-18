// ContactPage.js

import React, { useState, useEffect } from 'react';
import './ContactPage.css';

const ContactPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // Set the timeout duration in milliseconds
    const TIMEOUT_DURATION = 10000; // 10 seconds

    // Create a promise that rejects after a specified timeout
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, TIMEOUT_DURATION);
    });

    // Perform the fetch request and handle timeout
    try {
        const response = await Promise.race([
            fetch('https://formspree.io/f/xvoeaqyj', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            }),
            timeoutPromise
        ]);

        if (response.ok) {
            setFormSubmitted(true);
        } else {
            console.error('Failed to submit form');
        }
    } catch (error) {
        console.error('Request failed or timed out:', error.message);
    }
};


  return (
    <div className={`contact-page ${isActive ? 'active' : ''}`}>
      <div className={`window ${isActive ? 'active' : ''}`}>
        <h2>Contact</h2>
        {formSubmitted ? (
          <p>Sent! Thank you for your message.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>
            <button type="submit">Send</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactPage;
