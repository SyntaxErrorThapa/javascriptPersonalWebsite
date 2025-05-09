import React from "react";
import SkillBox from "./SkillBox";

function SkillsBlock(props) {
  return (
    <>
      <div className="text-xl flex flex-col mt-6 md:mt-10">
        <div className="text-xl md:text-2xl font-extrabold">{props.title}</div>
        <div className="flex flex-wrap gap-2 mt-2">
          {props.skill.map((value, index) => {
            return <SkillBox key={index} skillName={value} />;
          })}
        </div>
      </div>
    </>
  );
}

export default SkillsBlock;
