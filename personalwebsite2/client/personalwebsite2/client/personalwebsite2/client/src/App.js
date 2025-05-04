import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Project from "./Component/project";
import Experience from "./Component/Experience";
import Footer from "./Component/Footer";
import Image from "./Component/AboutComponent/Image";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function App() {
  return (
    <Router>
      <>
        <div className="fixed flex flex-col left-0 top-1/2 transform -translate-y-1/2 space-y-4">
          <a
            href="https://github.com/SyntaxErrorThapa"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <GitHubIcon style={{ fontSize: 40 }} />
          </a>
          <a
            href="https://linkedin.com/in/pthapa4"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <LinkedInIcon style={{ fontSize: 40 }} />
          </a>
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-h-screen bg-white bg-custom-bg-image font-fira text-custom-text-charcoal">
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/gallery" element={<Image />} />
          </Routes>
          <Footer />
        </div>
      </>
    </Router>
  );
}

export default App;
