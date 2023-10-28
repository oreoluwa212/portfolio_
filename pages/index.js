import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";
import stack1 from '../public/Rectangle 4.png'
import stack2 from '../public/Rectangle 2.png'
import stack3 from '../public/Rectangle 7.png'
import stack4 from '../public/Rectangle 6.png'
import stack5 from '../public/Rectangle 1.png'
import stack6 from '../public/Rectangle 13.png'
import stack7 from '../public/Ellipse 14.png'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Portfolio website</title>
        <meta name="description" content="Oreoluwa Ruth" />
        <link rel="icon" href="../public/airplay.svg" />
      </Head>
      <main className=" bg-white px-[10%] dark:bg-gray-900 md:px-20 lg:px-[10%]">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">OREOLUWA RUTH AJAYI</h1>
            <ul className="flex items-center gap-10">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <p>
                  <Link href="https://docs.google.com/document/d/1qV_RJRg7P02FOBERw7PcIdcsx2STEDxa/edit?rtpof=true">
                    <a target="_blank" rel="noopener noreferrer">
                      Resume
                    </a>
                  </Link>
                </p>
              </li>
            </ul>
          </nav>
          <div className="text-center py-10 flex flex-row gap-20">
            <div>
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                OREOLUWA RUTH AJAYI
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                FullStack Developer.
              </h3>
              <p className="text-md py-5 leading-8 text-left text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
                I am a passionate and dedicated software developer with a deep
                love for crafting elegant and efficient solutions to complex
                problems. With 2 years of experience in the industry, I&apos;ve
                had the privilege of working on a wide range of projects. I help
                brands prioritize user experience through the combination of
                design, technology and programming. Simply put, I build
                webpages.
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
                <Link href="https://twitter.com/oreoluwa_ruth">
                  <a target="_blank" rel="noopener noreferrer">
                    <AiFillTwitterCircle size={40} />
                  </a>
                </Link>
                <Link href="https://www.github.com/oreoluwa212">
                  <a target="_blank" rel="noopener noreferrer">
                    <AiFillGithub size={40} />
                  </a>
                </Link>
                <Link href="https://www.linkedin.com/in/oreoluwaajayi/">
                  <a target="_blank" rel="noopener noreferrer">
                    <AiFillLinkedin size={40} />
                  </a>
                </Link>
                <Link href="https://www.instagram.com/prin_cesstiwa/">
                  <a target="_blank" rel="noopener noreferrer">
                    <AiFillInstagram size={40} />
                  </a>
                </Link>
              </div>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-[50px] w-100 h-100 relative overflow-hidden md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" alt="image" />
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-[40px] py-1 dark:text-white ">
              Services I offer
            </h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a fullstack developer
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              I create user-friendly, responsive, and visually appealing web applications. Debugging, testing, and optimizing code for performance and security
            </p>
          </div>
          <div className="lg:flex gap-20">
            <div className=" h-[350px] text-center shadow-2xl p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} alt="image" />
              <h3 className="font-bold text-[20px] text-teal-600 pt-8 pb-2  ">
                Beautiful Applications
              </h3>
              <p className="py-2">
                Creating elegant web apps suited for your needs following core design theory.
              </p>
            </div>
            <div className="text-center h-[350px] shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} alt="image" />
              <h3 className="font-bold text-[20px] text-teal-600 pt-8 pb-2">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let us make it a reality.
              </p>
            </div>
            <div className="h-[350px] text-center shadow-2xl p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={80} height={80} alt="image" />
              <h3 className="font-bold text-[20px] text-teal-600 pt-8 pb-2 ">
                Consulting
              </h3>
              <p className="py-2">
                Are you interested in feedback for your current project? I can give you tips and tricks to level it up.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div>
            <h3 className="text-[40px] py-1 dark:text-white ">Portfolio</h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a web developer,
            </p>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              I make meaningful and delightful digital products that create an
              equilibrium between user needs and business goals.
            </p>
          </div>
          <div className=" bg-[teal] w-[1300px] rounded-xl flex mt-10 flex-col align-center justify-center gap-20 py-20 lg:flex-row lg:flex-wrap">
            <div className="basis-1/4">
              <Link href={"https://store-clothing.vercel.app"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web1}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href={"https://postcode-alpha.vercel.app/"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web6}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href={"https://gadgets-store.vercel.app/"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web3}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href={"https://bis-payer.vercel.app/"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web4}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href={"https://group-l-team-task.vercel.app/"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web5}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
            <div className="basis-1/4">
              <Link href={"https://teeket-app.vercel.app/"}>
                <a target="_blank">
                  <Image
                    className="rounded-lg object-cover"
                    width={"100%"}
                    height={"100%"}
                    layout="responsive"
                    src={web2}
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
        {/* ------------- Footer -------------- */}
        <div className="px-[20%] mt-[40px]">
          <h3 className="dark:text-white text-center text-[26px]">
            I&apos;m currently looking to join a{" "}
            <span className="text-teal-600 text-[35px]">
              cross-functional team
            </span>{" "}
            that values improving people&apos;s lives through accessible design
          </h3>
          <div className="mt-10 justify-center align-center flex flex-row w-[400px] gap-8">
            <Image className="rounded-lg h-16" src={stack1} alt="image" />
            <Image className="rounded-lg h-16" src={stack2} alt="image" />
            <Image className="rounded-lg h-16" src={stack3} alt="image" />
            <Image className="rounded-lg h-16" src={stack4} alt="image" />
            <Image className="rounded-lg h-16" src={stack5} alt="image" />
            <Image className="rounded-lg h-16" src={stack6} alt="image" />
          </div>
        </div>
        <section className="py-20">
          <div>
            <h3 className="text-[40px] py-1 dark:text-white ">Contact</h3>
            <p className="text-lg py-2 leading-8 text-gray-800 dark:text-gray-200">
              I&apos;m currently looking to join a cross-functional team that
              values improving people&apos;s lives through accessible design. or
              have a project in mind? Let&apos;s connect.
            </p>
            <a
              className="text-teal-600 text-[18px]"
              href="mailto:oreoluwaajayyiruth@gmail.com"
            >
              oreoluwaajayyiruth@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
