import React from "react";

function DisplayHTMLContent({ content }) {
  return (
    <div
      className="text-base leading-relaxed text-custom-text-softBlack mb-4"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default DisplayHTMLContent;
