import React from "react";
import { FloatingDock } from "./ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconHome,
  
} from "@tabler/icons-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { BiLogoGmail } from "react-icons/bi";
import { CiLinkedin } from "react-icons/ci";
import { FaCodepen } from "react-icons/fa";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "Linkedin",
      icon: (
        <CiLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/mahesh-kumar-sahu-860898350/",
    },
    {
      title: "Gmail",
      icon: (
        <BiLogoGmail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=maheshkumarsahu605@gmail.com",
    },
    {
      title: "instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
     
      ),
      href: "#",
    },
    {
      title: "Whatsap",
      icon: (
        <FaWhatsapp className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://wa.me/918984986052",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/maheshkumar77",
    },
    {
      title: "CodePen",
      icon: (
        <FaCodepen className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://codepen.io/your-work/",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[70px] w-full mt-[5px] mb-6">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
