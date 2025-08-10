import React from "react";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web9 from "../public/web9.png";
import web4 from "../public/web4.png";
import web3 from "../public/web3.png";
import web6 from "../public/web6.PNG";
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
  {
    image: web9,
    link: "https://delve.fun",
    title: "Delve - Language Learning App",
    description:
      "Created a language learning application optimized for a seamless learning experience in form of a game with microphone and 3D features using Assembly AI, threejs, etc.",
  },
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
          <Hoc key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shadow-md shadow-slate-800 h-full flex flex-col"
            >
              <Image
                className="object-cover w-full h-64"
                src={project.image}
                alt={project.title}
              />
              <div className="p-4 flex flex-col justify-between grow">
                <div>
                  <h4 className="font-bold tracking-wide">{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </div>
            </a>
          </Hoc>
        ))}
      </div>
    </section>
  );
};

export default Projects;
