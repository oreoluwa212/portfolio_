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
            date="May 2025 - December 2025"
            title="Software Engineer @ Qurexa"
            role="Full-Stack Developer"
            description="Full-stack role delivering a pharmacy application from architecture through to shipped product."
            tasks={[
              "Formed and led a 4-person team to design and ship a pharmacy application end to end.",
              "Built full-stack features using React, Node.js, TypeScript, and MongoDB.",
              "Made architecture and technical direction decisions across the frontend and backend."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="August 2025 - November 2025"
            title="PR Reviewer (Contract) @ magic.dev"
            role="Code Reviewer"
            description="Contract role auditing AI-generated code for a fast-moving dev tooling team."
            tasks={[
              "Reviewed AI-generated pull requests for correctness, readability, and edge-case handling.",
              "Flagged systematic errors and recurring failure patterns for the team.",
              "Evaluated code against best-practice standards across varied codebases."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="May 2024 - February 2025"
            title="Frontend Web Developer @ Coast Engineering Firm"
            role="Frontend Developer"
            description="Frontend role focused on data-heavy financial tooling for internal teams."
            tasks={[
              "Built responsive financial-data dashboards using React, TypeScript, and REST APIs.",
              "Implemented data visualization components for complex financial datasets.",
              "Contributed to a ~40% improvement in application load times."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="September 2023 - October 2024"
            title="Student Fellow @ Women Techsters Fellowship"
            role="Mentor"
            description="Fellowship role supporting fellow developers through hands-on mentorship."
            tasks={[
              "Guided teams in building scalable web applications using React.js and Next.js.",
              "Provided technical feedback on code quality and project architecture.",
              "Facilitated workshops on React.js development and state management best practices."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
        <Hoc>
          <ExperienceItem
            date="October 2023"
            title="Tech Girls Advocacy Drive State Head"
            role="STEM Advocacy Lead, Oyo State"
            description="State-level leadership role expanding STEM access across Oyo State."
            tasks={[
              "Led a team of volunteers to organize STEM workshops reaching 1,000+ girls in Oyo State.",
              "Facilitated training sessions on communication and leadership.",
              "Coordinated outreach events promoting tech careers among young women."
            ]}
            isDarkMode={isDarkMode}
          />
        </Hoc>
      </ol>
    </section>
  );
};

export default Experience;