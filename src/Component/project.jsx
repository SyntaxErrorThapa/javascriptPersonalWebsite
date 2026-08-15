import React from "react";
import ProjectBlock from "./ProjectComponent/ProjectBlock";
import FeaturedProjectCard from "./ProjectComponent/FeaturedProjectCard";
import projects from "./ProjectComponent/projectsData";

const featuredProjects = projects.filter((p) => p.featured);

function Project() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Section heading with underline */}
        <div className="container mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-center text-custom-text-charcoal">
            Projects
          </h2>
          <div className="w-24 h-1 bg-custom-text-coolTeal mx-auto mt-4"></div>
        </div>

        {/* Featured Projects */}
        <div className="container mx-auto px-4 mb-16">
          <h3 className="text-2xl font-bold text-custom-text-charcoal mb-6 text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <FeaturedProjectCard key={project.slug} {...project} />
            ))}
          </div>
        </div>

        {/* Projects grid - simple but more refined */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectBlock
                key={project.slug}
                slug={project.slug}
                imagePath={project.imagePath}
                projectTitle={project.title}
                sk1={project.sk1}
                sk2={project.sk2}
                sk3={project.sk3}
                featured={project.featured}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
