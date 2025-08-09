import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import { resume } from "@/data/resume";

function useParallax(range = 40) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function Experience() {
    const y = useParallax(40);
    return (
        <section id="experience" className="mx-auto max-w-7xl px-4 mt-16">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Work Experience</h2>
            <motion.div style={{ y }} className="mt-8 space-y-8">
                {resume.workExperience.map((w, i) => (
                    <motion.div key={w.company + i} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                        <Card className="rounded-[20px] border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between gap-2 text-lg md:text-xl">
                                    <div className="font-semibold">{w.role} <span className="opacity-70">@ {w.company}</span></div>
                                    <div className="text-sm opacity-70">{w.startDate} — {w.endDate} · {w.location}</div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {w.projects.map((p) => (
                                    <div key={p.name} className="space-y-3">
                                        <div className="text-base font-medium">{p.name}</div>
                                        <p className="text-sm text-neutral-600 dark:text-neutral-300">{p.description}</p>
                                        <ul className="space-y-2">
                                            {p.keyAchievements.slice(0, 5).map((k) => (
                                                <li key={k} className="flex items-start gap-2 text-sm">
                                                    <ChevronRight className="mt-0.5 h-4 w-4 text-neutral-400" />
                                                    <span>{k}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {p.techStack.slice(0, 8).map((t) => (
                                                <Badge key={t} variant="outline" className="rounded-full border-neutral-300 dark:border-neutral-700">{t}</Badge>
                                            ))}
                                        </div>
                                        <Separator className="bg-neutral-200 dark:bg-neutral-800" />
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
