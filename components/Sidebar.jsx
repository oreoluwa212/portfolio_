import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

import profilePic from "../public/dev-ed-wave.png";

const sidebar = {
  hidden: {
    x: "-100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
  exit: {
    x: "-10vw",
    transition: {
      type: "tween",
      duration: 0.3,
    },
  },
};

const Sidebar = ({ show, setShow }) => {
  return (
    <AnimatePresence>
      <motion.aside
        className={`overflow-hidden bg-slate-800 backdrop-blur-xl px-12 md:px-8 lg:px-12 py-10 h-full fixed w-3/4 shadow md:shadow-none md:w-auto md:block z-20`}
        variants={sidebar}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <FaTimes
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-white text-2xl cursor-pointer flex md:hidden"
        />
        
        <div className="flex justify-center">
          <Image
            src={profilePic}
            className="rounded-full xl:h-48 xl:w-48 lg:h-60 md:h-28 lg:w-60 md:w-28 w-48 h-48 object-cover"
            alt="oreoluwa"
          />
        </div>
        <div className="mt-4">
          <h3 className="text-2xl font-bold text-center mb-2 text-white tracking-normal">
            Oreoluwa Ruth Ajayi
          </h3>
          <p className="text-sm text-slate-300 text-center">
            Full Stack Developer
          </p>
        </div>

        <div className="flex flex-col items-center mt-4 lg:mt-2 font-quicksand">
          <Link className="sidebarLink" onClick={() => setShow(false)} href="#">
            home
          </Link>
          <Link
            className="sidebarLink"
            onClick={() => setShow(false)}
            href="#skills"
          >
            skills
          </Link>
          <Link
            className="sidebarLink"
            onClick={() => setShow(false)}
            href="#experience"
          >
            experience
          </Link>
          <Link
            className="sidebarLink"
            onClick={() => setShow(false)}
            href="#work"
          >
            work
          </Link>
          <Link
            className="sidebarLink"
            onClick={() => setShow(false)}
            href="#contact"
          >
            contact
          </Link>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
};

export default Sidebar;
