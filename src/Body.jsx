import React from "react";
import NavBar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/project";
import Experience from "./Component/Experience";
import AnimatedSection from "./Component/AnimatedSection";
import Footer from "./Component/Footer";
import Image from "./Component/AboutComponent/Image";

function Body() {
  return (
    <>
      <NavBar />
      <div id="hero">
        <AnimatedSection>
          <Hero />
        </AnimatedSection>
      </div>
      <div id="about">
        <AnimatedSection>
          <About />
        </AnimatedSection>
      </div>
      <div id="project">
        <AnimatedSection>
          <Project />
        </AnimatedSection>
      </div>
      <div id="experience">
        <AnimatedSection>
          <Experience />
        </AnimatedSection>
      </div>
      <div id="gallery">
        <AnimatedSection>
          <Image />
        </AnimatedSection>
      </div>
    </>
  );
}

export default Body;
