import React, { useState, useEffect } from "react";
import ProjectBlock from "./ProjectComponent/ProjectBlock";

const projects = {
  // Format ["imagePath", "projectTitle", "sk1", "sk2", "sk3", "projectDescription", "githubLink", "websiteLink"
  1: [
    "cookbook.png",
    <>CookBook - AI-Powered Kitchen Assistant</>,
    "Python",
    "FastAPI",
    "React",
    `<p><strong>CookBook is an AI-powered kitchen assistant that makes cooking stress-free, fun, and delicious by suggesting recipes based on available ingredients.</strong></p>
    </br>
    <p>As part of a collaborative team at NC State University, I worked with Meseker Worku Kebede and O'Neal M'Beri to enhance this application with several new features for Version 5.0, including:</p>
    <ul>
      <li><strong>Instant Recipe Favorites:</strong> Implemented a system for users to save their favorite recipes with a single click</li>
      <li><strong>Custom Recipe Sharing:</strong> Developed functionality allowing users to add their own recipes with ingredients, instructions, and photos</li>
      <li><strong>AI Nutrition-Based Filtering:</strong> Created an intelligent filter system that suggests recipes based on nutritional criteria and dietary plans</li>
    </ul>
    </br>
    <p>The application leverages a modern tech stack including MongoDB for the database, FastAPI for the backend, React with TypeScript for the frontend, and is powered by Groq for the AI recipe generation and nutritional analysis.</p>
    </br>
    <p>My contributions included developing the backend API endpoints for recipe management, implementing the frontend components for the recipe favorites system, and coordinating with team members to ensure seamless integration of features. We maintained high code quality standards through comprehensive test coverage, automated CI/CD pipelines, and adherence to style guidelines.</p>
    </br>
    <p>This collaborative project achieved a near-perfect score (102/105) in the final evaluation, demonstrating our effective teamwork and technical implementation.</p>`,
    "https://github.com/ncsugroup17/my-cookbook",
    "https://cookbook-alpha.vercel.app/",
  ],
  2: [
    "slash.png", // You'll need to add this image to your project images
    <>Slash - Price Comparison Tool</>,
    "Python",
    "Flask",
    "Next.js",
    `<p><strong>Slash is a powerful e-commerce price comparison tool that helps users find the best deals across multiple shopping platforms.</strong></p>
    </br>
    <p>As part of a 7-person development team at NC State University, I collaborated on creating this full-stack application that scrapes leading e-commerce websites including Walmart, Target, BestBuy, Amazon, Google Shopping, BJs, Etsy, and eBay to find the best prices for products.</p>
    </br>
    <p>Key features of the application include:</p>
    <ul>
      <li><strong>Fast Search:</strong> Compare deals across multiple websites within seconds, saving over 50% of shopping time</li>
      <li><strong>Modern UI:</strong> Two interface options including a responsive Next.js frontend with improved UX</li>
      <li><strong>Wishlist Management:</strong> Save favorite deals for future reference</li>
      <li><strong>AI Recommendations:</strong> Get intelligent product suggestions based on search history</li>
      <li><strong>OAuth Authentication:</strong> Secure login with Google OAuth</li>
    </ul>
    </br>
    <p>My contributions to the project included web scraper development, database integration, and collaborative work on the frontend UI. I worked closely with teammates Mohsen Esfandyari, Ali Farahat, Dillon Michels, Ryan Mikula, Meseker Worku, and O'Neal M'Beri to deliver a cohesive application that streamlines the online shopping experience.</p>
    </br>
    <p>The project utilized CI/CD pipelines with GitHub Actions for automated testing, style checking, and deployment, ensuring code quality throughout development.</p>
    `,
    "https://github.com/ncsugroup17/slash",
    "", // Add a live demo link if available
  ],
  3: [
    "letsStudyTogether.png",
    <>Lets Study Together</>,
    "React",
    "Express",
    "Javascript",
    ` <p><strong>A web application that helps students log hours of their studies.</strong></p>
    </br>
    <p>It features options for tracking study hours, receiving rankings on a global leaderboard, sending and accepting study requests, changing wallpapers, and much more. Visit the website and check the 'About' section to learn more about these features.</p>
    </br>
    <p>LetsStudyTogether has helped over 100 active users stop procrastination and increase productivity.</p>
    </br>
    <p>This application was hosted using AWS EC2.</p>`,
    "https://github.com/SyntaxErrorThapa/LetsStudyTogether",
    "https://www.letsstudytogether.net",
  ],
  4: [
    "facialNN.png", // Use a relevant image for this project
    <>Deep Learning for Facial Expression Recognition</>,
    "TensorFlow",
    "Python",
    "Neural Networks",
    `<p><strong>A research project comparing neural network architectures for facial expression recognition using the FER-2013 dataset.</strong></p>
    </br>
    <p>As part of a team at North Carolina State University, I researched and developed multiple neural network models for classifying facial expressions into seven emotion categories: angry, disgust, fear, happy, neutral, sad, and surprise.</p>
    </br>
    <p>We implemented and analyzed four different neural network architectures:</p>
    <ul>
      <li><strong>Convolutional Neural Network (CNN)</strong> - Achieved 55.49% accuracy</li>
      <li><strong>Residual Network (ResNet)</strong> - Our best performer with 68.72% accuracy</li>
      <li><strong>Multi-Layer Perceptron (MLP)</strong> - Reached 40.71% accuracy</li>
      <li><strong>Recurrent Neural Network (RNN)</strong> - Achieved 39.80% accuracy</li>
    </ul>
    </br>
    <p>We also compared our custom models against ChatGPT-4 Turbo's image classification capabilities, where our ResNet and CNN models outperformed the LLM.</p>
    </br>
    <p>This project represented significant work in understanding how different neural network architectures capture spatial features for emotion recognition, contributing to advancements in human-computer interaction technologies.</p>
    `,
    "https://github.com/CSC522NCSU/FacialNN",
    "",
  ],
  5: [
    "leetcodeBlog.png",
    <>Leet Code Journal</>,
    "React",
    "Express",
    "Javascript",
    ` <p><strong>A web application that helps students journal their LeetCode solutions.</strong></p>
    </br>
    <p>We all know the frustration of being able to solve a LeetCode problem, only to come back a month later and struggle to solve it again. This application addresses that issue by keeping track of all the solutions you've solved so far.</p>
    </br>
    <p>Students can post their solutions along with a PDF if they sketched the solution using an iPad. The application initially provides the top 100 most frequently asked questions, with a sorting function. This feature allows users to sort the questions and focus on the categories where they need the most improvement.</p>
    </br>
    <p>This web application was hosted using AWS Lightsail.</p>`,
    "https://github.com/SyntaxErrorThapa/leetcode-blog",
    "https://www.leetcodejournal.com",
  ],
  6: [
    "jobLogify.png",
    <>Job Logify</>,
    "React",
    "Express",
    "Javascript",
    `<p><strong>LogJobify</strong> aims to enhance productivity and organization in the job search process. With a focus on user experience, the platform offers an intuitive GUI that displays all necessary job information at a glance.</p>
    </br>
    <p>Users can easily track their applications, view market listings, and manage their job search with minimal effort.</p>
    </br>
    <ul>
      <li><strong>Sign Up:</strong> Users create an account to start tracking their job applications.</li>
      </br>
      <li><strong>Log Jobs:</strong> With one click, users can log the details of the jobs they have applied for, including company name, position, application date, and status.</li>
      </br>
      <li><strong>View Listings:</strong> Users can browse through comprehensive job listings from various markets directly within the platform.</li>
      </br>
      <li><strong>Manage Applications:</strong> Users can view, edit, or delete their logged applications, keeping their job search organized and up-to-date.</li>
    </ul>`,
    "https://github.com/SyntaxErrorThapa/JobLogify",
    "https://www.pratikthapa.com",
  ],
  7: [
    "personalBlog.png",
    <>Personal Blog</>,
    "Flask",
    "SQLite",
    "Python",
    `<p><strong>This project was one of the highlights of my 100 Days of Code course on Udemy, taught by Dr. Angela Yu.</strong> Through this project, I gained hands-on experience with the Flask framework.</p>
    </br>
    <p>I learned how to build dynamic web applications, create routes, and work with APIs. Additionally, I developed a deeper understanding of integrating databases with SQLite to manage content efficiently.</p>
    </br>
    <p>The Personal Blog project allowed me to implement user authentication, enabling users to register, log in, and post their own blog entries. I also learned how to style the application using CSS to create a clean and user-friendly interface.</p>
    </br>
    <p>This project not only improved my technical skills but also taught me the importance of planning and structuring a web application from start to finish.</p>
    `,
    "https://github.com/SyntaxErrorThapa/personalWebsite",
    "https://www.pratikthapa.com",
  ],
  8: [
    "robotThatPlaySoccer.jpg",
    <>Robot That Plays Soccer</>,
    "TensorFlow",
    "Python",
    "Convolutional Neural Network",
    `<p><strong>The main purpose of this project was to dive deep into the world of Convolutional Neural Networks (CNNs) by getting hands-on experience.</strong></p>
    </br>
    <p>To achieve this, I took on the challenge of building a robot from scratch. I started by assembling the hardware, which included a Raspberry Pi, a camera chassis, and various circuit components. Through this process, I gained practical knowledge of circuitry and the fundamentals of robotics.</p>
    </br>
    <p>On the software side, I focused on creating a CNN model from the ground up. This involved not only understanding the theoretical underpinnings of neural networks but also implementing them in a real-world scenario.</p>
    </br>
    <p>The result was a functional robot capable of processing visual data and making decisions based on the model I developed.</p>
    </br>
    <p>If you’re curious to see how the robot works, feel free to click the link to the website for a detailed demonstration.</p>
    `,
    "https://github.com/SyntaxErrorThapa/Object_face_detection_rover",
    "https://youtu.be/tP2XV6Mckto?si=FJ96s6NSuJzC-5HV",
  ],
  9: [
    "spotifyPlaylistMaker.jpg",
    <>Spotify Playlist Maker</>,
    "Python",
    "BeautifulSoup",
    "Spotipy",
    `<p><strong>This project allows users to create their own Spotify playlists by web scraping the top 100 songs from the Billboard charts.</strong></p>
    </br>
    <p>Using Python, I implemented web scraping techniques to gather the latest data from the Billboard website. The program then seamlessly integrates with Spotify’s API to create a personalized playlist based on the scraped songs.</p>
    </br>
    <p>In addition to web scraping, this project involved working with various Python libraries, such as <strong>BeautifulSoup</strong> for parsing HTML, <strong>Spotipy</strong> for interacting with Spotify’s API, and <strong>Pygame</strong> for handling any additional multimedia features.</p>
    </br>
    <p>The result is a user-friendly tool that makes it easy to stay up-to-date with the latest hits and curate a playlist with just a few clicks.</p>
    `,
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
    "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
  ],
  10: [
    "personalWebsite.png",
    <>Personal Website</>,
    "React",
    "Javascript",
    "TailWindCSS",
    `
    <p><strong>This personal website</strong> is a comprehensive portfolio that not only showcases all the projects I've completed but also offers insights into my journey as a developer.</p>
    </br>
    <p>It highlights my <strong>experiences</strong>, <strong>skills</strong>, and <strong>educational background</strong>, giving visitors a clear understanding of who I am and what I bring to the table.</p>
    </br>
    <p>The website serves as a <em>digital resume</em>, where I delve into my passion for coding, my approach to problem-solving, and the various technologies I've mastered.</p>
    </br>
    <p>It's designed to be a reflection of my commitment to continuous learning and my drive to create impactful software solutions.</p>
  `,
    "https://github.com/SyntaxErrorThapa/javascriptPersonalWebsite",
    "https://www.pratikthapa.com",
  ],
  11: [
    "wolfScheduler.png",
    <>Wolf Scheduler</>,
    "Java",
    "Junit",
    "Object Oriented Programming",
    `<p><strong>This is my Wolf Scheduler project</strong>, a Java application that showcases the principles of Object-Oriented Programming (OOP) through the implementation of <em>unit testing</em>, <em>system testing</em>, <em>inheritance</em>, <em>polymorphism</em>, <em>abstract classes</em>, and <em>interfaces</em>.</p>
    </br>
    <p>The application utilizes file I/O to read course data from a CSV file and imports it into a catalog from which users can select courses.</p>
    </br>
    <p>Users can then create and export their own custom schedules, adding events like lunch breaks alongside their selected courses.</p>
    </br>
    <p>The scheduler includes built-in rules to ensure valid schedule creation, such as preventing users from enrolling in the same class more than once or scheduling overlapping events.</p>
    </br>
    <p>This project marked my first introduction to inheritance and interfaces, and it taught me how to organize class files into a structured hierarchy, significantly reducing redundancy and improving code maintainability.</p>
    </br>
    <p>This project was originally developed and hosted on my school’s GitHub account.</p>
    `,
    "https://github.com/SyntaxErrorThapa/WolfScheduler",
    "",
  ],
};

function Project() {
  return (
    <>
      <div className="bg-gray-50 py-16">
        {/* Section heading with underline */}
        <div className="container mx-auto mb-12">
          <h2 className="text-4xl font-extrabold text-center text-custom-text-charcoal">
            Projects
          </h2>
          <div className="w-24 h-1 bg-custom-text-coolTeal mx-auto mt-4"></div>
        </div>

        {/* Projects grid - simple but more refined */}
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projects).map(([key, value]) => {
              return (
                <ProjectBlock
                  imagePath={value[0]}
                  projectTitle={value[1]}
                  sk1={value[2]}
                  sk2={value[3]}
                  sk3={value[4]}
                  projectDescription={value[5]}
                  githubLink={value[6]}
                  websiteLink={value[7]}
                  
                />
              );
            })}
            ;
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
