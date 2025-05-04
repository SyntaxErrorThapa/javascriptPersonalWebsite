import React from "react";
import AboutBlock from "./AboutBlock";
import RoughHighlight from "../RoughHighlight";

// Define the content with a mix of text and components
const aboutBlock = [
  {
    id: 1,
    content: (
      <>
        Student @NCSU studying Computer Science with a minor in Mathematics, on
        a track to graduate with both BS/MS in 2026.
      </>
    ),
  },
  {
    id: 2,
    content: (
      <>
        Diving into passion, I believe art is exquisite. To me and many others,
        life is simply a blank canvas where artists gets to paint. And I painted
        a section of mine with computer science fierly driven by a lush desire
        for greatness.
      </>
    ),
  },
  
];

function AboutComponent() {
  return (
    <div id="about" className="w-1/2 flex flex-col">
      <div className="text-4xl font-extrabold tracking-widest">About</div>
      <div className="text-2xl font-extrabold">NCSU '26, Student</div>

      {aboutBlock.map((block) => (
        <AboutBlock key={block.id} text={block.content} />
      ))}
    </div>
  );
}

export default AboutComponent;
