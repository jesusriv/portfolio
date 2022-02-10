import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.webp'

const Contact = () => {
    const[state, handleSubmit] = useForm("contactForm");

    return (
        <div className='flex flex-col sm:flex-row mt-5 mx-auto sm:m-auto py-10 absolute w-full h-full items-center justify-center'>
            <div className='w-[350px] sm:w-[450px] px-10 sm:px-12'>
                <h1 className='font-medium text-xl sm:text-2xl uppercase'>Work with me</h1>
                <div className='w-1/3 ml-16 sm:w-1/6 border border-[#d6b664] sm:ml-[135px]'></div>
                <form className=' mx-auto flex flex-col space-y-4' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text"
                            name="name"
                            className='rounded-sm py-2 px-4 bg-neutral-50' />
                        <ValidationError 
                            prefix="Name" 
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="enail"
                            name="email"
                            className='rounded-sm py-2 px-4 bg-neutral-50' />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message (Optional):</label>
                        <textarea name="message" className='py-2 px-4 bg-neutral-50'></textarea>
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors} />
                    </div>

                    <button className='py-2 px-8 rounded text-white font-medium tracking-widest bg-[#16292F] shadow-md uppercase'>Submit</button>
                </form>
            </div>
            <div className='flex space-x-3 sm:flex-col sm:h-3/4 pt-6 items-center sm:space-x-0 sm:space-y-3 justify-start uppercase text-md font-bold'>
                <a href="https://github.com/jesusriv"><img src={github} alt="Github Link" /></a>
                <a href="https://www.linkedin.com/in/rivera-jesus/"><img className='w-[38px]' src={linkedin} alt="LinkedIn Link" /></a>
            </div>
        </div>
    );
};

export default Contact;