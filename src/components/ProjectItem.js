// src/components/ProjectItem.js
import React from 'react';
import './ProjectItem.css';

const ProjectItem = ({ title, image, description }) => {
    return (
        <div className="project-item">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ProjectItem;
