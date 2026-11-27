import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPython, FaUsers } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Research Intern - IIIT Allahabad",
    location: "Prayagraj, UP",
    description:
      "Architected and deployed a full-stack reporting tool using Python, Streamlit, and Pandas to automate EU carbon compliance (CBAM) benchmarking against Indian BRSR filings, with a dynamic ReportLab ESG scorecard engine deployed on Streamlit Community Cloud.",
    icon: React.createElement(FaPython),
    date: "May 2026 - Jul 2026",
    style: { background: "#fff", color: "#3776AB", outline: "none" },
  },
  {
    title: "Overall Coordinator - Aparoksha Techfest",
    location: "Prayagraj, UP",
    description:
      "Managed event scheduling, outreach, and execution for IIIT Allahabad's annual techfest, facilitating coding competitions and technical events for 2,000+ participants.",
    icon: React.createElement(FaUsers),
    date: "Jan 2026 - Apr 2026",
    style: { background: "#fff", color: "#FF5722", outline: "none" },
  },
  {
    title: "Coordinator, Web Development Wing - GDG IIITA",
    location: "Prayagraj, UP",
    description:
      "Led the Web Development Wing at Google Developer Group IIITA and mentored 50+ students in core web development through hands-on workshops and collaborative projects.",
    icon: React.createElement(CgWorkAlt),
    date: "Oct 2024 - Present",
    style: { background: "#fff", color: "#EA4335", outline: "none" },
  },
  {
    title: "B.Tech in Information Technology - IIIT Allahabad",
    location: "Prayagraj, UP",
    description:
      "Pursuing B.Tech in IT (CGPA: 8.30). Flipkart GRID 7.0 National Semi-Finalist, LeetCode 1990+ (Top 2%), CodeChef 2000+ (5-Star), and Codeforces 1700+ (Expert).",
    icon: React.createElement(LuGraduationCap),
    date: "Aug 2023 - Jun 2027",
    style: { background: "#fff", color: "#FFC107", outline: "none" },
  },
  {
    title: "12th Grade - GVPM Highschool",
    location: "Chalisgaon, MH",
    description:
      "Completed 12th grade from GVPM Highschool, focusing on science and technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    style: { background: "#fff", color: "#FFC107", outline: "none" },
  },
  {
    title: "10th Grade - Good Shepherd Academy",
    location: "Chalisgaon, MH",
    description:
      "Completed 10th grade from Good Shepherd Academy, laying a strong foundation for my education.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    style: { background: "#fff", color: "#FFC107", outline: "none" },
  },
] as const;

// export const projectsData = [
//   {
//     title: "CorpComment",
//     description:
//       "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
//     tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
//     imageUrl: corpcommentImg,
//   },
//   {
//     title: "rmtDev",
//     description:
//       "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
//     tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
//     imageUrl: rmtdevImg,
//   },
//   {
//     title: "Word Analytics",
//     description:
//       "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
//     tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
//     imageUrl: wordanalyticsImg,
//   },
// ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Redux",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flask",
  "Streamlit",
  "WebSockets",
  "WebRTC",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "SQLite",
  "FAISS",
  "Firebase",
  "SQL",
  "PL/SQL",
  "Docker",
  "AWS EC2",
  "Linux",
  "CI/CD",
  "Git / GitHub",
  "GitHub Actions",
  "LLMs (Ollama / Groq)",
  "OpenAI SDK",
  "Pandas",
  "Tailwind CSS",
  "ShadCN/UI",
  "Framer Motion",
  "Material-UI",
  "Bootstrap",
  "Postman",
  "Cloudinary",
  "C",
  "C++",
  "Java",
  "Python",
] as const;