import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Blog from "../public/blog.png"
import compiler from "../public/compiler.jpg"

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
    title: "Graduated bootcamp",
    location: "Delhi, India",
    description:"I graduated after 6 months of studying.",
    icon: React.createElement(LuGraduationCap), 
    //**we are using ts file so we can not use jsx/tsx syntax here so we are using React.createElement
    date: "2024",
    },
    {
    title: "Full-Stack Developer",
    location: "Delhi, India",
    description:"I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Mega Blog App",
        description:
        "A blogging app where user can create, update, read and delete blogs. It has a user authentication system and a dashboard for the user to manage their blogs.",
        tags: ["React", "Appwrite", "Redux", "Tailwind","react-hook-form","timymce-react"],
        imageUrl: Blog,
        link:"https://mega-blog-self.vercel.app/"
    },
    {
        title: "CodePen",
        description:
        "CodePen is an APP for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor where developers can create code snippets, and test them.",
        tags: ["React","codemirror","material-ui","react-codemirror"],
        imageUrl: compiler,
        link:"https://codepen-clone-lime.vercel.app/",
    }
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
    "Prisma",
    "MongoDB",
    "Redux",
    "Express",
    "PostgreSQL",
    "Framer Motion",
    "Appwrite",
    "Material-UI",
    "Chakra-UI",
    "Bootstrap",
    "Jest",
    "React-Query",
    "Netlify",
    "Vercel",
    "Windows",
    "C",
    "C++",
    "Java",
] as const;
