//Skills
import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import next from '../assets/next3.webp'
import react from '../assets/react.png'
import node from '../assets/nodejs.png'
import python from "../assets/Python.png"
import git from '../assets/git.png'
import mysql from '../assets/mysql1.png'
import mongo from '../assets/mongo.webp'
import postmon from '../assets/postmon.png'
import swagger from '../assets/swagger.png'
import supabase from '../assets/supabase.png'
import n8n from '../assets/n8n.png'
import crew from '../assets/crew.png'



const Skills = () => {
  return (
    <div className="bg-black font-sans text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-gray-700 text-3xl md:text-4xl font-bold text-center mb-12">
          My <span className="primary-color">Tech</span> Stack
        </h2>

        <div
          className="
        grid 
        grid-cols-2 
        sm:grid-cols-3 
        md:grid-cols-4 
        lg:grid-cols-6
        gap-10 
        justify-items-center
      "
        >
          {/* HTML */}
          <div className="flex flex-col items-center">
            <img src={html} alt="HTML" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">HTML</p>
          </div>

          {/* CSS */}
          <div className="flex flex-col items-center">
            <img src={css} alt="CSS" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">CSS</p>
          </div>

          {/* JavaScript */}
          <div className="flex flex-col items-center">
            <img
              src={javascript}
              alt="JavaScript"
              className="w-16 md:w-20 rounded-lg"
            />
            <p className="mt-3 text-sm md:text-base font-medium">JavaScript</p>
          </div>

          {/* Tailwind */}
          <div className="flex flex-col items-center">
            <img src={tailwind} alt="Tailwind" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Tailwind CSS</p>
          </div>

          {/* Next */}
          <div className="flex flex-col items-center">
            <img src={next} alt="React" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Next JS</p>
          </div>

          {/* React */}
          <div className="flex flex-col items-center">
            <img src={react} alt="React" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">React</p>
          </div>

          {/* Node */}
          <div className="flex flex-col items-center">
            <img src={node} alt="Node.js" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Node.js</p>
          </div>

          {/* Python */}
          <div className="flex flex-col items-center">
            <img src={python} alt="Node.js" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Python</p>
          </div>

          {/* MySQL */}
          <div className="flex flex-col items-center">
            <img src={mysql} alt="MySQL" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">MySQL</p>
          </div>

          {/* MongoDB */}
          <div className="flex flex-col items-center">
            <img src={mongo} alt="MongoDB" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">MongoDB</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <img src={git} alt="GitHub" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">GitHub</p>
          </div>

          {/* Postman */}
          <div className="flex flex-col items-center">
            <img src={postmon} alt="Postman" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Postman</p>
          </div>

          {/* Swagger */}
          <div className="flex flex-col items-center">
            <img src={swagger} alt="Swagger" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Swagger</p>
          </div>

          {/*Supabase*/}
          <div className="flex flex-col items-center">
            <img src={supabase} alt="Swagger" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Supabase</p>
          </div>

          {/*n8n*/}
          <div className="flex flex-col items-center">
            <img src={n8n} alt="Swagger" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">n8n</p>
          </div>

          {/*Crewai*/}
          <div className="flex flex-col items-center">
            <img src={crew} alt="Swagger" className="w-16 md:w-20" />
            <p className="mt-3 text-sm md:text-base font-medium">Crewai</p>
          </div>

        </div>
      </div>
    </div>

  )
}

export default Skills

