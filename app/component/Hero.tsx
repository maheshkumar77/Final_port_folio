import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/textgenerateeffect'
import Bordermagic from './ui/Bordermagic'
import { FaLocationArrow } from 'react-icons/fa'
import Welcome from "./welcome"
import TrueFocus from "./Anoanimation"
import RotatingText from './Iconicstyle'


const Hero = () => {
  return (
    <div className=' pb20 pt-36'>
        <div >
            <Spotlight className=' -top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white"/>
            <Spotlight className=' top-10 left-full h-[80vh] w-[50vw] ' fill="purple"/>
            <Spotlight className=' top-28 left-80 h-[80vh] w-[50vw]' fill="blue"/>
        </div>
      <div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.05] bg-grid-black/[0.2]  flex items-center justify-center absolute top-0 left-0 ">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
     
    </div>
    <Welcome/>
    <div className=' flex justify-center relative mt-20 z-10 '>
        <div className=' max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className=' uppercase tracking-widest text-xs text-center text-blue-100 w-[100%]'>
             
            <TrueFocus 
sentence="Welcome To My Profile"
manualMode={false}
blurAmount={5}
borderColor="blue"
animationDuration={1}
pauseBetweenAnimations={4}
      />
            </h2>
         
            <TextGenerateEffect
            className=' text-center text-[40px] md:text-5xl lg:text-6xl mt-5'
            words='Hi, I’m Mahesh Kumar Sahu '
            />
     
  
         <div className=' flex w-full justify-center items-center flex-row gap-3'>
         I AM <RotatingText
  texts={['Full-Stack Developer', 'Backend Developer', 'Frontend Developer','Designer', 'Programer','Everything  !!!']}
  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md"
  staggerFrom={"last"}
  initial={{ y: "100%" }}
  animate={{ y: 0 }}
  exit={{ y: "-120%" }}
  staggerDuration={0.025}
  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
  transition={{ type: "spring", damping: 30, stiffness: 400 }}
  rotationInterval={2000}
/>
         </div>
            
           <a href='#work'>
           <Bordermagic
           titel='Show my work'
           icon={<FaLocationArrow/>}
           position='right'
           />
           </a>
        </div>
    </div>
      </div>
    </div>
  )
}

export default Hero
