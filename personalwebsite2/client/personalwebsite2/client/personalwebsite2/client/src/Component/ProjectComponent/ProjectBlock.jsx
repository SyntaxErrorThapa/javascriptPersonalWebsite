import React, { useState } from "react";
import SkillBox from "../SkillsComponent/SkillBox";
import Modal from "./Modal";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import DisplayHTMLContent from "../DisplayHtmlContent";

function ProjectBlock({
  imagePath,
  projectTitle,
  sk1,
  sk2,
  sk3,
  projectDescription,
  githubLink,
  websiteLink,
  featured = false,
}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {/* Project Card */}
      <div
        className={`bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer ${
          featured ? "border-l-4 border-custom-text-coolTeal" : ""
        }`}
        onClick={toggleModal}
      >
        {/* Project Image */}
        <div className="h-48 overflow-hidden relative">
          <img
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            src={imagePath}
            alt={projectTitle}
          />
        </div>

        {/* Project Content */}
        <div className="p-6 flex-grow flex flex-col">
          {/* Project Title */}
          <div className="mb-3 text-center">
            <h3 className="text-xl font-bold text-custom-text-charcoal">{projectTitle}</h3>
          </div>

          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <SkillBox skillName={sk1} />
            <SkillBox skillName={sk2} />
            <SkillBox skillName={sk3} />
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={toggleModal} title={projectTitle}>
        <div className="flex flex-col space-y-6">
          {/* Image and Description Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Image */}
            <div className="flex items-center justify-center">
              <div className="w-full rounded-lg overflow-hidden shadow-md">
                <img
                  className="w-full object-cover"
                  src={imagePath}
                  alt={projectTitle}
                />
              </div>
            </div>

            {/* Description */}
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-50 rounded-lg p-4 max-h-[400px] overflow-y-auto">
                <DisplayHTMLContent content={projectDescription} />
              </div>
              
              {/* Links */}
              <div className="flex flex-wrap gap-4 justify-center mt-4">
                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md transition-colors duration-200"
                  >
                    <GitHubIcon />
                    <span>GitHub</span>
                  </a>
                )}
                {websiteLink && (
                  <a
                    href={websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-custom-text-coolTeal hover:bg-teal-600 text-white rounded-md transition-colors duration-200"
                  >
                    <LanguageIcon />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default ProjectBlock;