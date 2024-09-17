import { useState } from "react";
import Hoc from "./Hoc";
import { FaBriefcase } from "react-icons/fa";

const ExperienceItem = ({ date, title, role, description, tasks, isDarkMode }) => {
  return (
    <li className={`relative py-5 px-4 rounded-lg mb-6 ml-6 transition-colors duration-300 ${isDarkMode ? "dark hover:bg-slate-800/50" : "hover:bg-teal hover:text-white"} ${isDarkMode ? "text-white" : ""}`}>
      <div className="absolute w-10 h-10 bg-blue-500 rounded-full mt-1.5 -left-11 border border-slate-200 flex justify-center items-center">
        <FaBriefcase className="text-slate-100" />
      </div>
      <time className="mb-1 text-sm font-medium leading-none">
        {date}
      </time>
      <h3 className="font-quicksand tracking-wider text-xl font-bold">
        {title}
      </h3>
      <h4 className="text-base font-semibold">
        {role}
      </h4>
      <p className="text-base font-semibold">
        {description}
      </p>
      <ul className="mt-2 list-disc list-inside">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </li>
  );
};


const Experience = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <section
      id="experience"
      className={`lg:py-16 py-10 ${isDarkMode ? 'bg-dark text-slate-100' : 'bg-light text-dark'}`}
    >
      <Hoc>
        <p className="smallHeading">Experience</p>
      </Hoc>

      <Hoc>
        <h3 className="heading">Work Experience</h3>
      </Hoc>

      <ol className="relative border-l border-slate-400 ml-4 mt-8">
        <Hoc>
          <ExperienceItem
            date="September 2023 - Present"
            title="Student Fellow @ Tech4Dev"
            role="Mentor"
            description="As a Student Fellow in the Women Techsters fellowship, I mentor fellow fellows and contribute to their development through guidance and support in project management, technical skills, and career planning. I assist teams in overcoming obstacles and achieving project goals."
            tasks={[
              "Guided teams in creating scalable web applications using React.js and Next.js.",
              "Provided technical support and feedback on code quality and project architecture.",
              "Facilitated workshops on best practices in React.js development and state management."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="October 2023"
            title="Tech Girls Advocacy Drive State Head"
            role="Leader"
            description="Led outreach programs to empower over 1000 girls through STEM advocacy, facilitated training sessions, and allocated tasks to maximize team efficiency. Fostered innovation and inclusivity within the Women Techsters Advocacy Team."
            tasks={[
              "Organized and led events to promote tech careers among young women.",
              "Coordinated with local schools to implement STEM workshops and coding bootcamps.",
              "Utilized React.js and Next.js to develop interactive web components for outreach materials."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="March 2023 - September 2023"
            title="Software Engineer Intern @ alx_africa"
            role="Intern"
            description="Gained hands-on experience with JavaScript and peer mentoring. Applied UX design principles and contributed to team projects with a focus on front-end coding and effective communication."
            tasks={[
              "Built and maintained features for web applications using React.js.",
              "Participated in code reviews and contributed to improving codebase quality.",
              "Worked on integrating APIs and developing dynamic user interfaces with Next.js."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="May 2023 - August 2023"
            title="Frontend Mentee @ Wetech"
            role="Mentee"
            description="Focused on creating intuitive user interfaces and was recognized as the Best Project Pitch Winner. Developed front-end skills with a strong emphasis on UX design and coding."
            tasks={[
              "Developed responsive UI components using React.js and Tailwind CSS.",
              "Applied UX principles to enhance user experience and interface design.",
              "Presented and pitched project ideas, demonstrating effective communication skills."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="May 2023 - June 2023"
            title="Student Software Developer @ Tech4Dev"
            role="Developer"
            description="Participated in a transformative bootcamp that enhanced my software development skills through hands-on sessions and practical knowledge in HTML and Vue.js."
            tasks={[
              "Built and deployed projects using Vue.js, focusing on creating interactive and dynamic web applications.",
              "Collaborated with peers to develop software solutions and refine coding practices.",
              "Enhanced problem-solving skills through intensive coding exercises and real-world projects."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="March 2023 - June 2023"
            title="React Developer Intern @ HerTechTrail"
            role="Intern"
            description="Contributed to an event ticketing project, applying React.js and Tailwind CSS. Worked in a collaborative environment to develop and enhance application features."
            tasks={[
              "Developed and maintained features for a ticketing system using React.js.",
              "Collaborated with the team to ensure efficient and scalable front-end development.",
              "Utilized Tailwind CSS for styling and implementing responsive design principles."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
      </ol>
    </section>
  );
};

export default Experience;
