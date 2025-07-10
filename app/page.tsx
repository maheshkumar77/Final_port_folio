import React from 'react';
import Hero from './component/Hero';
import { FloatingNav } from './component/ui/Floatingnav';
import { FaHome } from 'react-icons/fa';
//import { GetinTouch } from './component/GetinTouch';
import { FloatingDockDemo } from './component/Links';
import { WobbleCardDemo } from './component/newAbout';
import { ThreeDCardDemo } from './component/projectcomponent';
import { MdOutlineRoundaboutRight } from "react-icons/md";
import { IoCodeWorkingOutline } from "react-icons/io5";
import { FaMessage } from "react-icons/fa6";
import { LampDemo } from './component/Aboutright';
import Skills from './component/Skills';
import { RiBaseStationLine } from "react-icons/ri";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import Exporimo from './component/Exporimo';
import GetinPage from './component/Getinbutton';

const Page = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden sm:px-10">
      <div className="w-full flex flex-col gap-8 justify-center items-center h-auto">
        <FloatingNav
          navItems={[
            { name: 'Home', link: "#home", icon: <FaHome /> },
            { name: 'About', link: "#About", icon: <MdOutlineRoundaboutRight /> },
            { name: 'Work', link: "#work", icon: <IoCodeWorkingOutline /> },
            { name: 'Experience', link: "#expriace", icon: <TbLayoutSidebarLeftExpandFilled /> },
            { name: 'HireMe', link: "#hireMe", icon: <FaMessage /> },
            { name: 'FindMeOnOnline', link: "#online", icon: <RiBaseStationLine /> }
          ]}
        />

        <div id="home">
          <Hero />
        </div>

        <div id="About" className="w-full">
          <WobbleCardDemo />
        </div>

        <div id="expriace" className="w-screen relative  ml-[-50vw] mr-[-50vw]">
          <Exporimo />
        </div>

        <div id="skill">
          <Skills />
        </div>

        <div id="work">
          <LampDemo />
          <ThreeDCardDemo />
        </div>

        <div id="hireMe" className="w-screen relative  ml-[-50vw] mr-[-50vw]">
          {/* <GetinTouch /> */}
          <GetinPage/>
        </div>

        <div id="online">
          <FloatingDockDemo />
        </div>
      </div>
    </main>
  );
};

export default Page;
