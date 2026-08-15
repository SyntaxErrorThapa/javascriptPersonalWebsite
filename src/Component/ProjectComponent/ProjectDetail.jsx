import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import SkillBox from "../SkillsComponent/SkillBox";
import DisplayHTMLContent from "../DisplayHtmlContent";
import Timeline from "./Timeline";
import MediaGallery from "./MediaGallery";
import InlineMedia from "./InlineMedia";
import Lightbox from "./Lightbox";
import projects from "./projectsData";

function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (!project) {
    return (
      <div className="text-center py-16">
        <p className="mb-4">Project not found</p>
        <Link to="/projects" className="text-custom-text-coolTeal underline">
          ← Back to Projects
        </Link>
      </div>
    );
  }

  const {
    imagePath,
    title,
    sk1,
    sk2,
    sk3,
    description,
    content,
    githubLink,
    websiteLink,
    timeline,
    media,
    documents,
  } = project;

  // content blocks let media appear inline with the text; flatten them into
  // one list so the lightbox can page through everything in reading order.
  const flatMedia = content
    ? content
        .filter((block) => block.type === "media")
        .flatMap((block) => block.items)
    : [];

  let mediaCursor = 0;

  return (
    <>
      {/* Hero Banner */}
      <div className="w-full h-72 md:h-[40vh] lg:h-[45vh] relative overflow-hidden">
        {imagePath ? (
          <img
            className="w-full h-full object-cover opacity-90"
            src={`${process.env.PUBLIC_URL}/${imagePath}`}
            alt={title}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-custom-text-coolTeal to-custom-text-navyBlue" />
        )}
        <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40 px-4">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">{title}</h1>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            to="/projects"
            className="inline-block text-custom-text-coolTeal hover:text-teal-700 transition-colors mb-6"
          >
            ← Back to Projects
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            <SkillBox skillName={sk1} />
            <SkillBox skillName={sk2} />
            <SkillBox skillName={sk3} />
          </div>

          <div className="prose prose-lg max-w-none mb-8">
            {content ? (
              content.map((block, index) => {
                if (block.type === "media") {
                  const startIndex = mediaCursor;
                  mediaCursor += block.items.length;
                  return (
                    <InlineMedia
                      key={index}
                      items={block.items}
                      startIndex={startIndex}
                      onSelect={setSelectedIndex}
                    />
                  );
                }
                return <DisplayHTMLContent key={index} content={block.html} />;
              })
            ) : (
              <DisplayHTMLContent content={description} />
            )}
          </div>

          {documents && documents.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-6">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={`${process.env.PUBLIC_URL}/${encodeURI(doc.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-custom-text-navyBlue hover:bg-blue-900 text-white rounded-md transition-colors duration-200"
                >
                  <PictureAsPdfIcon />
                  <span>{doc.label}</span>
                </a>
              ))}
            </div>
          )}

          <div className="flex flex-wrap gap-4 mb-12">
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

          {timeline && timeline.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-custom-text-charcoal mb-6">
                Timeline
              </h2>
              <Timeline events={timeline} />
            </div>
          )}

          {!content && media && media.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-custom-text-charcoal mb-6">
                Media
              </h2>
              <MediaGallery media={media} />
            </div>
          )}
        </div>
      </div>

      {content && (
        <Lightbox
          media={flatMedia}
          selectedIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNext={() =>
            setSelectedIndex((prev) => (prev + 1) % flatMedia.length)
          }
          onPrev={() =>
            setSelectedIndex(
              (prev) => (prev - 1 + flatMedia.length) % flatMedia.length
            )
          }
        />
      )}
    </>
  );
}

export default ProjectDetail;
