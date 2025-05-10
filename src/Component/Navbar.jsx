import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RoughNotation } from "react-rough-notation";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

function NavBar() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar bg-custom-text-coolTeal text-custom-text-darkGray">
      <div className="container mx-auto px-4 py-2">
        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center">
          <div className="flex space-x-14 tracking-widest items-center">
            <Link
              to="/"
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

            <Link
              to="/blog"
              className="text-lg font-bold"
              onMouseEnter={() => handleMouseEnter("blog")}
              onMouseLeave={handleMouseLeave}
            >
              <RoughNotation
                type="underline"
                show={hoveredLink === "blog"}
                color="#2E2E2E"
                animationDuration={1000}
                strokeWidth={3}
              >
                Blog
              </RoughNotation>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex justify-between items-center">
          {/* Mobile Logo/Title */}
          <Link to="/" className="text-xl font-bold" onClick={closeMenu}>
            Pratik Thapa
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="text-custom-text-darkGray p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <CloseIcon style={{ fontSize: 28 }} />
            ) : (
              <MenuIcon style={{ fontSize: 28 }} />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-white rounded-lg shadow-lg">
            <Link
              to="/"
              className="block py-3 px-4 text-center font-bold hover:bg-gray-100"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block py-3 px-4 text-center font-bold hover:bg-gray-100"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="/gallery"
              className="block py-3 px-4 text-center font-bold hover:bg-gray-100"
              onClick={closeMenu}
            >
              Visuals
            </Link>
            <Link
              to="/projects"
              className="block py-3 px-4 text-center font-bold hover:bg-gray-100"
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              to="/experience"
              className="block py-3 px-4 text-center font-bold hover:bg-gray-100"
              onClick={closeMenu}
            >
              Experience
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
