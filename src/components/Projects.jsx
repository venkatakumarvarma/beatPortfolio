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
function projectImage(name) {
    const q = encodeURIComponent(name.split(" ").slice(0, 2).join(" "));
    return `https://source.unsplash.com/800x500/?${q},app,website`;
}

export default function Projects() {
    const y = useParallax(40);
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
            <motion.div style={{ y }} className="grid md:grid-cols-2 gap-6 mt-8">
                {resume.projects.map((proj) => (
                    <motion.div key={proj.name} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                        <Card className="rounded-[20px] border-neutral-200 bg-white hover:shadow-md transition dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden">
                            <img src={projectImage(proj.name)} alt={proj.name} className="w-full h-40 md:h-48 object-cover" />
                            <CardHeader><CardTitle className="text-lg md:text-xl">{proj.name}</CardTitle></CardHeader>
                            <CardContent className="space-y-3">
                                <p className="text-sm text-neutral-600 dark:text-neutral-300">{proj.description}</p>
                                <Button className="rounded-full dark:bg-white dark:text-neutral-900" asChild>
                                    <a href={proj.link} target="_blank" rel="noreferrer">Visit <ExternalLink className="ml-2 h-4 w-4" /></a>
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
