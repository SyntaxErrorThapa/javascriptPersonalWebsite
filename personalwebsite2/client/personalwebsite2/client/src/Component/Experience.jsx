import React from "react";
import RoughHighlight from "./RoughHighlight";

function ExperienceTimeline() {
  const experiences = [
    {
      company: (
        <>
          {/* <RoughHighlight typeBox="box" color="#2E2E2E" strokeWidth={2}> */}
          SAS
          {/* </RoughHighlight> */}
        </>
      ),
      role: "Reliability Engineer for IoT Systems",
      location: "Raleigh, NC",
      duration: "May 2025",
      description: [
        <>[Upcoming]</>
      ],
    },
    {
      company: (
        <>
          {/* <RoughHighlight typeBox="box" color="#2E2E2E" strokeWidth={2}> */}
            Yoon's Lab
          {/* </RoughHighlight> */}
        </>
      ),
      role: "Undergraduate Research On Self Driving Car",
      location: "Raleigh, NC",
      duration: "August 2023 - Present",
      description: [
        <>Co-authored a research paper, "Q-Loc: Visual Cue-Based Ground Vehicle Localization Using LSTM" submitted to ICRA 2025, and developed a neural network model to improve GPS accuracy using varied GPS data.</>,
        "Trained a YOLO-based model for real-time path detection and implemented an autonomous navigation algorithm \
        to keep the vehicle on path while avoiding pedestrians and obstacles over 5 miles.",
        // <>
        //   Currently working on{" "}
        //   <RoughHighlight typeBox="underline" color="#2E2E2E" strokeWidth={2}>
        //     publishing a paper focused on localization techniques.
        //   </RoughHighlight>
        // </>,
        "Employed LiDAR technology for simultaneous localization and mapping (SLAM).",
      ],
    },  
    {
      company: (
        <>
            Engineering Information Technology at North Carolina State University(ITECS)
        </>
      ),
      role: "Full Stack",
      location: "Raleigh, NC",
      duration: "August 2024 - Present",
      description: [
        "Designed and implemented full-stack applications using PHP, Vue.js, and HTML5/CSS3 to deliver cross-platform \
        functionality, ensuring seamless experience for over 10,000 students on the Engineering Online platform.",
        <>
          Managed and resolved a critical bug in the Engineering Online backend that prevented instructors from being displayed as assignable options, ensuring seamless functionality for over 1,000 staff members.
        </>,
        "Spearheaded the successful rollback of a failed post-merge PR by coordinating with the on-call team, gaining \
        valuable insights into effective communication and problem-solving in high-stakes situations.",
      ],
    },
  ];

  return (
    <div className="relative  w-screen mx-auto bg-custom-text-coolTeal bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray">
      <div className="container flex flex-col max-w-screen-lg mx-auto py-16">
        <div className="text-4xl font-extrabold tracking-wide text-center mb-10">
          <RoughHighlight>my experience</RoughHighlight>
        </div>
        
          {experiences.map((exp, index) => (
            <div className="mb-10 ml-6" key={index}>
              
              <div className="text-2xl font-semibold">{exp.company}</div>
              <div className="text-lg text-gray-600">
                {exp.role} | {exp.location} | {exp.duration}
              </div>
              <ul className="list-disc pl-5 mt-2 text-gray-800">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              {exp.link && (
                <a
                  href={exp.link}
                  className="text-custom-text-navyBlue underline mt-2 inline-block"
                >
                  View the open-source project my work was added to{" "}
                  {exp.linkText}.
                </a>
              )}
            </div>
          ))}
        
      </div>
    </div>
  );
}

export default ExperienceTimeline;
