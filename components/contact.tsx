"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import SubmitBtn from './submitBtn';
import {motion} from 'framer-motion';
import {useSectionInView} from '@/lib/hooks'
import { sendEmail } from '@/actions/sendEmail';
import toast from 'react-hot-toast';

export default function Contact() {
    const {ref} = useSectionInView('Contact',0.40)

  return (
    <motion.section
    ref={ref}
    id='contact'
    className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center '
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    viewport={{once: true}}
    >
        <SectionHeading>Contact Me</SectionHeading>
        <p className='text-gray-700 -mt-6'>Please contact me directly at {" "}
            <a href='mailto:yadavchirag9009@gmail.com' className='underline font-semibold ' >
            yadavchirag9009@gmail.com</a> or through this form.
        </p>
        <form
            className="mt-10 flex flex-col dark:text-black"
            // action={async(FormData)=>{
            //   console.log("running on client")
            //   console.log(FormData.get("senderEmail"), FormData.get("message"))
            //   await sendEmail(FormData)
            // }}

            // action={sendEmail}

            action={async(FormData)=>{
              const {data,error} = await sendEmail(FormData)
              if(error){
                toast.error(error)
                return;
              }
              toast.success('Message sent successfully! I will get back to you soon.')
            }}
          >
            <input
              className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="senderEmail"
              type="email"
              required
              maxLength={500}
              placeholder="Your email"
            />
            <textarea
              className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
              name="message"
              placeholder="Your message"
              required
              maxLength={5000}
            />
            <SubmitBtn />
        </form>
    </motion.section>
  )
}
