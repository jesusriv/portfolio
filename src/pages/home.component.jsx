 import React from 'react';
 import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="absolute min-h-[600px] top-0 left-0 right-0 bottom-0 flex items-center justify-center">
            <div className='px-4 py-20 sm:p-20 mt-24 flex flex-col space-y-3 bg-neutral-100 border-8 border-[#c9a447]/30 shadow-md'>
                <h1 className='text-3xl tracking-widest uppercase text-neutral-50 px-8 py-2 rounded-md bg-[#16292F] m-auto'>
                    Jesus Rivera
                </h1>
                <p className='text-center text-xl text-black/70 tracking-widest font-medium'>Software<span className='text-[#c9a447]'> Developer</span></p>
                <Link className='btn mx-auto font-medium' to="/projects">View my work</Link>
            </div>
        </div>
    );
};

export default Home;
