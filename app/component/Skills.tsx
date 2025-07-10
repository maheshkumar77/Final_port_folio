"use client";
import { motion } from "framer-motion";
import { FaJava, FaPython, FaReact, FaGithub, FaNode } from "react-icons/fa";
import { SiDatastax, SiPostgresql, SiMongodb, SiExpress, SiMysql } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { SiTypescript } from "react-icons/si";
import { SiVite } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiAuthentik } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { SiRedux } from "react-icons/si";
import '../css/style.css';

const Skills = () => {
  const transition = { duration: 1.9, ease: "easeInOut" }; // Unified transition

  return (
    <div className="flex justify-center items-center w-full h-[80vh] flex-col ">
      <div className="w-auto h-screen text-center overflow-hidden mt-1">
        
        <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={transition}
        className="glitch-wrapper">
          <div className="spinner lg:mr-9 mr-3"></div>
        <motion.div 
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...transition, duration: 2.9 }}
        className="glitch" data-glitch="glitch">Skills</motion.div>
        <div className="spinner lg:ml-9 ml-3"></div>
     </motion.div>
      </div>
      
      <div className="flex flex-wrap justify-center items-center gap-10 w-[90%] mt-10">
        {/* Java */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <FaJava className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">Java</p>
        </motion.div>

        {/* Python */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <FaPython className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">Python</p>
        </motion.div>

        {/* React */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <FaReact className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">React</p>
        </motion.div>

        {/* JavaScript */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <IoLogoJavascript className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">JavaScript</p>
        </motion.div>

        {/* Next.js */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <RiNextjsFill className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">Next.js</p>
        </motion.div>

        {/* HTML5 */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <TiHtml5 className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">HTML5</p>
        </motion.div>

        {/* CSS (Tailwind CSS) */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <RiTailwindCssLine className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">Tailwind CSS</p>
        </motion.div>

        {/* Datastax */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <SiDatastax className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">DSA</p>
        </motion.div>

        {/* PostgreSQL */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <SiPostgresql className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">PostgreSQL</p>
        </motion.div>

        {/* MongoDB */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <SiMongodb className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">MongoDB</p>
        </motion.div>

        {/* MySQL */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <SiMysql className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">MySQL</p>
        </motion.div>

        {/* Express */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
          <SiExpress className="text-6xl text-blue-800" />
          <p className="text-xl text-white font-semibold">Express</p>
        </motion.div>

        {/* Node.js */}
        
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
         
          <FaNode className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">Node.js</p>
        </motion.div>
   
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col"
        >
         
          <SiTypescript className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">Typescript</p>
        </motion.div>
        {/* GitHub */}
       
       <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          <FaGithub className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">GitHub</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          <SiVite
           className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">Vite</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          < SiPostman
           className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">
            Postmen
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          < SiAuthentik
           className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">
            Auth.Js
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          < IoLogoFirebase
           className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">
            Firebase
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={transition}
          className="flex justify-center items-center flex-col  "
        >
       
          < SiRedux
           className="text-6xl text-blue-800" />
          
          <p className="text-xl text-white font-semibold">
          Redux
          </p>
        </motion.div>
        
       </div>
       
    
    </div>
  );
};

export default Skills;
