import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const iconVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 60,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, x: "-100vw" },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 60 } },
};

export default function Skills() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleButtonClick = () => {
    const projectsSection = document.getElementById("Projects");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="Skills"
      className="flex flex-col items-center mt-[190px]"
      ref={ref}
    >
      <div>
        <h2 className="text-5xl semi-bold font-serif">Skills</h2>
      </div>
      <motion.div
        className="grid grid-cols-3 gap-4 md:flex space-x-5 pt-7"
        variants={iconVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={childVariants}>
          <FaHtml5 className="text-5xl" />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaCss3Alt className="text-5xl" />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaJs className="text-5xl" />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaNodeJs className="text-5xl" />
        </motion.div>
        <motion.div variants={childVariants}>
          <FaReact className="text-5xl" />
        </motion.div>
        <motion.div variants={childVariants}>
          <SiTailwindcss className="text-5xl" />
        </motion.div>
      </motion.div>
      <div className="max-w-[190px] md:max-w-lg mt-8 relative">
        <p>
          I have a good understanding of React, and I have completed projects
          using React and Tailwind. Currently, I'm studying Back-End Development
          and working towards becoming a Full Stack Developer.
        </p>
        <button
          onClick={handleButtonClick}
          className="border-1 rounded-full p-3 bg-[#0a192f] text-white mt-5 absolute right-0"
        >
          Portfolio
        </button>
      </div>
    </div>
  );
}
