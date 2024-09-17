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
import Hero from "../components/Hero";
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
        {/* Sidebar */}
        <div className="col-span-1">
          <span
            className={`${
              isTouched ? "hidden" : "block md:hidden"
            } fixed left-10 top-5 animate-ping bg-gray-400 h-[10px] w-[10px] rounded-full z-0`}
          ></span>
          <RxHamburgerMenu
            className="fixed text-slate-300 md:hidden text-4xl left-4 top-4 cursor-pointer z-20"
            onClick={() => {
              setShowSidebar(true);
              setIsTouched(true);
            }}
          />
          <div
            className={`h-screen w-screen bg-black opacity-40 blur-lg fixed z-10 ${
              showSidebar ? "block" : "hidden"
            }`}
            onClick={() => setShowSidebar(false)}
          ></div>
          <div className="md:hidden">
            {showSidebar && (
              <Sidebar show={showSidebar} setShow={setShowSidebar} />
            )}
          </div>
          <div className="hidden md:block">
            <Sidebar show={showSidebar} setShow={setShowSidebar} />
          </div>
        </div>

        <div className="col-span-4 overflow-hidden">
          <Head>
            <title>Portfolio Website</title>
            <meta name="description" content="Oreoluwa Ruth" />
            <link rel="icon" href="/airplay.svg" />
          </Head>
          <main className="bg-white dark:bg-gray-900 w-full px-[5%] text-black dark:text-white">
            <section className="min-h-screen px-4">
              <nav className="py-10 mb-12 flex justify-between dark:text-white">
                <h1 className="font-burtons text-xl">OREOLUWA RUTH AJAYI</h1>
                <ul className="flex items-center gap-10">
                  <li>
                    <BsFillMoonStarsFill
                      onClick={() => setDarkMode(!darkMode)}
                      className="cursor-pointer text-2xl"
                    />
                  </li>
                  <li>
                    <a
                      href="https://docs.google.com/document/d/1MtiyDNLKHo-N4UNkuL-RZqN4Iv4rh49PBXijydEzUpg/edit"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-teal-600"
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </nav>

              <div className="text-center py-10 flex flex-col md:flex-row md:gap-20 items-center">
                <div>
                  <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                    OREOLUWA RUTH AJAYI
                  </h2>
                  <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                    Product Designer, Mechanical Engineer & FullStack Developer.
                  </h3>
                  <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
                    I am a passionate and dedicated software developer with a
                    deep love for crafting elegant and efficient solutions to
                    complex problems. With 3 years of experience in the
                    industry, I help brands prioritize user experience through
                    the combination of design, technology and programming.
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

            {/* Main section with fixed grid structure */}
            <div className="px-6 md:px-0">
              <Hero />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </div>

            {/* Portfolio Section */}
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
