import React from 'react';

const Header = () => {
    return (
        <header className="w-full flex flex-col text-black/70 px-6 xl:px-0 z-10">
            <div className="flex justify-between">
              <p className='text-2xl text-black/80 r-[2px] font-light hover:cursor-pointer'>JR</p>
              <a href="#contact">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>

            <nav className="bg-neutral-100 px-6 sm:mx-auto sm:w-2/3 flex space-x-4 justify-around sm:justify-between py-8 uppercase tracking-widest z-10">
              <a href="#projects">projects</a>
              <a href="#about">about</a>
              <a href="https://drive.google.com/file/d/1CNsIKkyuUJZ_tZFAfcQ-jJ9HF0qqOY7G/view?usp=sharing">resume</a>
            </nav>
        </header>
    );
};

export default Header;
