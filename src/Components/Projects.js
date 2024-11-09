import React from 'react';
import vijay from './18317107_5975958.jpg';
import tamil from './225670265_b6c237f8-c8ce-43bd-9e02-30a875ccf721.jpg';

function Projects() {
  return (
    <section id="projects">
      <h1>My Projects</h1>
      <div className="project-card">
      <img src={vijay} className='im1'/>
        <h2>Project 1</h2>
        <p>
          PORTFOLIO
        </p>
        <p>This is my personal portfolio website, built using React, a powerful JavaScript library for building user interfaces. The project showcases my skills, experience, and projects in a modern, responsive, and user-friendly layout. I used React's component-based architecture to create a clean and modular structure,
           allowing for easy updates and scalability.</p>
        <a href="https://github.com/your-username/project1" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <div className="project-card">
        <img src={tamil} className='im2'/>
        <h2>Project 2</h2>
        <p>
        personal blog on ibm cloud
        </p>
        <p>This project involved creating and deploying a personal blog hosted on IBM Cloud, leveraging various cloud-native technologies
           and services. The blog serves as a dynamic platform for sharing technical articles, tutorials, and insights on cloud computing, software development, and emerging technologies..</p>
        <a href="https://github.com/karthick6381/karthick1" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </section>
  );
}

export default Projects;
