"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import { skillsData } from '@/lib/data'
import {useSectionInView} from '@/lib/hooks';
import {motion, stagger} from 'framer-motion';

const variants = {
    initial : {
        opacity:0,
        y:100
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            staggerChildren:0.1,
            duration:0.5
        }
    }
}

export default function Skills() {
    const {ref} = useSectionInView("Skills")
  return (
    <section
    ref = {ref}
    id='skills'
    className='mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 '
    >
        <SectionHeading>Skills</SectionHeading>

        <motion.ul 
        variants={variants}
        initial='initial'
        whileInView='animate'
        viewport={{once:true}}
        className=' flex flex-wrap justify-center gap-2 text-lg text-gray-800 '>
            {
                skillsData.map((skill,index)=>{
                    return(
                        <motion.li key={index}
                        variants={variants}
                        className='bg-white border borderBlack rounded-xl px-5 py-3'
                        >
                            {skill}
                        </motion.li>
                    )
                })
            }
        </motion.ul>

    </section>
  )
}
