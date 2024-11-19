import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Misheck Serima</h1>
        <p>Software Engineer | Full Stack Developer</p>
      </div>

      <div className="about-section">
        <h2>About Me</h2>
        <p>
          I am a passionate Software Engineer with expertise in Full Stack Development. I specialize 
          in creating efficient, scalable web and mobile applications, focusing on delivering 
          exceptional user experiences.
        </p>
      </div>

      <div className="skills-section">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: React, Angular, HTML, CSS, JavaScript</li>
          <li>Backend: Node.js, PHP, Python, MySQL</li>
          <li>Mobile Development: Flutter, React Native</li>
        </ul>
      </div>

      <div className="projects-section">
        <h2>Recent Projects</h2>
        <ul>
          <li>
            <strong>Stock Management System:</strong> A web-based solution for tracking products,
            sales, and expenses.
          </li>
          <li>
            <strong>VR Experience:</strong> A virtual reality application for immersive learning.
          </li>
          <li>
            <strong>E-Commerce Platform:</strong> A full-stack platform for online shopping.
          </li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Contact</h2>
        <p>Email: misheck@example.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </div>
  );
};

export default App;
