import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import github from '../assets/images/github.png'
import linkedin from '../assets/images/linkedin.png'

const Contact = () => {
    const[state, handleSubmit] = useForm("xzboelgw");

    const Success = () => {
        return <div className='div flex flex-col items-center'>
            <p className='text-2xl font-medium'>Thank you!</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
        </div>
    };

    const Form = () => {
        return (
            <div className='flex flex-col sm:flex-row items-center sm:items-start space-y-8 sm:space-y-0 w-fit'>
                <div className='w-[350px] sm:w-[500px] px-2 sm:px-12'>
                    <h1 className='font-medium text-3xl uppercase'>Work with me</h1>
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

                        <button type='submit' disabled={state.submitting} className='py-2 px-8 rounded text-white font-medium tracking-widest bg-[#16292F] shadow-md uppercase'>Submit</button>
                    </form>
                </div>
                
                
            </div>
        );
    };

    return (
        <div className='relative flex flex-col items-center justify-center pb-48' id="contact">
            { state.succeeded && <Success /> }
            { !state.succeeded && <Form /> }

            <div className='absolute bottom-0 w-full h-24 bg-[#16292F] pr-2 flex space-x-6 items-center justify-center'>
                <div className='w-10 h-10'>
                    <a href="https://github.com/jesusriv"><img src={github} alt="Github Link" /></a>
                </div>
                <div className='w-10 h-10'>
                    <a href="https://www.linkedin.com/in/rivera-jesus/"><img className='w-[38px]' src={linkedin} alt="LinkedIn Link" /></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;