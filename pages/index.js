"use client";

import Head from "next/head";
import { useState } from "react";
import Link from "next/link";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import PortfolioSlider from "../components/PortfolioSlider";
import Sidebar from "../components/Sidebar";

export default function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  return (
    <div className={`relative ${darkMode ? "dark" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-5 w-full min-h-screen">
        <div className="col-span-1">
          <div className="md:hidden">
            {showSidebar && <Sidebar show={showSidebar} setShow={setShowSidebar} />}
          </div>
          <div className="hidden md:block h-full">
            <Sidebar show={showSidebar} setShow={setShowSidebar} />
          </div>
        </div>

        <div className="col-span-4 overflow-hidden">
          <Head>
            <title>Oreoluwa Ruth Ajayi — Software Engineer</title>
            <meta
              name="description"
              content="Oreoluwa Ruth Ajayi — Software Engineer (React, Node.js, TypeScript)"
            />
            <link rel="icon" href="/airplay.svg" />
          </Head>
          <main className="bg-white dark:bg-gray-900 w-full px-[5%] text-black dark:text-white">
            <section className="min-h-screen px-4 flex flex-col">
              <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">OREOLUWA RUTH AJAYI</h1>
                <ul className="flex items-center gap-10">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl"
                    />
                  </li>
                  <li><a href="https://drive.google.com/file/d/12D4hgid9UHBdiDJgASeJu8IZqEcSCCjS/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-teal-600">Resume</a></li>
                </ul>
              </nav>

              <div className="flex-1 flex flex-col md:flex-row justify-center items-center text-center md:gap-20">
                <div>
                  <h2 className="text-3xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-4xl">
                    I am a
                  </h2>
                  <h3 className="font-extrabold lg:text-5xl md:text-4xl text-2xl tracking-[0.15em]">
                    Software Engineer & Mechanical Engineer.
                  </h3>
                  <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
                    I'm a full-stack developer with 4 years of experience building
                    production React, Node.js, and TypeScript applications. I've led a
                    4-person engineering team, shipped financial dashboards that cut load
                    times by 40%, and been ranked in the top 1% of JavaScript engineers
                    globally on Algora. My mechanical engineering background shapes how I
                    approach systems: rigorously, and built to last.
                  </p>

                  <div className="flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                    <Link href="https://twitter.com/oreoluwa_ruth">
                      <AiFillTwitterCircle size={40} />
                    </Link>
                    <Link href="https://www.github.com/oreoluwa212">
                      <AiFillGithub size={40} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/oreoluwaajayi/">
                      <AiFillLinkedin size={40} />
                    </Link>
                    <Link href="https://www.instagram.com/prin_cesstiwa/">
                      <AiFillInstagram size={40} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            <div className="px-6 md:px-0">
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </div>

            <section className="px-4 py-8">
              <h3 className="text-4xl py-1 dark:text-white">Portfolio</h3>
              <PortfolioSlider />
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}