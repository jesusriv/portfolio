 import React from 'react';

const Home = () => {
    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className='px-4 py-20 sm:p-20 mt-24 mb-40 flex flex-col space-y-3'>
                <h1 className='text-3xl tracking-widest uppercase text-neutral-50 px-8 py-2 rounded-md bg-[#16292F] m-auto'>
                    Jesus Rivera
                </h1>
                <p className='text-center text-xl text-black/70 tracking-widest font-medium'>Software<span className='text-[#c9a447]'> Developer</span></p>
                <a className='bg-[#16292F]/90 text-sm px-4 py-2 rounded shadow-sm hover:bg-[#101f23] uppercase text-white mx-auto font-medium' href="#projects">View my work</a>
            </div>
        </div>
    );
};

export default Home;
