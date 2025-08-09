import React from "react";
import { Toaster } from "sonner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechHoneycomb from "@/components/TechHoneycomb";
import CoreSkills from "@/components/CoreSkills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { resume } from "@/data/resume";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100 transition-colors">
      <Toaster richColors />
      <Nav />
      <Hero />
      <TechHoneycomb />
      <CoreSkills />
      <Experience />
      <Projects />
      <About />
      <Contact />
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10 mt-10">
        <div className="mx-auto max-w-7xl px-4 flex flex-wrap items-center justify-between gap-4 text-sm text-neutral-600 dark:text-neutral-400">
          <div>© {new Date().getFullYear()} {resume.name}</div>
          <div className="flex items-center gap-3">
            <a className="hover:opacity-100 opacity-80" href="https://github.com/kkammili" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:opacity-100 opacity-80" href="https://www.linkedin.com/in/krishnamraju-kammili" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:opacity-100 opacity-80" href="http://www.bhimavarambiryanis.com/" target="_blank" rel="noreferrer">Website</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
