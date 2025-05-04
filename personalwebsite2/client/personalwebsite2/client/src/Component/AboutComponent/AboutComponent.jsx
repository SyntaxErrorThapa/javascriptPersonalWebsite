import React from "react";
import AboutBlock from "./AboutBlock";
import RoughHighlight from "../RoughHighlight";

// Define the content with a mix of text and components
const aboutBlock = [
  {
    id: 1,
    content: (
      <>
        I'm a student in NCSU's class of 2025, pursuing a major in{" "}
        <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={1}>
          Computer Science
        </RoughHighlight>{" "}
        and a minor in{" "}
        <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={1}>
          Mathematics.
        </RoughHighlight>
        I have been studying, learning, making small projects since high school
        and am comfortable coding in Java, Python, C++, HTML, CSS, Javascript,
        React, and Typescript.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        When I'm not in classes, I'm often doing research or working out. I am
        passionate about creating software products that can positively impact
        people's lives in various ways.
      </>
    ),
  },
  {
    id: 3,
    content: (
      <>
        So far, I've hosted two web applications that I built from the ground
        up, handling everything from coding and testing to production and
        deployment on AWS. I love the idea of creating something that others can
        use repeatedly.
      </>
    ),
  },
  {
    id: 4,
    content: (
      <>
        Currently, I am engaged in undergraduate research under the guidance of
        Associate Professor Dr. Man-Ki Yoon on an exciting project titled
        <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={1}> PROJECT OVAL</RoughHighlight>. Collaborating with two fellow undergraduate students and
        with Dr. Yoon's mentorship, we successfully authored a research paper
        titled "Q-Loc: Visual Cue-Based Ground Vehicle Localization Using LSTM."
      </>
    ),
  },
  {
    id: 5,
    content: (
      <>
        This paper has been submitted to the prestigious <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={1}>ICRA 2025</RoughHighlight> conference
        for consideration. Additionally, we submitted the research findings to
        the North Carolina Department of Transportation (NCDOT) and received
        official confirmation of its approval. This work represents a step
        forward in advancing localization techniques for ground vehicles using
        machine learning methodologies.
      </>
    ),
  },
];

function AboutComponent() {
  return (
    <div id="about" className="w-1/2 flex flex-col">
      <div className="text-4xl font-extrabold tracking-widest">
        <RoughHighlight>about</RoughHighlight>
      </div>
      <div className="text-2xl font-extrabold">ncsu '25, student</div>

      {aboutBlock.map((block) => (
        <AboutBlock key={block.id} text={block.content} />
      ))}
    </div>
  );
}

export default AboutComponent;
