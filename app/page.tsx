import About from "./Components/About";
import Intro from "./Components/Intro";
import SectionDivider from "./Components/SectionDivider";
import SectionDividerProjects from "./Components/SectionDividerProjects";
import Projects from "./Components/Projects"
import { Metadata } from "next";
import SectionDividerSkills from "./Components/SectionDividerSkills";
import Skills from "./Components/Skills";
import SectionDividerExperience from "./Components/SectionDividerExperience";
import Experience from "./Components/Experience";
import SectionDividerContact from "./Components/SectionDividerContact";
import { Contact } from "./Components/Contact";
import Footer from "./Components/Footer";

export const metadata: Metadata = {
  title: "Parth Chavan | Portfolio",
  description: "Parth Chavan is a Frontend developer with 2 years of experience",
  icons : {
    icon : "/portfolio.png",

  }
};

export default function Home() {
  return (
    <main className={`flex flex-col items-center px-4 `}>
        <Intro/>
        <SectionDivider/>
        <About/>
        <SectionDividerProjects/>
        <Projects/>
        <SectionDividerSkills/>
        <Skills/>
        <SectionDividerExperience/>
        <Experience/>
        <SectionDividerContact/>
        <Contact/>
        <Footer/>
    </main>
  );
}
