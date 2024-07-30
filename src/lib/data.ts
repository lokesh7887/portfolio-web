// import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/../public/corpcomment.png";
import rmtdevImg from "@/../public/rmtdev.png";
import wordanalyticsImg from "@/../public/wordanalytics.png";

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
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// export const experiencesData = [
//   {
//     title: "Graduated bootcamp",
//     location: "Miami, FL",
//     description:
//       "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
//     icon: React.createElement(LuGraduationCap),
//     date: "2019",
//   },
//   {
//     title: "Front-End Developer",
//     location: "Orlando, FL",
//     description:
//       "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
//     icon: React.createElement(CgWorkAlt),
//     date: "2019 - 2021",
//   },
//   {
//     title: "Full-Stack Developer",
//     location: "Houston, TX",
//     description:
//       "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
//     icon: React.createElement(FaReact),
//     date: "2021 - present",
//   },
// ] as const;

export const projectsData = [
  {
    title: "Mystrymessage",
    description:
      "Developed a full-stack web application using NestJS for the backend API. Implemented data modeling with Mongoose",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Resend Email Library"],
    imageUrl: corpcommentImg,
    link:"https://github.com/lokesh7887/mystrymessage",
  },
  {
    title: "MERN-GitHub-Repo.-App",
    description:
      "Built a full-stack web application using the MERN stack to interact with the GitHub API.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "GitHub API"],
    imageUrl: rmtdevImg,
    link:"https://github.com/lokesh7887/mern-github",
  },
  {
    title: "snake-web-game",
    description:
      "Developed a classic Snake game using HTML, CSS, and JavaScript, providing an engaging and interactive user experience.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    imageUrl: wordanalyticsImg,
    link:"https://github.com/lokesh7887/snake--web-game/tree/main/SnakeGame",
  },
] as const;

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
  "MongoDB",
  "Redux",
  "Java",
  "OOP",
  "Express",
  "MySQL",
  "Python",
  "Framer Motion",
] as const;