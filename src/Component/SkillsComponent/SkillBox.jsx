import React from "react";

function SkillBox(props) {
  return (
    <button className="bg-custom-text-coolTeal text-white text-sm font-bold py-2 px-4 rounded-full shadow-md hover:bg-custom-text-darkGray transition duration-300 ease-in-out">
      {props.skillName}
    </button>
  );
}

export default SkillBox;
