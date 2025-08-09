import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, Sun, Moon } from "lucide-react";
import { resume } from "@/data/resume";

function useTheme() {
    const [theme, setTheme] = useState("light");
    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(stored || (prefersDark ? "dark" : "light"));
    }, []);
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);
    return { theme, setTheme };
}

export default function Nav() {
    const { theme, setTheme } = useTheme();
    return (
        <div className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-neutral-200 dark:bg-neutral-900/70 dark:border-neutral-800">
            <div className="mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
                <div className="text-sm tracking-widest font-semibold text-neutral-900 dark:text-neutral-100">{resume.name}</div>
                <div className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
                    <a href="#home" className="opacity-80 hover:opacity-100">Home</a>
                    <a href="#experience" className="opacity-80 hover:opacity-100">Experience</a>
                    <a href="#projects" className="opacity-80 hover:opacity-100">Projects</a>
                    <a href="#about" className="opacity-80 hover:opacity-100">About</a>
                    <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline" className="rounded-full h-9 px-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle theme">
                        {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                    </Button>
                    <Button className="rounded-full bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" asChild>
                        <a href={resume.github} target="_blank" rel="noreferrer"><Download className="h-4 w-4 mr-2" />Download CV</a>
                    </Button>
                </div>
            </div>
        </div>
    );
}
