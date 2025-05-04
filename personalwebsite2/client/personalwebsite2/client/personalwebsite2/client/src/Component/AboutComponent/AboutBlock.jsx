import React from "react";
import DisplayHTMLContent from "../DisplayHtmlContent";

function AboutBlock(props) {
  return (
    <>
      <div className="text-l mt-5 tracking-wide">
        <br />
        {props.text}
      </div>
    </>
  );
}

export default AboutBlock;
