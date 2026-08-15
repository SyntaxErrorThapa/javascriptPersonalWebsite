import React from "react";
import RoughHighlight from "./RoughHighlight";

function ExperienceTimeline() {
  const experiences = [
    {
      company: (
        <>
          {/* <RoughHighlight typeBox="box" color="#2E2E2E" strokeWidth={2}> */}
          SAS (Year-Round)
          {/* </RoughHighlight> */}
        </>
      ),
      role: "Reliability Engineer for IoT Systems",
      location: "Raleigh, NC",
      duration: "May 2025",
      description: [
      <>
        Fine-tuned DETR with DINO backbone for richer feature extraction, boosting worker safety in industrial IoT.
      </>, 
      <>
        Raised F1 to 91% and accuracy to 88% with optimized augmentation, outperforming SAS model for client.
      </>,
      <>
        Deployed RFDETR (ONNX) model in SAS ESP, driving Release 2 adoption, to increase revenue by 15%.
      </>,  
      <>
        Collaborated with engineers to integrate model into a real-time analytics pipeline for factory floor insights.
      </>
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
      role: "Autonomous Systems Research Intern",
      location: "Raleigh, NC",
      duration: "August 2023 - May 2026",
      description: [
        <>
          Presented framework at the NCDOT Research & Innovation Symposium
          2025 and at RIoT 2025.
        </>,
        <>
          Leveraged DINOv2 for feature extraction and built an
          attention-based segmentation model to detect traversable paths.
        </>,
        "Trained a YOLO-based model for real-time path and pedestrian detection with 82% accuracy.",
      ],
    },
    {
      company: (
        <>
          {/* <RoughHighlight typeBox="box" color="#2E2E2E" strokeWidth={2}> */}
          UNC-Health Research
          {/* </RoughHighlight> */}
        </>
      ),
      role: "Software Developer For Scoliosis Treatment",
      location: "Raleigh, NC",
      duration: "January 2025 - Present",
      description: [
        <>
          Conducted research in Dr. Gregory Buckner’s lab at NC State in
          collaboration with UNC Children’s Hospital to redesign the Halo
          Gravity Traction system for pediatric scoliosis treatment.
        </>,
        <>
          Collaborated with interdisciplinary teams (MAE, Biomedical, ECE, CS)
          to integrate diverse engineering perspectives.
        </>,
        <>
          Co-authored a research paper, ”Automated Halo Gravity Traction for Scoliosis Treatment"
        </>,
        <>
          Refactored system with ROS2, leveraging 4-core arch to boost CPU utilization by 35% and improve modularity.
        </>,
        <>
          Integrated Raspberry Pi and AWS Lambda to trigger event-based logging to RDS, enabling real-time IoT tracking.
        </>,
      ],
    },
    {
      company: (
        <>
          Engineering Information Technology at North Carolina State
          University(ITECS) (Year Round)
        </>
      ),
      role: "Full Stack",
      location: "Raleigh, NC",
      duration: "August 2024 - Present",
      description: [
        "Designed and implemented full-stack applications using PHP, Vue.js, and HTML5/CSS3 to deliver cross-platform \
        functionality, ensuring seamless experience for over 10,000 students on the Engineering Online platform.",
        <>
          Managed and resolved a critical bug in the Engineering Online backend
          that prevented instructors from being displayed as assignable options,
          ensuring seamless functionality for over 1,000 staff members.
        </>,
        "Spearheaded the successful rollback of a failed post-merge PR by coordinating with the on-call team, gaining \
        valuable insights into effective communication and problem-solving in high-stakes situations.",
      ],
    },
  ];

  return (
    <div className="relative  w-screen mx-auto bg-custom-bg-image min-h-screen px-4 text-custom-text-darkGray">
      <div className="container flex flex-col max-w-screen-lg mx-auto py-16">
        <div className="text-4xl font-extrabold tracking-wide text-center mb-10">
          Experience
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
                View the open-source project my work was added to {exp.linkText}
                .
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceTimeline;
