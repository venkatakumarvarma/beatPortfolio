import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { resume } from "@/data/resume";

function useParallax(range = 32) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), {
        stiffness: 90,
        damping: 22,
        mass: 0.35,
    });
}

function projectMeta(name) {
    const n = name.toLowerCase();
    if (n.includes("weather") || n.includes("portfolio")) {
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
    const y = useParallax(32);

    return (
        <section id="projects" className="mx-auto max-w-7xl px-4 mt-14">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                Projects
            </h2>

            <motion.div
                style={{ y }}
                className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
            >
                {resume.projects.map((proj) => {
                    const { logo, badges } = projectMeta(proj.name);
                    return (
                        <motion.div
                            key={proj.name}
                            whileHover={{ y: -4 }}
                            transition={{ type: "spring", stiffness: 230, damping: 18 }}
                        >
                            <Card className="rounded-2xl border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden hover:shadow-md transition">
                                {/* Thumb */}
                                <div className="relative w-full h-28 md:h-32 flex items-center justify-center bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-neutral-900 dark:to-neutral-950">
                                    <motion.div
                                        whileHover={{ scale: 1.04 }}
                                        className="size-14 md:size-16 rounded-full bg-white dark:bg-neutral-800 shadow-sm flex items-center justify-center"
                                    >
                                        <img
                                            src={logo}
                                            alt={`${proj.name} logo`}
                                            className="w-7 h-7 md:w-8 md:h-8 object-contain"
                                        />
                                    </motion.div>
                                    <div className="absolute bottom-2 right-2 flex gap-1">
                                        {badges.map((b) => (
                                            <img
                                                key={b}
                                                src={b}
                                                alt="tech"
                                                className="w-4 h-4 rounded-full bg-white p-[2px] shadow"
                                            />
                                        ))}
                                    </div>
                                </div>

                                {/* Body (compact paddings) */}
                                <CardHeader className="p-4 pb-1">
                                    <CardTitle className="text-base md:text-[17px] text-neutral-900 dark:text-white line-clamp-1">
                                        {proj.name}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="p-4 pt-2 space-y-3">
                                    <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-300 line-clamp-2">
                                        {proj.description}
                                    </p>
                                    <Button
                                        className="rounded-full h-8 px-3 text-xs dark:bg-white dark:text-neutral-900"
                                        asChild
                                    >
                                        <a href={proj.link} target="_blank" rel="noreferrer">
                                            Visit <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
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
