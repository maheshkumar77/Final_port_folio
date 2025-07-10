"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { projectdata } from "../../data/data"
import {motion} from "framer-motion"

export function ThreeDCardDemo() {
  return (
    <div className=" flex justify-evenly gap-6 w-full h-auto flex-wrap  items-center lg:mt-[-300px] mt-[80px]" >
        {projectdata.map((item,index)=>(
            <motion.div 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:200}}
            transition={{duration:1}}
            key={index} className="  mt-[-20px] lg:mt-[-50px] flex justify-center items-center">
    <CardContainer className="inter-var" >
      <CardBody
        className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
        
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white">
          {item.projectname}
         
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
          {item.projectdesc}
          <div className="w-full h-auto flex justify-between  flex-col">

  <div className="text-[10px] text-white float-start">
    Use Technology:-
    {item.technology.map((i, it) => (
      <span key={it} className=" text-blue-700 ">
        {i}
        {it < item.technology.length - 1 && ', '}
      </span>
    ))}
  </div>
</div>
        </CardItem>

        <CardItem translateZ="100" 
         
        className="w-full mt-4 cursor-pointer">
          <Image
            src={item.projectimg} 
            height={1000}
            width={1000}
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href={item. projectlink2l}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
             
              <p className=" bg-green-600 px-1 py-1 text-white-100 lg:mt-[-30] mt-[-10] float-start"> See Live</p>
              
          </CardItem>
          <CardItem
            translateZ={20}
            as={Link}
            href={item.projectlink1}
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
              
              
              <p className="  px-1 py-1 text-white-100 lg:mt-[-30] mt-[-10] float-right">See the code →</p> 
              
          </CardItem>
          
        </div>
      </CardBody>
    </CardContainer>
    </motion.div>
    ))}
    </div>
  );
}
