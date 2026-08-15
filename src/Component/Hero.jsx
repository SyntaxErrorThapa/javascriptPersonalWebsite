import React from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Hero() {
  const strings = [
    "Full Stack Development.",
    "Machine Learning.",
    "Blockchain",
    "& Philosophy",
  ];
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative container mx-auto flex flex-col-reverse md:flex-row justify-center items-center min-h-[80vh] md:min-h-screen px-4 py-8"
    >
      {/* Content Section */}
      <div className="w-full md:w-3/6 flex justify-center items-center mt-6 md:mt-0">
        <div className="flex flex-col space-y-3 md:space-y-4 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold text-custom-text-charcoal">
            Hi! I am
          </h1>
          <h1 className="text-3xl md:text-4xl font-extrabold text-custom-text-coolTeal">
            Pratik Thapa
          </h1>
          <h1 className="text-lg md:text-xl text-custom-text-charcoal">
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

      {/* Gif of Programmer*/}
      <div className="w-full md:w-3/6 mb-6 md:mb-0 flex justify-center items-center">
        <img
          src={`${process.env.PUBLIC_URL}/programmer.gif`}
          alt="Programmer working"
          className="w-4/5 md:w-full max-h-[200px] md:max-h-none object-cover rounded-lg"
        />
      </div>
    </motion.div>
  );
}

export default Hero;
