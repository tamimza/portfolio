import React from "react";
import myImage from "../assets/main-pic.png"; // replace with your own path

const About = () => {
  const handleButtonClick = () => {
    const contactSection = document.getElementById("Contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="flex items-center justify-center mt-40">
      <div className="max-w-sm mx-auto md:max-w-xl bg-white shadow-lg rounded-lg overflow-hidden p-4">
        <div className="sm:flex sm:items-center">
          <img
            className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-32 sm:w-32 rounded-full"
            src={myImage}
            alt="your_image_alt_text"
          />
          <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
            <p className="text-2xl leading-tight">Meet Me</p>
            <p className="text-xl text-gray-600 leading-tight">
              Junior Developer that is willing to learn new technologies, i do
              programming with passion and love. My special power is that I
              learn things very fast, and I care a lot about small details. I'm
              a 27-year old Syrian living in Norway now.
            </p>
            <button
              onClick={handleButtonClick}
              className="mt-4 bg-[#0a192f] hover:bg-[#122c54] text-white font-bold py-2 px-4 rounded-full"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
