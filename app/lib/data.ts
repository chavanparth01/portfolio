import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "10th Grade - Good Shepherd Academy",
    location: "Chalisgaon, MH",
    description:
      "I completed my 10th grade from Good Shepherd Academy, laying a strong foundation for my education.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
    style: { background: "#fff", color: "#FFC107", outline: "none" },
  },
  {
    title: "12th Grade - GVPM Highschool",
    location: "Chalisgaon, MH",
    description:
      "I pursued my 12th grade from GVPM Highschool, focusing on science and technology.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
    style: { background: "#fff", color: "#FFC107", outline: "none" },
  },
  {
    title: "Front-End",
    location: "Praygraj, UP",
    description:
      "I am currently an active member of GDSC IIITA, contributing to web development projects and enhancing my skills in frontend and full-stack development.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
    style: { background: "#fff", color: "#FF5722", outline: "none" },
  },
  {
    title: "Full-Stack Web Developer (React, Next.js)",
    location: "Prayagraj, UP",
    description:
      "I am familiar with React and Next.js, having built several full-stack web applications that showcase my skills in developing responsive, dynamic, and efficient web solutions.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
    style: { background: "#fff", color: "#61DAFB", outline: "none" }
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
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;