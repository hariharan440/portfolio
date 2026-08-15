//About
import React from 'react';
import aboutImg from '../assets/about.jpg';
import SpeakerButton from './SpeakerButton';

const About = () => {
  return (
    <div className='text-white max-w-[1200px] mx-auto my-12 font-sans' id='about'>

      <div className='md:grid md:grid-cols-2 sm:py-16'>

        <div className='mt-4 md:mt-0 text-left flex'>
          <div className='my-auto mx-6'>
            <div className="flex items-center gap-4 mb-4">
              <h2 className='text-4xl font-bold primary-color'>About Me</h2>
              <SpeakerButton text="I am a Full-Stack Developer with strong system design fundamentals and experience building scalable, real-time architectures. I use AI extensively throughout the development lifecycle for rapid problem-solving, efficient debugging, and delivering high-quality products. I am currently exploring AI Agents, Voice AI, and real-time reliable tool calling." />
            </div>
            <p className='text-base lg:text-lg'>
              Full-Stack Developer with strong system design fundamentals and experience building scalable, real-time architectures. I use AI extensively throughout the development lifecycle—leveraging tools like Claude, Cursor, and Antigravity—for rapid problem-solving, efficient debugging, and delivering high-quality products.
            </p>
            <div className='mt-6'>
              <h3 className='text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2'>Currently Exploring</h3>
              <p className='text-sm text-gray-300'>
                AI Agents &middot; Voice AI &middot; Real-time Systems &middot; Reliable Tool Calling &middot; Multilingual Conversations
              </p>
            </div>
          </div>
        </div>

        <img className='mx-auto rounded-3xl py-8 md:py-0' src={aboutImg} width={300} height={300} alt='aboutimg' />

      </div>
    </div>
  );
}

export default About;
