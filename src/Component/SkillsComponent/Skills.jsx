import React from "react";
import SkillsBlock from "./SkillsBlock";
import RoughHighlight from "../RoughHighlight";

const languages = [
  "Python",
  "Java",
  "C/C++",
  "JavaScript",
  "Bash",
  "TypeScript",
  "HTML",
];
const front_end_development = [
  "React",
  "Bootstrap",
  "Tailwind",
  "Sass",
  "CSS",
  "HTML",
];
const back_end_development = ["Node.js", "Express", "Flask"];
const machine_learning_framework = [
  "TensorFlow",
  "OpenCV",
  "PyTorch",
  "Pandas",
  "scikit-learn",
];
const database = ["MySQL", "PostgreSQL", "SQLite"];
const devops = ["AWS", "Bash", "Amazon EC2", "Amazon Lightsail"];
const others = ["Linux", "Git", "Arduino"];

function Skills() {
  return (
    <>
      {/* Skills section */}
      <div id="skill" className="justify-center w-1/2 flex flex-col">
        <div className="text-4xl font-extrabold tracking-widest">
          Skills
        </div>

        {/* Languages */}
        <SkillsBlock title="Languages" skill={languages} />

        {/* Front-end Development */}
        <SkillsBlock
          title="Front End Development"
          skill={front_end_development}
        />

        {/* Back-end Development */}
        <SkillsBlock
          title="Back End Development"
          skill={back_end_development}
        />

        {/* Machine Learning Framework */}
        <SkillsBlock
          title="Machine Learning Framework"
          skill={machine_learning_framework}
        />

        {/* Database Management */}
        <SkillsBlock title="Database" skill={database} />

        {/* Devops */}
        <SkillsBlock title="Devops" skill={devops} />

        {/* Others */}
        <SkillsBlock title="Others" skill={others} />
      </div>
    </>
  );
}

export default Skills;
