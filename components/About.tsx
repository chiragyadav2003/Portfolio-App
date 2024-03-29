"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import {useSectionInView} from '@/lib/hooks'

function About() {

  const {ref} = useSectionInView("About")

  return (
    <motion.section 
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-32"
    initial={{ opacity: 0, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration:0.5,delay: 0.2 }}
    id='about'
    ref={ref}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        I am pursuing my degree in{" "}
        <span className="font-medium">Engineering</span>, I decided to pursue my passion for programming. I enrolled in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
        React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">Internship or full-time position</span> as a software
        developer.
        </p>

        <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">Chess</span>. I'm also
        learning how to drive.
        </p>    
    </motion.section>
    )
}

export default About