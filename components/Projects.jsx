import React from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web9 from "../public/web9.png";
import web4 from "../public/web4.png";
import web3 from "../public/web3.png";
import web6 from "../public/web6.png";
import web7 from "../public/web7.png";
import web8 from "../public/web8.png";
import Hoc from "./Hoc";

const projects = [
  {
    image: web4,
    link: "https://task-me-ai.vercel.app",
    title: "Taskme AI",
    description:
      "A project management tool to simplify your workflow with AI productivity partner. Break down project timelines into daily tasks with our AI project management solution."
  },
  {
    image: web3,
    link: "https://stream-vibe-ebon.vercel.app",
    title: "StreamVibe Movie App",
    description:
      "A modern movie recommendation platform built with React and TMDB API.Features movie discovery, detailed information, trailers, and personalized recommendations with a sleek Netflix- inspired interface.",
  },
  // {
  //   image: web9,
  //   link: "https://delve.fun",
  //   title: "Delve - Language Learning App",
  //   description:
  //     "Created a language learning application optimized for a seamless learning experience in form of a game with microphone and 3D features using Assembly AI, threejs, etc.",
  // },
  {
    image: web8,
    link: "https://life-plus-webapp.vercel.app",
    title: "Life Plus Web App",
    description:
      "A comprehensive web application providing services for life coaching and personal development. Built with React and Tailwind CSS, offering a seamless user experience.",
  },
  {
    image: web6,
    link: "https://match-lesson.vercel.app",
    title: "Match Lesson Platform (WIP)",
    description:
      "An educational platform matching students with lessons in various subjects. Built to offer a personalized learning experience with a clean UI.",
  },
  {
    image: web2,
    link: "https://simbi-tech-web-app.vercel.app",
    title: "Simbi Tech Web App",
    description:
      "A web app to help techies learn, build and lead in tech. We provide tech and soft courses tailored to meet the needs of beginners and professionals to enhance their skills",
  },
  {
    image: web1,
    link: "https://store-clothing.vercel.app",
    title: "Online Clothing Store",
    description:
      "Developed an eCommerce store specializing in women's clothing. Features product browsing, cart management, and a smooth checkout process.",
  },
  {
    image: web7,
    link: "https://schoolbase-webapp.onrender.com",
    title: "School Base Web App",
    description:
      "A school management system that allows staff to handle scheduling, assignments, and student performance. Designed for simplicity and efficiency in educational institutions.",
  },
];

const Projects = () => {
  return (
    <section id="work" className="py-10 lg:py-16">
      <Hoc>
        <p className="smallHeading">my projects</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">recent projects</h3>
      </Hoc>

      <Hoc>
        <p className="xl:mt-16 mt-10">
          I have experience working on multiple projects, some of which I have highlighted below.
        </p>
      </Hoc>

      <div className="grid xl:grid-cols-2 grid-cols-1 gap-8 mt-8">
        {projects.map((project, index) => (
          <Hoc key={index}><a href={project.link} target="_blank" rel="noopener noreferrer" className="group relative block h-72 overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-600 focus-visible:outline-offset-2">
            <Image
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.75) 55%, rgba(0,0,0,0.15) 100%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
              <div>
                <h4
                  className="font-bold tracking-wide text-white"
                  style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
                >
                  {project.title}
                </h4>
                <p
                  className="text-md text-neutral-100 mt-1.5 max-w-md leading-relaxed opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:max-h-40 group-hover:mt-2"
                  style={{ textShadow: "0 1px 2px rgba(0,0,0,0.8)" }}
                >
                  {project.description}
                </p>
              </div>
              <FiArrowUpRight
                className="flex-shrink-0 text-white text-xl mb-1 opacity-0 -translate-x-1 translate-y-1 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                style={{ filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.8))" }}
              />
            </div>
          </a></Hoc>
        ))}
      </div>
    </section>
  );
};

export default Projects;