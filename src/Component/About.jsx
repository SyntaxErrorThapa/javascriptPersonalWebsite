import React from "react";
import Skills from "./SkillsComponent/Skills";
import AboutComponent from "./AboutComponent/AboutComponent";

function About() {
  return (
    <>
      <div className="relative w-screen mx-auto bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray">
        <div className="container flex flex-col md:flex-row max-w-screen-lg mx-auto py-8 md:py-16">
          <AboutComponent />

          <div className="mx-0 my-10 md:mx-8 md:my-0"></div>

          <Skills />
        </div>
      </div>
    </>
  );
}

export default About;
