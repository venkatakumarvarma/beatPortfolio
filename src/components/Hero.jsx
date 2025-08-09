import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { resume, HERO_IMG } from "@/data/resume";

function useParallax(range = 80) {
    const { scrollY } = useScroll();
    const raw = useTransform(scrollY, [0, 600], [0, range]);
    return useSpring(raw, { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function Hero() {
    const yBack = useParallax(160);
    const yImg = useParallax(70);
    const yPanel = useParallax(40);
    const yText = useParallax(20);

    return (
        <section id="home" className="relative w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-sky-100/60 via-transparent to-transparent dark:from-sky-900/30" />
            <div className="relative mx-auto max-w-7xl px-4 pt-16 md:pt-24">
                <motion.div style={{ y: yBack }} className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-sky-400/40 to-violet-600/40 dark:from-sky-500/20 dark:to-violet-700/20" />
                <div className="grid md:grid-cols-2 gap-10 items-center">
                    <motion.div style={{ y: yText }} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">{resume.name}</h1>
                        <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl">{resume.professionalSummary}</p>
                        <div className="flex flex-wrap gap-3">
                            <Button variant="outline" className="rounded-full" asChild><a href={`mailto:${resume.contact.email}`}><Mail className="h-4 w-4 mr-2" />Email</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={`tel:${resume.contact.phone}`}><Phone className="h-4 w-4 mr-2" />Call</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={`https://${resume.contact.linkedin.replace(/^https?:\/\//, "")}`} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={resume.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2" />GitHub</a></Button>
                            <Button variant="outline" className="rounded-full" asChild><a href={resume.contact.website} target="_blank" rel="noreferrer"><Globe className="h-4 w-4 mr-2" />Website</a></Button>
                        </div>
                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{resume.contact.location}</div>
                    </motion.div>

                    <div className="relative">
                        <motion.div style={{ y: yPanel }} className="absolute inset-0 rounded-[24px] border border-neutral-200 dark:border-neutral-800 bg-[radial-gradient(1000px_500px_at_80%_-20%,#f5efe6,transparent),linear-gradient(180deg,#fff,#f6f6f6)] dark:bg-[radial-gradient(1000px_500px_at_80%_-20%,#223,transparent),linear-gradient(180deg,#0a0a0a,#0f0f10)]" />
                        <motion.img
                            src={HERO_IMG}
                            alt="hero"
                            style={{ y: yImg }}
                            className="relative z-10 rounded-[20px] w-full max-w-[520px] md:max-w-[560px] h-44 md:h-72 object-cover shadow-[0_20px_80px_-20px_rgba(0,0,0,0.35)] mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
