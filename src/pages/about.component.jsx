import React from 'react';

const About = () => {
    return (
        <div className="w-2/3 flex-1 overflow-y-auto pb-16 sm:px-4 text-black/80 mx-auto no-scrollbar">
            <h1 className='text-2xl sm:text-4xl leading-loose border-b-4 border-b-[#E2C67F]/60 w-fit mb-2'
                >Hi! 👋🏻 My name is Jesus. 
            </h1>
            <p className='text-lg'>
                    A software developer from ☀️ LA using logic and design to program tools that solve real-world problems. 
                <br />
                <br />
                    When not hacking away at my computer, I love spending time with my wife , son, and (soon) daughter 👨‍👩‍👧‍👦. I enjoy listening to music 🎷 and writing ✍🏻, of which I’m excited to do more of in a technical format on the Dev.to community site, <a className="font-medium text-blue-500/80 underline hover:cursor-pointer" href="https://dev.to/iammjesus">here</a>. Be sure to join and follow along for coding tips, and the occasional story or two! 
                <br />
                <br />
                    Along with this, I’ll be contributing to open-source projects in hopes of documenting the experience to help others and myself learn, to build an OS project, creating opportunities for the developer community to contribute to. Check out my <a className="font-medium text-blue-500/80 underline hover:cursor-pointer" href="https://github.com/jesusriv/">Github</a> account to collaborate! 
            </p>
        </div>
    );
};

export default About;