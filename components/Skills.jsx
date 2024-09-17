import { useRef } from "react";
import { motion } from "framer-motion";

import { FaCss3, FaFigma, FaHtml5, FaReact, FaTools } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiFirebase, SiNextdotjs, SiExpress, SiMongodb, SiSvelte, SiTypescript } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import { BiLogoSass, BiLogoTailwindCss } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

import Hoc from "./Hoc";

const container = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0.9,
  },
};

const children = {
  scale: {
    scale: [1, 1.1, 1],
  },
};

const Skills = () => {
  const skillsRef = useRef(null);

  const skills = [
    { icon: <FaHtml5 className="text-5xl" />, label: "HTML5" },
    { icon: <FaCss3 className="text-5xl" />, label: "CSS3" },
    { icon: <BiLogoTailwindCss className="text-5xl" />, label: "TailwindCSS" },
    { icon: <BiLogoSass className="text-5xl" />, label: "Sass" },
    { icon: <DiJavascript1 className="text-5xl" />, label: "JavaScript" },
    { icon: <SiTypescript className="text-5xl" />, label: "TypeScript" },
    { icon: <FaReact className="text-5xl" />, label: "React.js" },
    { icon: <SiNextdotjs className="text-5xl" />, label: "Next.js" },
    { icon: <SiFirebase className="text-5xl" />, label: "Firebase" },
    { icon: <FaFigma className="text-5xl" />, label: "Figma" },
    { icon: <FaNodeJs className="text-5xl" />, label: "Node.js" },
    { icon: <SiExpress className="text-5xl" />, label: "Express.js" },
    { icon: <SiMongodb className="text-5xl" />, label: "MongoDB" },
    { icon: <SiSvelte className="text-5xl" />, label: "Sveltejs" },
    { icon: <BsGit className="text-5xl" />, label: "Git" },
    { icon: <AiFillGithub className="text-5xl" />, label: "Github" },
  ];

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      id="skills"
      className="lg:py-16 py-10 relative"
    >
      <Hoc>
        <p className="heading">my specialty</p>
      </Hoc>

      <Hoc>
        <p className="mt-6">
          Over the past six years, I&apos;ve had the opportunity to learn and master a variety of tools and programming languages{" "}
          <FaTools className="inline" />. You may find me building with these:
        </p>
      </Hoc>

      <div className="relative overflow-hidden w-full mt-4" ref={skillsRef}>
        <motion.div
          className="flex"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            duration: skills.length * 2,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-none w-24 h-24 flex flex-col items-center justify-center px-4 py-2 mx-4 text-center"
            >
              <motion.div
                variants={children}
                whileInView="scale"
                className="rounded-full flex justify-center items-center"
              >
                {skill.icon}
              </motion.div>
              <p className="font-semibold mt-4 text-gray-900 dark:text-gray-100">
                {skill.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
