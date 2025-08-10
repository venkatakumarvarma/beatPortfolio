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

function projectMeta(name) {
    const n = name.toLowerCase();
    if (n.includes("weather")) {
        return {
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            badges: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            ],
        };
    }
    if (n.includes("restaurant")) {
        return {
            logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
            badges: [
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
            ],
        };
    }
    return {
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        badges: [
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        ],
    };
}

export default function Projects() {
    const y = useParallax(40);
    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Projects</h2>
            <motion.div style={{ y }} className="grid md:grid-cols-2 gap-6 mt-8">
                {resume.projects.map((proj) => {
                    const { logo, badges } = projectMeta(proj.name);
                    return (
                        <motion.div
                            key={proj.name}
                            whileHover={{ y: -6 }}
                            transition={{ type: "spring", stiffness: 230, damping: 20 }}
                        >
                            <Card className="rounded-[20px] border-neutral-200 bg-white hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-800 overflow-hidden">
                                <div className="relative w-full h-40 md:h-48 flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-950">
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        className="size-20 md:size-24 rounded-full bg-white dark:bg-neutral-800 shadow-md flex items-center justify-center"
                                    >
                                        <img
                                            src={logo}
                                            alt={`${proj.name} logo`}
                                            className="w-10 h-10 md:w-12 md:h-12 object-contain"
                                        />
                                    </motion.div>
                                    <div className="absolute bottom-2 right-2 flex gap-1">
                                        {badges.map((b) => (
                                            <img
                                                key={b}
                                                src={b}
                                                alt="tech"
                                                className="w-5 h-5 rounded-full bg-white p-1 shadow"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <CardHeader>
                                    <CardTitle className="text-lg md:text-xl text-neutral-900 dark:text-white">
                                        {proj.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <p className="text-sm text-neutral-600 dark:text-neutral-300">{proj.description}</p>
                                    <Button className="rounded-full dark:bg-white dark:text-neutral-900" asChild>
                                        <a href={proj.link} target="_blank" rel="noreferrer">
                                            Visit <ExternalLink className="ml-2 h-4 w-4" />
                                        </a>
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
