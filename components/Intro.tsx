"use client";

import Image from 'next/image'
import React from 'react'
import profilepic from "../public/profilepic.jpg"
import {delay, motion} from 'framer-motion'
import Link from 'next/link';
import { FaArrowRightLong } from "react-icons/fa6";
import {HiDownload} from 'react-icons/hi'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

const imageVariants = {
    initial:{
        opacity:0,
        scale:0.5
    },
    animate:{
        opacity:1,
        scale:1,
        transition:{
            duration:0.5,
            type:"spring",
            stiffness: 1000, 
            damping: 100
        }
    }
}

const emojiVariants = {
    initial:{
        opacity:0,
        x:200,
        scale:0.5
    },
    animate:{
        opacity:1,
        x:0,
        scale:1,
        transition:{
            duration:0.5,
            type:"spring",
            stiffness: 1000, 
            damping: 100,
            delay:0.25
        }
    }
}

const textVariants = {
    initial:{ opacity: 0, y: 200 },
    animate:{ opacity: 1, y: 0, transition:{duration:0.5} }
}

const contactVariants = {
    initial:{ opacity: 0, y: 200 },
    animate:{ opacity: 1, y: 0, transition:{duration:0.5,delay:0.2} }
}

function Intro() {
    return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] "
    id='home'
    >

        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div variants={imageVariants} initial='initial' whileInView='animate' >
                    <Image src={profilepic} width="192" height="192" className='w-[130px] rounded-full h-[130px] object-cover border border-white shadow-xl hover:shadow-white ' quality={95} priority={true}  alt='chirag yadav profile picture' />
                </motion.div>
                <motion.span variants={emojiVariants} initial='initial' whileInView='animate' className='text-4xl absolute bottom-0 right-0 '>
                👋
                </motion.span>
            </div>
        </div>

        <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
            variants={textVariants}
            initial='initial'
            whileInView='animate'
            >
            <span className="font-bold">Hello, I'm Chirag Yadav.</span> I'm a{" "}
            <span className="font-bold">full-stack developer</span> with{" "}
            <span className="font-bold">1.5 years</span> of experience. I enjoy
            building <span className="italic">sites & apps</span>. My focus is{" "}
            <span className="underline">React (Next.js)</span>.
        </motion.h1>

        <motion.div variants={contactVariants} initial='initial' whileInView='animate' className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'> 
            
            <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">Contact me here <FaArrowRightLong className="opacity-70 group-hover:translate-x-1 transition"/> 
            </Link>

            <a
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/20 dark:bg-white/10"
            href="/CV.pdf"
            download
            >
            Download CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>

            <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://www.linkedin.com/in/chirag-yadav-53924922a/"
            target="_blank"
            >
            <BsLinkedin />
            </a>                           

            <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60"
            href="https://github.com/chiragyadav2003"
            target="_blank"
            >
            <FaGithubSquare />
            </a>

        </motion.div>


    </section>
  )
}

export default Intro