import React from 'react';

const About = () => {
    return (
        <div className="flex-1 py-4 sm:px-4 text-black/80 w-3/4 mx-auto">
            <h1 className='text-2xl sm:text-4xl leading-loose border-b-4 border-b-[#E2C67F]/60 w-fit mb-2'
                >Hi! 👋🏻 My name is Jesus. 
            </h1>
            <p className='text-lg'>
                    I'm a Software Developer based in Los Angeles, CA. 🌇 
                <br />
                <br />
                    In addition the projects featured on here, I'm currently on an endeavour to learn the ins and outs of contributing to open source projects. My goal is to begin an open source project of my own to share and grow with the community. Follow me on <a className="font-medium text-blue-400 underline hover:cursor-pointer" href="https://github.com/jesusriv/">Github</a> to collaborate!
                <br />
                <br />
                    In my free time I enjoy spending time with my wife and son 👨‍👩‍👦, listening to music, and writing, which I intend to begin doing more of in a technical context to teach programming, <a className="font-medium text-blue-400 underline hover:cursor-pointer" href="https://dev.to/iammjesus">here</a>.
            </p>
        </div>
    );
};

export default About;