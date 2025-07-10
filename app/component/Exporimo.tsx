"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col justify-center items-center bg-[#f9f9f9] font-serif py-20 px-4">
      {/* Classic paper texture background */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-purple-600"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mb-16 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Professional Experience
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        <p className="mt-6 text-lg text-gray-600 max-w-2xl">
          My career journey through innovative companies and challenging projects
        </p>
      </motion.div>

      {/* Timeline container */}
      <div className="relative w-full max-w-4xl z-10">
        {/* Vertical timeline line */}
        <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>

        {/* Experience 1 - Prodigy InfoTech */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mb-12 md:mb-16"
        >
          {/* Timeline dot */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-5 h-5 bg-blue-600 rounded-full border-4 border-white shadow-md"></div>

          <div className="md:w-5/12 md:pr-10 ml-auto bg-white p-8 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Full-stack Developer Intern</h3>
                <p className="text-gray-600">Prodigy InfoTech</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Nov 2024 - Mar 2025</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Developed full-stack applications using modern JavaScript frameworks</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Implemented responsive UI components and optimized backend services</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>Collaborated with team members using Agile methodologies</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "MongoDB", "Express"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Experience 2 - Talent Bard */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mb-12 md:mb-16"
        >
          {/* Timeline dot */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-5 h-5 bg-purple-600 rounded-full border-4 border-white shadow-md"></div>

          <div className="md:w-5/12 md:pl-10 bg-white p-8 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-4">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800">Backend Developer</h3>
                <p className="text-gray-600">Talent Bard</p>
              </div>
            </div>
            <div className="flex items-center text-gray-500 mb-6">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>Jan 2025 - Apr 2025</span>
            </div>
            <ul className="space-y-3 text-gray-700 mb-6">
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Designed and implemented RESTful APIs with Node.js and Express</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Optimized database queries and implemented caching with Redis</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-500 mr-2">•</span>
                <span>Integrated authentication systems and third-party services</span>
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "PostgreSQL", "Redis", "GraphQL"].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;