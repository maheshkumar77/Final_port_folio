"use client";
import React from 'react'
import { motion } from "framer-motion";
import '../css/loader.css'
const Welcome = () => {
  return (
   <motion.div 
   initial={{opacity:0}}
   whileInView={{opacity:1}}
   transition={{duration:1}}
   className=' w-full flex justify-center items-center mt-[-100px]'>
    <div className="loader">
      <div className="side1"></div>
      <div className="side2"></div>
      <div className="side3"></div>
      <div className="side4"></div>
    </div>
    </motion.div>
    
  )
}

export default Welcome;
