import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="bg-custom-bg-image bg-custom-text-coolTeal text-custom-text-charcoal py-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        {/* Left Section - Contact Info */}

        <div className="mb-4 md:mb-0 m-10 ">
          <h2 className="text-2xl font-bold p-5"> Contact</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:your-email@example.com"
              className="text-custom-text-darkGray"
            >
              pthapa4@ncsu.edu
            </a>
          </p>
        </div>

        {/* Center Section - Social Media Links */}
        <div className="mb-4 md:mb-0 m-10">
          <h2 className="text-2xl font-bold p-5">Follow Me</h2>
          <div className="flex space-x-4 justify-center">
            <a
              href="https://github.com/SyntaxErrorThapa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-text-darkGray"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://linkedin.com/in/pthapa4"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-text-darkGray"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-6 pt-4 text-center m-10">
        <p>
          &copy; {new Date().getFullYear()} Pratik Thapa. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
