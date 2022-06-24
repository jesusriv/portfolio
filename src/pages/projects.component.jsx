import React from 'react';
import Project from '../components/project.component';

import projects from '../data/projects.json';

const Projects = () => {
    return (
        <div className="relative" id='projects'>
            <div className='w-full h-full flex justify-start py-20 px-10
                space-x-8 srollbar-default overflow-x-auto md:space-x-0 lg:justify-evenly'>
                {projects && projects.map((project, i) => {
                    return <Project key={i} project={project} />;
                })}
                <div className='w-10 h-full border-2 border-gray-100 md:hidden'></div>
            </div>
        </div>
    );
};

export default Projects;
