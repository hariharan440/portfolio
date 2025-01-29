//Skills
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import git from '../assets/git.png'
import mysql from '../assets/mysql1.png'
import mongo from '../assets/mongo.webp'
import postmon from '../assets/postmon.png'
import swagger from '../assets/swagger.png'


const Skills = () => {
  return (
    <div className=' bg-black font-sans text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4
    place-items-center md:flex md:justify-between md:items-center pt-10'>
      

      <h2 className='text-gray-700 text-2xl md:text-4xl font-bold m-4'>
        My <br/> Tech <br/> Stack
      </h2>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={html} alt="" />
        <p className='mt-2'>HTML</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={css} alt="" width={100} height={100} />
        <p className='mt-2'>CSS</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={javascript} alt="" width={100} height={100} className='rounded-lg'/>
        <p className='mt-2'>javascript</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={tailwind} alt="" width={100} height={100} />
        <p className='mt-2'>Tailwind</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={react} alt="" width={100} height={100} />
        <p className='mt-2'>React</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={node} alt="" width={100} height={100} />
        <p className='mt-2'>Node</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={mysql} alt="" width={100} height={100} />
        <p className='mt-2'>MySQL</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={mongo} alt="" width={100} height={100} />
        <p className='mt-2'>MongoDB</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={git} alt="" width={100} height={100} />
        <p className='mt-2'>Github</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={postmon} alt="" width={100} height={100} />
        <p className='mt-2'>Postman</p>
      </div>

      <div className='flex flex-col items-center m-4 sm:my-0 w-[80px] md:w-[100px]'>
        <img src={swagger} alt="" width={100} height={100} />
        <p className='mt-2'>Swagger</p>
      </div>


    </div>
  )
}

export default Skills

