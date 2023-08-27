import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import todoso from "../assets/todecacho.png";

const projectsData = [
  {
    id: 1,
    title: "Free Style",
    description: "A hair salon web app, done with React and Tailwind Css.",
    link: "https://link-to-project-1.com",
    image: todoso,
  },
  {
    id: 2,
    title: "Project 2",
    description: "lorem ipsum.",
    link: "https://link-to-project-1.com",
    image: "link-to-project-1-image.jpg",
  },
  {
    id: 3,
    title: "Project 3",
    description: "This is a brief description of what the project is about.",
    link: "https://link-to-project-1.com",
    image: "link-to-project-1-image.jpg",
  },
  {
    id: 4,
    title: "Project 4",
    description: "This is a brief description of what the project is about.",
    link: "https://link-to-project-1.com",
    image: "link-to-project-1-image.jpg",
  },
  // ... add more projects as needed
];

const Projects = () => {
  const githubUrl = "https://github.com/your-github-profile";

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <motion.div
      id="Projects"
      className="mt-[100px]"
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      <h2 className="text-4xl font-semibold mt-[100px] pl-[100px] md:pl-[150px] pt-[80px] pb-5 text-start tracking-[5px]">
        Portfolio:
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto container max-w-screen-md px-28 md:px-4">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="overflow-hidden rounded shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="px-6 py-4">
              <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
              <p className="text-gray-700 text-base">{project.description}</p>

              <div className="flex mt-6 flex-row justify-between">
                <button className="border-1 rounded-full p-3 bg-[#0a192f] text-[12px] text-white transform transition-all duration-500 ease-in-out hover:scale-110">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </button>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transform transition-all duration-500 ease-in-out hover:scale-110"
                >
                  <FaGithub className="text-[40px] mr-4" />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
