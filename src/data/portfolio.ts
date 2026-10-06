export const profile = {
  name: "Rahber Islam",
  title: "Data Analyst | Data Science & Machine Learning",
  location: "Phagwara, Punjab",
  availability: "Open to Relocation",
  phone: "+91 8603390303",
  email: "rahberislam0001@gmail.com",
  linkedin: "https://linkedin.com/in/islam-rahber",
  github: "https://github.com/rahberislam0001-sketch",
};

export const skills: { title: string; items: string[] }[] = [
  { title: "Languages", items: ["Python", "SQL", "C++", "HTML", "CSS", "JavaScript"] },
  { title: "Data Analysis & Viz", items: ["EDA", "Data Cleaning", "Data Wrangling", "Power BI", "Dashboard Design", "NumPy", "Pandas"] },
  { title: "Machine Learning", items: ["scikit-learn", "TensorFlow", "Predictive Modeling", "NLP", "Computer Vision", "OpenCV", "YOLOv8", "Model Evaluation"] },
  { title: "Databases", items: ["SQL", "Database Design", "Query Optimization", "Firebase", "MongoDB"] },
  { title: "Tools & Platforms", items: ["Jupyter Notebook", "GitHub", "VS Code", "Excel", "Vercel", "Git"] },
  { title: "Analytical", items: ["Statistical Analysis", "Anomaly Detection", "Business Problem Solving", "Critical Thinking", "Leadership"] },
  { title: "Communication", items: ["Verbal & Written Communication", "Stakeholder Reporting", "Data Storytelling", "Team Collaboration", "Presentation Skills", "Time Management"] },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Lovely Professional University", period: "2025 – Present", location: "Phagwara, Punjab", result: "CGPA 7.04" },
  { degree: "Bachelor of Science (Mathematics)", school: "Patliputra University", period: "2021 – 2024", location: "Patna, Bihar", result: "64.8%" },
  { degree: "Intermediate with Science", school: "Bahadurganj College", period: "2019 – 2021", location: "Kishanganj", result: "74%" },
];

export const certifications = [
  { name: "Data Science", issuer: "IBM — Cognitive Class", date: "May 2026" },
  { name: "Data Analytics", issuer: "IBM — Cognitive Class", date: "April 2026" },
  { name: "Machine Learning", issuer: "Uniathena", date: "February 2026" },
];

export const experience = [
  {
    org: "Deloitte — Forage Virtual Internship",
    role: "Data Analytics Job Simulation",
    period: "March 2026 – April 2026",
    points: [
      "Performed end-to-end EDA and data cleaning on real-world datasets",
      "Identified actionable business insights using structured analytical thinking",
      "Investigated data validation and applied anomaly-detection techniques",
      "Explored forensic technology workflows",
    ],
  },
  {
    org: "Data Science with Python — Training Program",
    role: "Trainee",
    period: "June 2026 – July 2026",
    points: [
      "Analyzed employee attrition drivers using Python, Pandas and SQL",
      "Built interactive Power BI dashboards to visualize attrition trends",
      "Applied EDA, data visualization and ML-based prediction techniques",
    ],
  },
];

export const projects = [
  {
    title: "AI-Based Early Stage Dementia Detection System",
    period: "April 2026 – Present",
    tech: ["Python", "React.js", "Flask", "Firebase", "JavaScript", "HTML", "CSS"],
    description: "Full-stack healthcare analytics application that classifies early-stage dementia risk from voice and speech-pattern data.",
    highlight: "92% prediction accuracy",
    features: ["AI-based prediction", "Doctor Dashboard", "Patient History", "AI Analytics", "Automated clinical PDF reports"],
    github: "https://github.com/rahberislam0001-sketch/AI-BASED-EARLY-STAGE-DEMENTIA-DETECTION-SYSTEM",
  },
  {
    title: "AI-Based Online Proctoring System",
    period: "July 2026 – August 2026",
    tech: ["Python", "Flask", "OpenCV", "YOLOv8", "HTML", "CSS"],
    description: "Real-time AI exam-proctoring platform built to improve exam integrity and reduce cheating.",
    highlight: "Real-time computer vision",
    features: ["Face detection", "Eye-gaze tracking", "Multi-person detection", "Mobile-device detection", "Automated alerts & reporting"],
    github: "https://github.com/rahberislam0001-sketch/AI-BASED-ONLINE-EXAM-PROCTOR-PLATFORM",
  },
  {
    title: "EV Charging Station Finder",
    period: "February 2026 – May 2026",
    tech: ["Node.js", "React.js", "MongoDB", "Socket.io", "MERN"],
    description: "Full-stack application that helps users locate nearby EV charging stations, deployed on Vercel.",
    highlight: "Real-time with Socket.IO",
    features: ["Real-time client-server communication", "Location-based station discovery", "Full-stack MERN architecture"],
    github: "https://github.com/rahberislam0001-sketch/EV-CHARGING-STATION-FINDER",
  },
];
