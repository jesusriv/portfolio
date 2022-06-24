import React from 'react';

const About = () => {
    return (
        <div className="relative flex flex-col items-center justify-center mx-auto md:px-32 px-12 max-w-[900px]" id="about">
            <h1 className='uppercase text-2xl sm:text-4xl leading-loose border-b-4 border-b-[#E2C67F]/60 text-[#16292F]/80 w-fit mb-2 font-bold'
              >Hi! I'm Jesus. 
            </h1>
            <p className='text-lg'>
              I'm a Los Angeles based Front End Developer, constantly and consistently broadening my understanding about everything programming related.
              <br/>
              <br/>
              When I'm not programming, I'm spending time with my wife and children, enjoying music, reading, and/or studying to complete my CS major.
              <br/>
              <br/>
              Be sure to take a look at my current projects found below! Collaboration, and all other, inquiries are always welcomed, so be sure to reach out! 👋  
            </p>
        </div>
    );
};

export default About;
