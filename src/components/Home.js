import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

export default function Home() {
  const githubUrl = "https://github.com/your-github-profile";
  const linkedinUrl = "https://www.linkedin.com/in/your-linkedin-profile";
  const aboutMe =
    "Hello! I'm Tamim, a passionate full stack developer with experience in building web applications. My skills include React, Tailwind CSS, HTML, and Javascript.";
  const [showAlert, setShowAlert] = useState(false);

  function handleClick() {
    setShowAlert(true);
  }
  function handleExit() {
    setShowAlert(false);
  }

  return (
    <div id="Home" className="mt-40 pl-8 mb-24 sm:pl-[150px]">
      <h1 className="text-4xl sm:text-5xl font-bold tracking-[5px] font-serif">
        Tamim Zanhour
      </h1>
      <h2 className="text-4xl sm:text-6xl semi-bold text-[#393c41] mt-3 font-serif">
        i'm a Full stack developer
      </h2>
      <p className="hidden md:block max-w-md text-[#393c41] text-lg mt-3 font-serif">
        {aboutMe}
      </p>
      <button
        onClick={handleClick}
        className="md:hidden border-2 bg-[#0a192f] text-white p-3 mt-6 rounded-full"
      >
        About me
      </button>
      {showAlert && (
        <div className="fixed top-40 left-10 right-10 bottom-40 flex justify-center rounded-[40px] bg-[#0a192f]">
          <div className=" text-white text-lg p-6 rounded-lg max-w-sm ">
            <FaTimes
              onClick={handleExit}
              className="cursor-pointer absolute top-4 right-4 h-8 w-8"
            />
            <p className="pt-[100px]">{aboutMe}</p>
          </div>
        </div>
      )}
      <div className="flex mt-6">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-4xl mr-4" />
        </a>
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-4xl" />
        </a>
      </div>
    </div>
  );
}
