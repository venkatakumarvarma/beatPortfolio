// src/components/Hero.jsx
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { resume } from "@/data/resume";

function useParallax(range = 20) {
    const { scrollY } = useScroll();
    const raw = useTransform(scrollY, [0, 600], [0, range]);
    return useSpring(raw, { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function Hero() {
    const yBlob = useParallax(10);
    const yPic = useParallax(8);
    const yText = useParallax(4);
    const heroSrc = `${import.meta.env.BASE_URL}hero.png`; // public/hero.png

    return (
        <section
            id="home"
            className="
        relative w-full overflow-hidden
        bg-[radial-gradient(80%_60%_at_10%_0%,rgba(59,130,246,0.10),transparent),linear-gradient(to_bottom,#ffffff,#fafafa)]
        dark:bg-[radial-gradient(80%_60%_at_10%_0%,rgba(37,99,235,0.10),transparent),linear-gradient(to_bottom,#0a0a0a,#0f0f10)]
      "
        >
            <div className="mx-auto max-w-7xl px-4 pt-10 md:pt-14 pb-8 md:pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* LEFT: copy */}
                    <motion.div
                        style={{ y: yText }}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45 }}
                    >
                        <div className="text-[12px] tracking-[0.24em] uppercase text-blue-600/80 dark:text-blue-400/90">
                            Hi, there!
                        </div>

                        <h1 className="mt-2 text-[clamp(2rem,6vw,3.2rem)] leading-[1.05] font-extrabold text-neutral-900 dark:text-white">
                            <span className="text-blue-600 dark:text-blue-400">KUMAR</span> VARMA PAKALAPATI
                        </h1>

                        <p className="mt-3 text-[clamp(0.95rem,1.4vw,1.05rem)] leading-relaxed text-neutral-700 dark:text-neutral-300 max-w-prose">
                            {resume.professionalSummary}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2.5">
                            <Button variant="outline" className="rounded-full h-9" asChild>
                                <a href={`mailto:${resume.contact.email}`}><Mail className="mr-2 h-4 w-4" />Email</a>
                            </Button>
                            <Button variant="outline" className="rounded-full h-9" asChild>
                                <a href={`tel:${resume.contact.phone}`}><Phone className="mr-2 h-4 w-4" />Call</a>
                            </Button>
                            <Button variant="outline" className="rounded-full h-9" asChild>
                                <a href={`https://${resume.contact.linkedin.replace(/^https?:\/\//, "")}`} target="_blank" rel="noreferrer"><Linkedin className="mr-2 h-4 w-4" />LinkedIn</a>
                            </Button>
                            <Button variant="outline" className="rounded-full h-9" asChild>
                                <a href={resume.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
                            </Button>
                        </div>

                        <div className="mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                            {resume.contact.location}
                        </div>
                    </motion.div>

                    {/* RIGHT: portrait on blue blob */}
                    <div className="relative h-[420px] md:h-[520px] lg:h-[440px] md:-mx-4 lg:mx-0">                        {/* dotted accent */}
                        <div className="hidden md:block absolute -left-6 top-6 grid grid-cols-6 gap-2 opacity-30">
                            {Array.from({ length: 18 }).map((_, i) => (
                                <span key={i} className="size-1 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                            ))}
                        </div>

                        {/* blob (blue tones) */}
                        <motion.div
                            style={{ y: yBlob }}
                            className="absolute right-2 top-6 md:right-6 md:top-2 w-[min(72vw,22rem)] h-[min(72vw,22rem)] lg:w-80 lg:h-80 -z-10"
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    background:
                                        "radial-gradient(60% 60% at 50% 40%, rgba(59,130,246,0.95) 0%, rgba(59,130,246,0.80) 45%, rgba(79,70,229,0.85) 100%)", // blue-600 → indigo-600
                                    clipPath:
                                        "path('M195.1 23.7c21.5 15 36.8 40.6 41.7 67.7 4.9 27.1-.6 55.7-15.9 78.5-15.4 22.8-41.6 39.7-68.8 44.4-27.1 4.7-55.2-3-79.2-17.1C49 183.1 26.9 161.6 14.6 136.1 2.3 110.5-.2 81 .8 53.4c1-27.6 5.5-52 20.8-66.8C36.9-28.2 62.9-33.4 87.9-26.5c25 6.9 48.8 25.2 68 50.2 19.3 25 33.2 56.9 39.2 100z')",
                                    filter: "blur(0.5px)",
                                }}
                            />
                        </motion.div>

                        {/* portrait */}
                        <motion.div
                            style={{ y: yPic }}
                            className="absolute right-4 bottom-0 md:right-8 md:bottom-2"
                            initial={{ opacity: 0, y: 12, scale: 0.98 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="rounded-[18px] ring-1 ring-black/5 dark:ring-white/10 shadow-xl overflow-hidden bg-white/70 dark:bg-neutral-900/60 backdrop-blur">
                                <img
                                    src={heroSrc}
                                    alt="Portrait"
                                    className="w-[min(92vw,380px)] h-[min(92vw,460px)] lg:w-[300px] lg:h-[360px] object-cover object-[center_30%]"
                                />
                            </div>

                            {/* floating badges (blue) */}
                            <div className="absolute -left-4 md:-left-6 -top-4 md:-top-6">
                                <div className="rounded-xl bg-white dark:bg-neutral-900 shadow-lg px-3 py-2 text-xs flex items-center gap-2">
                                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-blue-600 text-white">★</span>
                                    <span className="text-neutral-700 dark:text-neutral-200">4.8 Satisfaction</span>
                                </div>
                            </div>
                            <div className="absolute -right-4 md:-right-6 top-10">
                                <div className="rounded-xl bg-white dark:bg-neutral-900 shadow-lg px-3 py-2 text-xs flex items-center gap-2">
                                    <span className="inline-flex size-5 items-center justify-center rounded-full bg-indigo-600 text-white">⚑</span>
                                    <span className="text-neutral-700 dark:text-neutral-200">2K+ Projects</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
