import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";

function useParallax(range = 40) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), { stiffness: 90, damping: 22, mass: 0.35 });
}

const logoFor = (name) => {
    const n = name.toLowerCase();
    if (n.includes("weather")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg";
    if (n.includes("restaurant")) return "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg";
    return null;
};

const gradientFallback =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(`<svg xmlns='http://www.w3.org/2000/svg' width='800' height='400'>
  <defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop stop-color='#7dd3fc' offset='0'/><stop stop-color='#c4b5fd' offset='1'/></linearGradient></defs>
  <rect width='100%' height='100%' fill='url(#g)'/></svg>`);

export default function Projects() {
    const y = useParallax(40);
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Projects</h2>
            <motion.div style={{ y }} className="grid md:grid-cols-2 gap-6 mt-8">
                {resume.projects.map((proj) => {
                    const logo = logoFor(proj.name);
                    return (
                        <motion.div key={proj.name} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                            <Card className="rounded-[20px] border-neutral-200 bg-white hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden">
                                <div className="w-full h-40 md:h-48 bg-white dark:bg-neutral-950 flex items-center justify-center">
                                    {logo ? (
                                        <img src={logo} alt={`${proj.name} logo`} className="w-16 h-16 object-contain" />
                                    ) : (
                                        <img src={gradientFallback} alt="placeholder" className="w-full h-full object-cover" />
                                    )}
                                </div>
                                <CardHeader><CardTitle className="text-lg md:text-xl text-neutral-900 dark:text-white">{proj.name}</CardTitle></CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{proj.description}</p>
                                    <Button className="rounded-full dark:bg-white dark:text-neutral-900" asChild>
                                        <a href={proj.link} target="_blank" rel="noreferrer">Visit <ExternalLink className="ml-2 h-4 w-4" /></a>
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
}

