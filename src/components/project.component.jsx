import React, { useCallback, useEffect, useState } from 'react';

import budget from '../assets/images/budget.png';
import bounce from '../assets/images/bounce_attack.gif';
import imageSplash from '../assets/images/image_splash.gif';
import Hashtags from './hashtags.component';

const Project = ({ project }) => {
    const [image, setImage] = useState(null);
    const { name, description, gitLink, projectLink, tools } = project;
    const [show, setShow] = useState(false);

    const getImage = useCallback(() => {
        switch (name) {
            case "Bounce Attack":
                setImage(bounce);
                break;
            case "Image Splash":
                setImage(imageSplash);
                break
            case "Budget App":
                setImage(budget);
                break;
            default:
                break;
        }
    }, [name]);

    useEffect(() => { 
        if (!image) getImage() 
    }, [getImage, image])

    return (
        <div className="h-fit w-[290px] flex flex-col shrink-0 bg-neutral-100 border-8 border-[#c9a447]/40 shadow-md rounded-md relative">
            <div className="h-[150px] w-full overflow-hidden bg-cover border-b-2 border-b-[#c9a447]/90 shadow-md" style={{ backgroundImage: `url(${image})` }}></div>

            <div className="flex-1 flex flex-col space-y-4 ">
                <div className="w-full h-[200px] px-3 py-4 bg-[#16292F]/90 text-white">
                    <h1 className='text-3xl font-medium'>{name}</h1>
                    <div className='border border-[#E2C67F] w-1/4 my-1'></div>
                    <p className="text-sm py-2 font-medium">{description}</p>
                    {project.more && <p className='text-[11px] font-semibold border border-white/20 absolute left-2 right-2 p-2'>{project.more}</p>}
                </div>
            </div>

            <div className="w-full flex-1 text-sm px-2 pt-3 flex items-center space-x-2">
                <button className="bg-[#16292F]/90 text-sm font-semibold px-4 py-2 rounded shadow-sm hover:bg-[#101f23] uppercase text-white">
                    <a href={gitLink}>Github</a>
                </button>
                {projectLink && <button className="bg-[#d6b664] text-sm font-semibold px-4 py-2 rounded shadow-sm hover:bg-[#ceaa4e] uppercase text-black/70">
                    <a href={projectLink}>Live Demo</a>
                </button>}
            </div>
            <p onClick={() => setShow(true)}
                className='text-sm font-medium text-black/30 flex items-center space-x-2 p-2 hover:cursor-pointer'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Tools Used
            </p>

            {show && <div className='absolute border-4 border-[#16292F]/80 min-w-[220px] rounded-md py-3 w-fit bg-neutral-100 shadow-md shadow-black/10 bottom-8 left-2 flex flex-col'>
                <svg onClick={() => setShow(false)} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute right-2 top-1 text-black/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <h1 className='text-sm truncate text-black/50 font-medium px-2 pb-2 border-b border-b-black/20'>Languages / Frameworks</h1>
                <div className='p-2 flex gap-1 flex-wrap'>
                    {tools.map((tool, i) => {
                        return <Hashtags key={i} name={tool} />
                    })}
                </div>
            </div>}
        </div>
    );
};

export default Project;