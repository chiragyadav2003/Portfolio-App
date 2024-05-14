import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import Blog from "../public/blog.png";
import compiler from "../public/compiler.jpg";
import BudgetTracker from "../public/BudgetTracker.jpg";
import paytm from "../public/paytm.jpg"

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
        description: "I graduated after 6 months of studying.",
        icon: React.createElement(LuGraduationCap),
        //**we are using ts file so we can not use jsx/tsx syntax here so we are using React.createElement
        date: "2024",
    },
    {
        title: "Full-Stack Developer",
        location: "Delhi, India",
        description: "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma ORM, Connection Pooling, Serverless(CLoudFlare-Workers) and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2024 - present",
    },
] as const;

export const projectsData = [
    {
        title: "BudgetTracker",
        description:
            "BudgetTracker is a cutting-edge end-to-end budget management application built using a robust technology stack and a variety of other innovative tools.",
        tags: ["TypeScript", "React.js", "Next.js", "PostgreSQL", "Prisma", "tailwind CSS", "TanStack Query", "CLerk Auth", "Zod Validation", "ReCharts"],
        imageUrl: BudgetTracker,
        link: "https://budget-tracker-chirag-yadavs-projects.vercel.app/"
    },
    {
        title: "Paytm",
        description:
            "This project is a solo endeavor showcasing a web application inspired by digital payment platforms. Users can create accounts, transfer funds, and send money securely.",
        tags: ["Node.js", "Docker", "AWS", "Tailwind", "Typescript", "Prisma ORM", "Postgres", "Next.js", "CI-CD pipeline", "Turborepo", "Recoil", "Bcrypt", "NextAuth"],
        imageUrl: paytm,
        link: "https://github.com/chiragyadav2003/Paytm"
    },
    {
        title: "DevBlog",
        description:
            "A blogging app where user can create, update, read and delete blogs. It has a user authentication system and a dashboard for the user to manage their blogs.",
        tags: ["React", "ClouFlare-Workere", "Zod", "Tailwind", "Typescript", "Prisma ORM", "Connection Pooling", "Postgres", "JWT", "NPM Publish"],
        imageUrl: Blog,
        link: "https://dev-blog-alpha-ten.vercel.app/"
    },
    {
        title: "CodePen",
        description:
            "CodePen is an APP for testing and showcasing user-created HTML, CSS and JavaScript code snippets. It functions as an online code editor where developers can create code snippets, and test them.",
        tags: ["React", "codemirror", "material-ui", "react-codemirror"],
        imageUrl: compiler,
        link: "https://codepen-clone-lime.vercel.app/",
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Hono.js",
    "React.js",
    "Next.js",
    "Docker",
    "Prisma",
    "Node.js",
    "Git",
    "GitHub",
    "Tailwind",
    "Prisma",
    "Connection Pooling",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Redux",
    "Recoil",
    "Zustand",
    "Express",
    "Framer Motion",
    "Appwrite",
    "Shadcn UI",
    "Radix UI",
    "Material-UI",
    "Chakra-UI",
    "Bootstrap",
    "Serverless(Cloudflare workers)",
    "Jest",
    "tenStack-Query",
] as const;
