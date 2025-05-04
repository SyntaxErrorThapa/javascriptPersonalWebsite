import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  const strings = ["Full Stack Development.", "Machine Learning.", "Blockchain", "& Philosophy"];
  return (
    <>
      <div className="relative container mx-auto flex flex-row justify-between items-center min-h-screen px-4">
        {/* Content Section */}
        <div className="w-3/6 h-4/6 flex justify-center items-center">
          <div className="flex flex-col space-y-4">
            <h1 className="text-3xl font-bold text-custom-text-charcoal">
              Hi! I am
            </h1>
            <h1 className="text-4xl font-extrabold text-custom-text-coolTeal">
              Pratik Thapa
            </h1>
            <h1 className="text-xl text-custom-text-charcoal">
              I'm a student with an interest in{" "}
              <span className="inline">
                <Typewriter
                  options={{
                    strings: strings,
                    autoStart: true,
                    loop: true,
                    wrapperClassName: "text-custom-text-coolTeal inline",
                  }}
                />
              </span>
            </h1>
          </div>
        </div>

        {/* Gif of Programmer */}
        <div className="w-3/6 h-4/6 flex justify-center items-center">
          <img
            src="programmer.gif"
            alt="Programmer working"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
