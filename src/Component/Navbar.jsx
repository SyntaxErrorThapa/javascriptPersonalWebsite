import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";

function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <nav className="navbar bg-custom-text-coolTeal text-custom-text-darkGray">
      <div className="container mx-auto flex justify-center items-center px-4 py-2">
        <div className="flex space-x-14 tracking-widest items-center">
          <Link
            to="/"
            smooth={true}
            duration={500}
            className="text-lg font-bold"
            onMouseEnter={() => handleMouseEnter("home")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "home"}
              color="#2E2E2E"
              animationDuration={1000}
              strokeWidth={3}
            >
              Home
            </RoughNotation>
          </Link>
          
          <Link
            to="/about"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "about"}
              color="#2E2E2E"
              animationDuration={1000}
              strokeWidth={3}
            >
              About
            </RoughNotation>
          </Link>

          <Link
            to="/gallery"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("gallery")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "gallery"}
              color="#2E2E2E"
              animationDuration={1000}
              strokeWidth={3}
            >
              Visuals
            </RoughNotation>
          </Link>

          <Link
            to="/projects"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("project")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "project"}
              color="#2E2E2E"
              animationDuration={1000}
              strokeWidth={3}
            >
              Projects
            </RoughNotation>
          </Link>

          <Link
            to="/experience"
            className="text-lg font-bold"
            smooth={true}
            duration={500}
            onMouseEnter={() => handleMouseEnter("experience")}
            onMouseLeave={handleMouseLeave}
          >
            <RoughNotation
              type="underline"
              show={hoveredLink === "experience"}
              color="#2E2E2E"
              animationDuration={1000}
              strokeWidth={3}
            >
              Experience
            </RoughNotation>
          </Link>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
