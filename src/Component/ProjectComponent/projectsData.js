// Format: { slug, imagePath, title, sk1, sk2, sk3, description, githubLink, websiteLink, featured, timeline, media, content, documents }
// imagePath is a filename inside /public, or null to show a placeholder tile.
// timeline: [{ date, title, description, link, linkLabel }] — optional, rendered as a vertical timeline.
// media: [{ type: "image" | "video", src, caption }] — optional, rendered as a clickable gallery below the description.
// content: [{ type: "text", html }] | [{ type: "media", items: [{ type, src, caption }] }] — optional; when present,
//   this replaces `description`/`media` and renders text and media interleaved in reading order (images/videos
//   inline after their paragraph, with the caption directly beneath, click to open in a shared lightbox).
// documents: [{ label, href }] — optional, href is relative to /public (spaces are fine, e.g. "doc/My File.pdf").
const projects = [
  {
    slug: "project-oval",
    imagePath: "1project_oval_assets.png",
    title: "Project Oval",
    sk1: "DINOv2",
    sk2: "YOLO",
    sk3: "LSTM",
    content: [
      {
        type: "text",
        html: `<p><strong>Project OVAL (On-campus Vehicle Autonomous Launch) is a medium-scale autonomous ground vehicle built at NC State University's Yoon Lab to serve as a research testbed for self-driving technology</strong>, with potential applications spanning campus package delivery, security patrol, surveying, and open-source robotics education.</p>`,
      },
      {
        type: "text",
        html: `<p>The vehicle runs on a multi-sensor stack — a ZED2i stereo camera for spatial mapping, positional tracking, and body tracking; a 3D LiDAR for point-cloud mapping; an RTK GPS module for centimeter-level positioning; and supporting IMU, motor encoder, and radio telemetry hardware — built and operated across three subteams: Mechanical, Electrical, and Software (split into Localization & Route Planning, Path Following, and Model Training & Telemetry/Cloud for real-time updates on the website).</p>`,
      },
      {
        type: "media",
        items: [
          { type: "video", src: "3project_oval_assets.mp4", caption: "Project Oval in action" },
        ],
      },
      {
        type: "text",
        html: `<p>I led the software team across all three areas — Localization & Route Planning, Path Following, and Model Training & Telemetry/Cloud.</p>`,
      },
      {
        type: "text",
        html: `<p><strong>Model Training</strong> — The path-detection model is built on a frozen DINOv2 (ViT-S/14) backbone: input frames are resized to 224×224, split into a 16×16 grid of 14×14 patches, and each patch is embedded into a 384-dimensional feature vector by DINOv2 (used purely for inference — its weights are never updated). Those patch features are reshaped into a 16×16 spatial grid and passed through a lightweight segmentation head — a ConvTranspose2d layer that upsamples the grid while expanding the channels (384 → 128), followed by bilinear upsampling back to full 224×224 resolution and two more convolutional layers that collapse the channels down to a per-pixel Grass-vs-Path classification. Because DINOv2 stays frozen, only that small segmentation head has to be trained, which keeps training fast and data-efficient. Ground truth came from YOLOv8-format polygon annotations converted into pixel masks, and the head was trained with a combined Dice + focal cross-entropy loss (to handle the class imbalance between grass and path pixels) using AdamW and a OneCycleLR schedule, evaluated with per-class IoU/Dice scores, and exported to ONNX for fast on-vehicle inference.</p>`,
      },
      {
        type: "text",
        html: `<p><strong>Path Following</strong> — At inference time, the segmentation model runs directly on the vehicle's live camera feed to decide where it's safe to drive:</p>
        <ol class="list-decimal pl-6 space-y-1">
          <li>The raw camera frame is captured.</li>
          <li>The DINOv2 segmentation model classifies the frame into path (drivable) vs. no-path, producing a low-resolution 2D mask rather than a full-resolution or 3D reconstruction — intentionally, to keep inference fast enough for real-time control.</li>
          <li>The boundary between path and no-path in that mask is used to compute a steering angle and a distance-to-edge value, which becomes the vehicle's steering control signal.</li>
          <li>That output is overlaid with detections from a separately fine-tuned object detector (the same landmark classes used for QLOC — OVAL, street lamps, signs, buildings, etc.), giving the vehicle both a drivable-path estimate and awareness of nearby landmarks/obstacles in a single frame.</li>
        </ol>`,
      },
      {
        type: "media",
        items: [
          {
            type: "image",
            src: "project_oval_image_segmentation.jpg",
            caption: "Path following pipeline: camera input → segmentation mask (path vs. no path) → steering angle & distance from the path edge → overlay with the fine-tuned landmark/object detector",
          },
        ],
      },
      {
        type: "media",
        items: [
          {
            type: "video",
            src: "project_oval_at_riot_event.mp4",
            caption: "Live path following demo at RIoT 2025",
          },
        ],
      },
      {
        type: "text",
        html: `<p>Beyond RIoT, the team also brought Project Oval to NC State's College of Engineering Open House to demo the vehicle to prospective students.</p>`,
      },
      {
        type: "media",
        items: [
          { type: "image", src: "RIoT.jpg", caption: "Team at RIoT 2025" },
          {
            type: "image",
            src: "open_house_ncsu_to_attract_students.jpeg",
            caption: "NC State College of Engineering Open House 2025",
          },
        ],
      },
      {
        type: "text",
        html: `<p>The localization side of the project produced a companion research paper, <strong>QLOC: Wheel-Odometry-Based Ground Vehicle Localization Using LSTM</strong>, presented and published at IEEE IV 2025. QLOC predicts the vehicle's latitude/longitude from camera images alone — detecting landmarks (buildings, signs, lampposts) with Faster R-CNN/YOLO and feeding their positions into an LSTM to regress location — reaching an average localization error of 16.57m, a 64.7% improvement over the prior baseline, without needing an expensive RTK/GPS unit once trained. Read the full paper and view the project summary slides below.</p>`,
      },
      {
        type: "media",
        items: [
          { type: "image", src: "IV_poster.jpg", caption: "QLOC poster, IEEE IV 2025" },
        ],
      },
      {
        type: "media",
        items: [
          { type: "image", src: "teamImage.jpeg", caption: "Project Oval Team @NCDOT" },
          { type: "image", src: "qlocPoster.jpg", caption: "QLOC poster presentation at the NCDOT Research and Innovation Symposium 2025" },
        ],
      },
      {
        type: "text",
        html: `<p>The team also traveled to Cluj-Napoca, Romania to present the paper in person at IEEE IV 2025.</p>`,
      },
      {
        type: "media",
        items: [
          { type: "image", src: "iEEE3.png", caption: "IEEE IV 2025, Cluj-Napoca, Romania" },
          { type: "image", src: "iEEE4.png", caption: "IEEE IV 2025, Cluj-Napoca, Romania" },
        ],
      },
      {
        type: "text",
        html: `<p><strong>Telemetry Web App</strong> — A React/Vite dashboard paired with a Python (Socket.IO + eventlet) backend that streams live GPS position, LiDAR point clouds, and camera frames to the browser over WebSockets. It renders a live satellite map showing the vehicle's position, heading, and field of view, a custom Three.js LiDAR point-cloud viewer with adjustable distance/height/intensity filtering, and a live camera feed, and lets a user click waypoint nodes on the map to trigger navigation along predefined route segments. The backend also integrates with Google Cloud Pub/Sub to ingest live robot position, camera, and command telemetry. <a href="https://github.com/ncsu-yoon-lab/TelemetryWebApp" target="_blank" rel="noopener noreferrer">View the Telemetry Web App on GitHub</a>.</p>`,
      },
      {
        type: "media",
        items: [
          {
            type: "video",
            src: "webapp.mp4",
            caption: "Telemetry Web App — live GPS location, Google Cloud Pub/Sub data flow, and a live view of the vehicle during an event",
          },
        ],
      },
    ],
    githubLink: "https://github.com/ncsu-yoon-lab",
    websiteLink: "",
    featured: true,
    documents: [
      {
        label: "Read the QLOC paper (PDF)",
        href: "doc/Q-Loc_Visual_Cue-Based_Ground_Vehicle_Localization_Using_Long_Short-Term_Memory.pdf",
      },
      {
        label: "Project OVAL summary slides (PDF)",
        href: "doc/Project OVAL Summary Meeting.pdf",
      },
    ],
    timeline: [
      {
        date: "February 11–12, 2025",
        title: "NCDOT Research and Innovation Symposium",
        description:
          "Presented Project Oval (autonomous driving car) and the QLOC paper.",
        link: "https://researchinnovationsymposium.com/posters/",
        linkLabel: "View symposium posters",
      },
      {
        date: "2025",
        title: "RIoT 2025",
        description: "Presented the Project Oval framework.",
      },
      {
        date: "2025",
        title: "NC State College of Engineering Open House",
        description: "Demoed Project Oval to prospective students.",
      },
      {
        date: "June 22–25, 2025",
        title: "IEEE Intelligent Vehicles Symposium (IV) 2025 — Cluj-Napoca, Romania",
        description: "Presented and published the QLOC paper.",
        link: "https://ieeexplore.ieee.org/document/11097732",
        linkLabel: "Read the QLOC paper",
      },
    ],
  },
  {
    slug: "insight",
    imagePath: "insight/INSIGHT_System.jpeg",
    title: "INSIGHT",
    sk1: "ROS2",
    sk2: "PID Control",
    sk3: "AWS",
    content: [
      {
        type: "text",
        html: `<p><strong>INSIGHT (Intelligent In-home Safe Halo Gravity Traction) is a medical device developed jointly by NC State University and UNC Chapel Hill (UNC Health) to make Halo Gravity Traction — the standard pre-surgical treatment for severe adolescent idiopathic scoliosis — safe, precise, and usable outside a hospital.</strong> The project is led by Dr. Gregory Buckner (Distinguished Professor, NCSU Mechanical &amp; Aerospace Engineering) and Sean Zeller, MBA, MSPO, CPO (Director of Prosthetics and Orthotics, UNC Hospitals), with Shaphan Jernigan as lab manager and an undergraduate research team of Cole Malinchock, Will Mueller, Hailey Nguyen, Edward Katz, Emma Brown, and myself.</p>`,
      },
      {
        type: "text",
        html: `<p><strong>Background &amp; Motivation</strong> — Adolescent Idiopathic Scoliosis (AIS) is diagnosed in roughly 3 million patients each year, and about 10% progress to severe AIS (Cobb angle exceeding 40°), which requires spinal fusion surgery. Halo Gravity Traction (HGT) — a halo ring surgically fixed to the skull, connected to a counterweight traction system and worn 24 hours a day for 3–8 weeks — is the current pre-surgery treatment, and it measurably improves surgical outcomes. But existing HGT systems have real setbacks: they aren't standardized across hospitals (raising safety and accessibility concerns), apply imprecise, static loads, and are difficult to transport — which keeps patients in the hospital as inpatients for the full course of treatment, at a cost of roughly $4,000/day. INSIGHT's goal is a version of HGT that's safe enough, precise enough, and portable enough to move that treatment out of the hospital and into a patient's home.</p>`,
      },
      {
        type: "text",
        html: `<p>The system provides traction through a stepper motor under closed-loop <strong>PID control</strong>, with dual load cells (HX711 amplifiers) giving real-time tension feedback, and a rechargeable LiFePO4 battery rated for roughly 12 hours of use. A touchscreen interface built with <strong>Kivy</strong> lets a patient or caregiver run the device in two modes: <strong>Constant Setpoint</strong>, which holds a fixed tension the patient dials in, or <strong>Prescribed Therapy</strong>, which cycles tension between physician-set thresholds on a timed interval — both walker- and wheelchair-mounted versions share the same control hardware and software.</p>`,
      },
      {
        type: "media",
        items: [
          {
            type: "image",
            src: "insight/GUI.jpeg",
            caption: "INSIGHT touchscreen GUI — Constant Setpoint and Prescribed Therapy modes",
          },
        ],
      },
      {
        type: "text",
        html: `<p>Under the hood, INSIGHT runs on <strong>ROS2</strong> as a set of independent nodes so that no single point of failure can take down the whole system:</p>
        <ul class="list-disc pl-6 space-y-1">
          <li><strong>Load Cell Node</strong> (5 Hz) — reads both HX711 amplifiers and publishes filtered tension.</li>
          <li><strong>Motor Control Node</strong> (20 Hz) — runs the PID control loop and enforces safety interlocks before driving the motor.</li>
          <li><strong>E-Stop Node</strong> (50 Hz) — polls the emergency-stop buttons and broadcasts safety status to every other node directly, not just through the GUI.</li>
          <li><strong>Power Sensor Node</strong> (10 Hz) — monitors battery voltage/current via an INA260 sensor.</li>
          <li><strong>Logger Node</strong> (1 Hz) — writes CSV logs and JSON session summaries, and checks internet connectivity.</li>
          <li><strong>Kivy GUI Node</strong> — drives the touchscreen and buffers tension data for transmission.</li>
          <li><strong>API Node</strong> — batches tension packets (up to 60 points, sent every 60 seconds during an active session) and pushes them to the cloud over AWS SigV4-authenticated requests.</li>
        </ul>`,
      },
      {
        type: "text",
        html: `<p><strong>Safety</strong> was the core design constraint, given this runs on a pediatric medical device. The mechanical fuse went through two generations — a 1st-generation magnetic design (compact, repeatable, but attracted to surrounding metal objects and non-adjustable) and a 2nd-generation mechanical design with an adjustable release threshold (20–60 lbf), repeatable within ±2 lbf, and resettable without tools. That's layered with dual E-stop buttons, anti-tipping wheels, temperature sensors, sensor fault-tolerance, and minimal exposed wiring to reduce entanglement risk. On the validation side, the frame was analyzed in SolidWorks FEA to a structural factor of safety greater than 2.5 against the IEC 60601-1 medical device standard, and the full system passed a 12-hour continuous endurance test with a mean tension error of 0.05 lb (± 0.34 lb std. dev.) and internal temperature staying below 30°C throughout.</p>`,
      },
      {
        type: "text",
        html: `<p><strong>Clinical trial</strong> — INSIGHT ran an IRB-approved clinical trial in collaboration with <strong>UNC Children's Hospital</strong>, treating 3 patients aged 7–9 years old for 2–5 months in gravity traction; 2 of the 3 went on to complete their spinal fusion surgery. The system held tension accurately through dynamic patient movement (±0.2 lb precision), the mechanical fuse correctly triggered during real overload events, and both patients and parents reported satisfaction with how easy the device was to use. The trials also surfaced concrete next steps — handling patient motion more gracefully, and validating behavior when the mechanical fuse isn't engaged.</p>`,
      },
      {
        type: "text",
        html: `<p><strong>INSIGHT Analytics Web App</strong> — A React dashboard that gives physicians real-time, remote visibility into a patient's treatment: live tension and setpoint charts for both the walker and wheelchair devices, a usage overview (total and daily-average time in traction), prescribed therapy management, and CSV data export. It's backed by a Node/Express API on <strong>AWS Lambda</strong> (serverless) reading and writing an <strong>AWS RDS MySQL</strong> database, hosted on AWS Amplify, and includes a built-in AI chatbot physicians can ask questions about a patient's INSIGHT data. The on-device API Node syncs tension and therapy session data to this same backend over the internet, so a physician can monitor a patient's treatment without being in the room. <a href="https://github.com/InsightNCSU/insight_ros2_app" target="_blank" rel="noopener noreferrer">View the INSIGHT ROS2 system on GitHub</a> · <a href="https://github.com/InsightNCSU/insightWebApp" target="_blank" rel="noopener noreferrer">View the INSIGHT Analytics web app on GitHub</a>.</p>`,
      },
      {
        type: "media",
        items: [
          {
            type: "image",
            src: "insight/insight_webapp_to_display_data.png",
            caption: "INSIGHT Analytics — remote tension monitoring for a patient's walker and wheelchair devices",
          },
        ],
      },
      {
        type: "text",
        html: `<p>Our team presented this work — <em>"Engineering a Safe, Intelligent Halo Gravity Traction System for Effective Pre-Surgical Outpatient Treatment of Severe Idiopathic Scoliosis"</em> — at the Biomedical Engineering Society (BMES) national conference and took <strong>1st place</strong> in the design competition. We're now pursuing NIH funding to continue clinical development toward a device families could eventually lease for around $150/day, versus the current $4,000/day inpatient cost.</p>`,
      },
      {
        type: "media",
        items: [
          {
            type: "image",
            src: "insight/medtronic_design_competition_winner.jpeg",
            caption: "1st Place, Medtronic Design Competition at BMES",
          },
          {
            type: "image",
            src: "insight/BMES_Poster_Presentation.jpeg",
            caption: "Presenting the INSIGHT poster at BMES",
          },
        ],
      },
      {
        type: "media",
        items: [
          {
            type: "image",
            src: "insight/Slide2.jpg",
            caption: "BMES poster: Engineering a Safe, Intelligent Halo Gravity Traction System for Effective Pre-Surgical Outpatient Treatment of Severe Idiopathic Scoliosis",
          },
        ],
      },
    ],
    githubLink: "https://github.com/InsightNCSU",
    websiteLink: "https://main.d179h4igj680y4.amplifyapp.com/",
    featured: true,
    documents: [
      {
        label: "INSIGHT Q4 Presentation (PDF)",
        href: "insight/Q4 Presentation.pdf",
      },
    ],
    timeline: [
      {
        date: "June 2023",
        title: "Initial Prototype",
        description: "Built the first hospital-mounted Halo Gravity Traction rig.",
      },
      {
        date: "August 2023",
        title: "Electronics & Motor Bench Testing",
        description: "Bench-top motor control and sensor electronics development.",
      },
      {
        date: "December 2023",
        title: "Mobile App & Tension Display",
        description: "First mobile interface with a live tension chart and scheduling.",
      },
      {
        date: "January 2024",
        title: "Wheelchair System Design",
        description: "CAD design and structural (FEA) analysis of the wheelchair-mounted system.",
      },
      {
        date: "May 2024",
        title: "Wheelchair Prototype",
        description: "Built and tested the physical wheelchair-mounted prototype.",
      },
      {
        date: "August 2024",
        title: "Custom PCB & INSIGHT Analytics",
        description: "Custom control PCB and the first version of the INSIGHT Analytics web dashboard.",
      },
      {
        date: "September 2025",
        title: "BMES National Conference",
        description: "1st Place, Medtronic Design Competition; presented the INSIGHT poster.",
      },
      {
        date: "December 2025",
        title: "NIH Funding Pursuit",
        description: "Pursuing NIH funding to continue clinical development.",
      },
      {
        date: "February 2026",
        title: "Fully Integrated System",
        description: "Integrated wheelchair-mounted system with labeled load cells, mechanical fuse, E-stop, and battery/control enclosures.",
      },
    ],
  },
  {
    slug: "sas-computer-vision-project",
    imagePath: null,
    title: "SAS Computer Vision Project",
    sk1: "Computer Vision",
    sk2: "ONNX",
    sk3: "IoT",
    description: `<p><strong>Placeholder — full write-up coming soon.</strong></p>
    </br>
    <p>As a Reliability Engineer for IoT Systems at SAS, I fine-tuned a DETR model with a DINO backbone for richer
    feature extraction, boosting worker safety in industrial IoT settings, raising F1 to 91% and accuracy to 88%
    with optimized augmentation, and deployed an RFDETR (ONNX) model in SAS ESP that drove Release 2 adoption.</p>
    </br>
    <p>More detail on the architecture, dataset, and deployment pipeline will be added here.</p>`,
    githubLink: "",
    websiteLink: "",
    featured: true,
  },
  {
    slug: "cookbook",
    imagePath: "cookbook.png",
    title: "CookBook - AI-Powered Kitchen Assistant",
    sk1: "Python",
    sk2: "FastAPI",
    sk3: "React",
    description: `<p><strong>CookBook is an AI-powered kitchen assistant that makes cooking stress-free, fun, and delicious by suggesting recipes based on available ingredients.</strong></p>
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
    githubLink: "https://github.com/ncsugroup17/my-cookbook",
    websiteLink: "https://cookbook-alpha.vercel.app/",
    featured: false,
  },
  {
    slug: "slash",
    imagePath: "slash.png",
    title: "Slash - Price Comparison Tool",
    sk1: "Python",
    sk2: "Flask",
    sk3: "Next.js",
    description: `<p><strong>Slash is a powerful e-commerce price comparison tool that helps users find the best deals across multiple shopping platforms.</strong></p>
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
    githubLink: "https://github.com/ncsugroup17/slash",
    websiteLink: "",
    featured: false,
  },
  {
    slug: "lets-study-together",
    imagePath: "letsStudyTogether.png",
    title: "Lets Study Together",
    sk1: "React",
    sk2: "Express",
    sk3: "Javascript",
    description: ` <p><strong>A web application that helps students log hours of their studies.</strong></p>
    </br>
    <p>It features options for tracking study hours, receiving rankings on a global leaderboard, sending and accepting study requests, changing wallpapers, and much more. Visit the website and check the 'About' section to learn more about these features.</p>
    </br>
    <p>LetsStudyTogether has helped over 100 active users stop procrastination and increase productivity.</p>
    </br>
    <p>This application was hosted using AWS EC2.</p>`,
    githubLink: "https://github.com/SyntaxErrorThapa/LetsStudyTogether",
    websiteLink: "https://www.letsstudytogether.net",
    featured: false,
  },
  {
    slug: "facial-expression-recognition",
    imagePath: "facialNN.png",
    title: "Deep Learning for Facial Expression Recognition",
    sk1: "TensorFlow",
    sk2: "Python",
    sk3: "Neural Networks",
    description: `<p><strong>A research project comparing neural network architectures for facial expression recognition using the FER-2013 dataset.</strong></p>
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
    githubLink: "https://github.com/CSC522NCSU/FacialNN",
    websiteLink: "",
    featured: false,
  },
  {
    slug: "leetcode-journal",
    imagePath: "leetcodeBlog.png",
    title: "Leet Code Journal",
    sk1: "React",
    sk2: "Express",
    sk3: "Javascript",
    description: ` <p><strong>A web application that helps students journal their LeetCode solutions.</strong></p>
    </br>
    <p>We all know the frustration of being able to solve a LeetCode problem, only to come back a month later and struggle to solve it again. This application addresses that issue by keeping track of all the solutions you've solved so far.</p>
    </br>
    <p>Students can post their solutions along with a PDF if they sketched the solution using an iPad. The application initially provides the top 100 most frequently asked questions, with a sorting function. This feature allows users to sort the questions and focus on the categories where they need the most improvement.</p>
    </br>
    <p>This web application was hosted using AWS Lightsail.</p>`,
    githubLink: "https://github.com/SyntaxErrorThapa/leetcode-blog",
    websiteLink: "https://www.leetcodejournal.com",
    featured: false,
  },
  {
    slug: "job-logify",
    imagePath: "jobLogify.png",
    title: "Job Logify",
    sk1: "React",
    sk2: "Express",
    sk3: "Javascript",
    description: `<p><strong>LogJobify</strong> aims to enhance productivity and organization in the job search process. With a focus on user experience, the platform offers an intuitive GUI that displays all necessary job information at a glance.</p>
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
    githubLink: "https://github.com/SyntaxErrorThapa/JobLogify",
    websiteLink: "https://www.pratikthapa.com",
    featured: false,
  },
  {
    slug: "personal-blog",
    imagePath: "personalBlog.png",
    title: "Personal Blog",
    sk1: "Flask",
    sk2: "SQLite",
    sk3: "Python",
    description: `<p><strong>This project was one of the highlights of my 100 Days of Code course on Udemy, taught by Dr. Angela Yu.</strong> Through this project, I gained hands-on experience with the Flask framework.</p>
    </br>
    <p>I learned how to build dynamic web applications, create routes, and work with APIs. Additionally, I developed a deeper understanding of integrating databases with SQLite to manage content efficiently.</p>
    </br>
    <p>The Personal Blog project allowed me to implement user authentication, enabling users to register, log in, and post their own blog entries. I also learned how to style the application using CSS to create a clean and user-friendly interface.</p>
    </br>
    <p>This project not only improved my technical skills but also taught me the importance of planning and structuring a web application from start to finish.</p>
    `,
    githubLink: "https://github.com/SyntaxErrorThapa/personalWebsite",
    websiteLink: "https://www.pratikthapa.com",
    featured: false,
  },
  {
    slug: "robot-plays-soccer",
    imagePath: "robotThatPlaySoccer.jpg",
    title: "Robot That Plays Soccer",
    sk1: "TensorFlow",
    sk2: "Python",
    sk3: "Convolutional Neural Network",
    description: `<p><strong>The main purpose of this project was to dive deep into the world of Convolutional Neural Networks (CNNs) by getting hands-on experience.</strong></p>
    </br>
    <p>To achieve this, I took on the challenge of building a robot from scratch. I started by assembling the hardware, which included a Raspberry Pi, a camera chassis, and various circuit components. Through this process, I gained practical knowledge of circuitry and the fundamentals of robotics.</p>
    </br>
    <p>On the software side, I focused on creating a CNN model from the ground up. This involved not only understanding the theoretical underpinnings of neural networks but also implementing them in a real-world scenario.</p>
    </br>
    <p>The result was a functional robot capable of processing visual data and making decisions based on the model I developed.</p>
    </br>
    <p>If you’re curious to see how the robot works, feel free to click the link to the website for a detailed demonstration.</p>
    `,
    githubLink: "https://github.com/SyntaxErrorThapa/Object_face_detection_rover",
    websiteLink: "https://youtu.be/tP2XV6Mckto?si=FJ96s6NSuJzC-5HV",
    featured: false,
  },
  {
    slug: "spotify-playlist-maker",
    imagePath: "spotifyPlaylistMaker.jpg",
    title: "Spotify Playlist Maker",
    sk1: "Python",
    sk2: "BeautifulSoup",
    sk3: "Spotipy",
    description: `<p><strong>This project allows users to create their own Spotify playlists by web scraping the top 100 songs from the Billboard charts.</strong></p>
    </br>
    <p>Using Python, I implemented web scraping techniques to gather the latest data from the Billboard website. The program then seamlessly integrates with Spotify’s API to create a personalized playlist based on the scraped songs.</p>
    </br>
    <p>In addition to web scraping, this project involved working with various Python libraries, such as <strong>BeautifulSoup</strong> for parsing HTML, <strong>Spotipy</strong> for interacting with Spotify’s API, and <strong>Pygame</strong> for handling any additional multimedia features.</p>
    </br>
    <p>The result is a user-friendly tool that makes it easy to stay up-to-date with the latest hits and curate a playlist with just a few clicks.</p>
    `,
    githubLink: "https://github.com/SyntaxErrorThapa/make-spotify-playlist",
    websiteLink: "",
    featured: false,
  },
  {
    slug: "personal-website",
    imagePath: "personalWebsite.png",
    title: "Personal Website",
    sk1: "React",
    sk2: "Javascript",
    sk3: "TailWindCSS",
    description: `
    <p><strong>This personal website</strong> is a comprehensive portfolio that not only showcases all the projects I've completed but also offers insights into my journey as a developer.</p>
    </br>
    <p>It highlights my <strong>experiences</strong>, <strong>skills</strong>, and <strong>educational background</strong>, giving visitors a clear understanding of who I am and what I bring to the table.</p>
    </br>
    <p>The website serves as a <em>digital resume</em>, where I delve into my passion for coding, my approach to problem-solving, and the various technologies I've mastered.</p>
    </br>
    <p>It's designed to be a reflection of my commitment to continuous learning and my drive to create impactful software solutions.</p>
  `,
    githubLink: "https://github.com/SyntaxErrorThapa/javascriptPersonalWebsite",
    websiteLink: "https://www.pratikthapa.com",
    featured: false,
  },
  {
    slug: "wolf-scheduler",
    imagePath: "wolfScheduler.png",
    title: "Wolf Scheduler",
    sk1: "Java",
    sk2: "Junit",
    sk3: "Object Oriented Programming",
    description: `<p><strong>This is my Wolf Scheduler project</strong>, a Java application that showcases the principles of Object-Oriented Programming (OOP) through the implementation of <em>unit testing</em>, <em>system testing</em>, <em>inheritance</em>, <em>polymorphism</em>, <em>abstract classes</em>, and <em>interfaces</em>.</p>
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
    githubLink: "https://github.com/SyntaxErrorThapa/WolfScheduler",
    websiteLink: "",
    featured: false,
  },
];

export default projects;
