import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { resume } from "@/data/resume";
import hero from '../images/hero.png'

function useParallax(range = 40) {
    const { scrollY } = useScroll();
    const raw = useTransform(scrollY, [0, 600], [0, range]);
    return useSpring(raw, { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function Hero() {
    const yPanel = useParallax(24);
    const yImg = useParallax(12);

    return (
        <section id="home" className="w-full">
            <motion.div
                style={{ y: yPanel }}
                className="mx-auto max-w-7xl px-4 pt-10 md:pt-16 rounded-[28px] overflow-hidden relative isolate shadow-[0_30px_100px_-40px_rgba(0,0,0,0.35)]"
            >
                <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_80%_-20%,theme(colors.sky.100/60),transparent),linear-gradient(180deg,#ffffff,#f6f6f6)] dark:bg-[radial-gradient(1200px_600px_at_80%_-20%,theme(colors.sky.900/30),transparent),linear-gradient(180deg,#0a0a0a,#0f0f10)]" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-4 md:p-8">
                    <motion.div style={{ y: yImg }} className="order-1 md:order-1">
                        <div className="rounded-[22px] overflow-hidden">
                            <img
                                src={hero}
                                alt="Portrait"
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="w-full h-[420px] md:h-[520px] object-cover object-[center_30%] md:object-[center_40%] rounded-[22px]"
                            />

                        </div>
                    </motion.div>

                    <div className="order-2 md:order-2">
                        <h1 className="font-extrabold tracking-tight text-neutral-900 dark:text-white text-[clamp(2rem,5vw,3.75rem)] leading-[1.05]">
                            {resume.name}
                        </h1>
                        <p className="mt-4 text-neutral-700 dark:text-neutral-300 text-[clamp(0.95rem,1.6vw,1.125rem)] max-w-prose">
                            {resume.professionalSummary}
                        </p>
                        <div className="mt-6 flex flex-wrap gap-3">
                            <Button variant="outline" className="rounded-full" asChild><a href={`mailto:${resume.contact.email}`}><Mail className="h-4 w-4 mr-2" />Email</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={`tel:${resume.contact.phone}`}><Phone className="h-4 w-4 mr-2" />Call</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={`https://${resume.contact.linkedin.replace(/^https?:\/\//, "")}`} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={resume.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2" />GitHub</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={resume.contact.website} target="_blank" rel="noreferrer"><Globe className="h-4 w-4 mr-2" />Website</a></Button>
                        </div>
                        <div className="mt-4 text-sm text-neutral-500 dark:text-neutral-400">{resume.contact.location}</div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}