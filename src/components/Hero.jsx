//Hero
import React from 'react';
import heroimage from '../assets/profilepic7.png';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
    return (
        <div className='flex flex-col sm:flex-row items-center max-w-[1200px] md:h-[90vh] mx-auto py-8 bg-black font-sans'>

            <div className='w-[200px] lg:w-[330px] mb-6 sm:mb-0 sm:ml-10'>
                <img src={heroimage} alt='heroimage' className='w-full' />
            </div>

            <div className='sm:ml-28 text-center sm:text-left'>
                <h1 className='text-white text-4xl sm:text-5xl lg:text-7xl font-extrabold'>
                    <span className='primary-color'>
                        I'm a
                    </span> <br />
                    <TypeAnimation
                        sequence={[
                            "Frontend Dev",
                            1000,
                            "UX/UI designer",
                            1000,
                            "Programmer",
                            1000,
                        ]}
                        wrapper='span'
                        speed={50}
                        repeat={Infinity}
                    />
                </h1>

                <p className='text-white sm:text-lg my-6 lg:text-xl max-w-[350px] sm:max-w-none'>
                    My name is Hariharan and I have 1+ years in Web/App development.
                </p>

                <div className='flex flex-col sm:flex-row items-center gap-4'>
                    <a href='https://drive.google.com/file/d/1pD0IGqmyVfsdxIC2cFMEISUQc3VGKM5c/view?usp=sharing' target="_blank" rel="noreferrer" className='px-4 py-2 w-[200px] sm:w-auto rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 text-white'>
                        Download CV
                    </a>
                    <a href='#contact' className='px-4 py-2 w-[200px] sm:w-auto rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>
                        Contact
                    </a>
                </div>


            </div>

        </div>
    );
};

export default Hero;
