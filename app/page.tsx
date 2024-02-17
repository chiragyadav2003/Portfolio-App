import About from "@/components/About"
import Intro from "@/components/Intro"
import Projects from "@/components/Projects"
import SectionDivider from "@/components/SectionDivider"
import Skills from "@/components/skills"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className=" flex flex-col justify-center items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <Projects/>
      <Skills/>
      <Experience/>
      <Contact/>
    </main>
  )
}
 