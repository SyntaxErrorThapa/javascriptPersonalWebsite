import React from "react";

function SkillBox(props) {
  return (
    <span className="inline-block bg-custom-text-coolTeal text-white text-sm font-bold py-2 px-4 rounded-full shadow-md hover:bg-custom-text-darkGray transition duration-300 ease-in-out mb-2 mr-2">
      {props.skillName}
    </span>
  );
}

export default SkillBox;