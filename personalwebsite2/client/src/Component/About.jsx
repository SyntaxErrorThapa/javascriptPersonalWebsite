import React from "react";
import Skills from "./SkillsComponent/Skills";
import AboutComponent from "./AboutComponent/AboutComponent";

function About() {
  return (
    <>
      <div className="relative w-screen mx-auto bg-custom-text-coolTeal min-h-screen px-4 text-custom-text-darkGray">
        {/* Container */}
        <div className="container flex flex-row max-w-screen-lg mx-auto py-16">
          {/* About Component*/}
          <AboutComponent />

          <div className="mx-8"></div>

          {/* Skill */}
          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;
