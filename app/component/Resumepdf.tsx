import React from 'react';
import '../css/resume.css';  // Import the CSS file for the styles
import Link from 'next/link';
//import { GrResume } from "react-icons/gr";
function Resume() {
  return (
    <div className="app bg-transparent">
      <button className="glow-on-hover" type="button">
        <Link href="/showpdf">
          My Resume
        </Link>
      </button>
    </div>
  );
}

export default Resume;
