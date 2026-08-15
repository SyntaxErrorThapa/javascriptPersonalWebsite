import React from "react";
import { Link } from "react-router-dom";
import SkillBox from "../SkillsComponent/SkillBox";

function ProjectBlock({ slug, imagePath, projectTitle, sk1, sk2, sk3, featured = false }) {
  return (
    <Link
      to={`/projects/${slug}`}
      className={`block bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
        featured ? "border-l-4 border-custom-text-coolTeal" : ""
      }`}
    >
      {/* Project Image */}
      <div className="h-48 overflow-hidden relative">
        {imagePath ? (
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={`${process.env.PUBLIC_URL}/${imagePath}`}
            alt={projectTitle}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-custom-text-coolTeal to-custom-text-navyBlue text-white text-sm font-semibold px-4 text-center">
            {projectTitle}
          </div>
        )}
      </div>

      {/* Project Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 text-center">
          <h3 className="text-xl font-bold text-custom-text-charcoal">{projectTitle}</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <SkillBox skillName={sk1} />
          <SkillBox skillName={sk2} />
          <SkillBox skillName={sk3} />
        </div>
      </div>
    </Link>
  );
}

export default ProjectBlock;
