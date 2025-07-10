"use client";
import Image from "next/image";
import { WobbleCard } from "./ui/wobble-card";
import { motion } from "framer-motion";
import "../css/style.css"
export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        < div className=" h-auto w-auto justify-between flex-row">
        <div className="max-w-xs">
          <motion.p
          initial={{y:-200, opacity:0}}
          whileInView={{y:0,opacity:1}}
          transition={{
            duration: 1.5,
          }}
          className=" text-center text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
           
           ABOUT ME
          </motion.p>
          <motion.p 
          initial={{x:-200, opacity:0}}
          whileInView={{x:0,opacity:1}}
          transition={{
            duration: 1,
          }}
          className="mt-[-50px] text-left  text-base/6 text-neutral-200">
            <strong className=" underline text-center text-2xl">About :-</strong>
            <br/>
          I am a versatile Full Stack Developer proficient in JavaScript, Node.js, React, Next.js, Java, and Python, with expertise in building scalable and efficient web applications. My strong understanding of Data Structures and Algorithms ensures optimized, high-performance solutions. 
          I deliver end-to-end development, from frontend to backend, with a focus on clean code and best practices.
          </motion.p>
        </div>
        <div
        className=" h-[400px] w-[400px] overflow-hidden mt-[-350px] mr-[-80px] flex float-end "
       
        >
          <motion.div
           whileInView={{opacity:1,y:0,rotate:45}}
           initial={{opacity:0,y:100,rotate:0}}
           transition={{duration:1}} 
           className=" h[300px] w-[300px] mr-[-200px]  "
          >
        <Image
  src="https://maheshkumar77.github.io/Portfolio_Use_Nextjs/comp.jpg"
  width={300}
  height={300}
  alt="linear demo image"
  className="absolute mt-8 -right-[300px] lg:-right-[20%] grayscale filter -bottom-10 object-cover "
/>
</motion.div>
        </div>
        </div>
      </WobbleCard>
      
      <WobbleCard containerClassName="col-span-1 min-h-[300px] overflow-hidden justify-center items-center ">
      <motion.div
      initial={{opacity:0,height:100,width:100,x:100}}
      whileInView={{opacity:1,height:300,width:300,x:0}}
      transition={{duration:1}}
      className=" flex justify-center items-center rounded-md overflow-hidden">
     
      <Image
       src="https://maheshkumar77.github.io/Portfolio_Use_Nextjs/mypic2.png"
       width={300}
       height={300}
       alt="linear demo image"
       className=" relative rounded-md mx-2"
      />
      </motion.div>
   

      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <motion.h2
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:1}}
          className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            BTech( In Computer Scince And Engineering).
          </motion.h2>
          <motion.p 
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1}}
          className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Gandhi Academy Of Technology And Engineering.(Brehampur,Odisha)
            Yop:-2024
            
          </motion.p>
        </div>
        <div className="  h-[300px] mt-[-200px] w-[500px] flex justify-between flex-row float-end overflow-hidden">
         <motion.div
         whileInView={{opacity:1,y:0,rotate:45}}
         initial={{opacity:0,y:-100,rotate:45}}
         transition={{duration:1}}
         className=" h-[250px] w-[250px] -ml-[100px] mt-[-80px] rotate-45">
          <Image 
          src="https://maheshkumar77.github.io/Portfolio_Use_Nextjs/tie2.jpg"
          width={250}
          height={250}
          alt="linear demo image"
          />
         </motion.div>
         <motion.div
         whileInView={{opacity:1,y:0,rotate:45}}
         initial={{opacity:0,y:100,rotate:45}}
         transition={{duration:1}}
         className=" h-[250px] w-[250px] -ml-[100px] mt-[200px] rotate-45">
          <Image 
          src="https://maheshkumar77.github.io/Portfolio_Use_Nextjs/comp.jpg"
          width={250}
          height={250}
          alt="linear demo image"
          />
         </motion.div>
        </div>
      </WobbleCard>
    </div>
  );
}


