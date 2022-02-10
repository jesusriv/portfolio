import React from 'react';
import Project from '../components/project.component';

import projects from '../data/projects.json';

const Projects = () => {
    return (
        <div className="projects-container">
            {projects && projects.map((project, i) => {
                return <Project key={i} project={project} />;
            })}
        </div>
    );
};

export default Projects;