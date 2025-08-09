import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { resume } from "@/data/resume";

function useParallax(range = 20) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function About() {
    const y = useParallax(20);
    return (
        <section id="about" className="mx-auto max-w-7xl px-4 mt-16">
            <motion.h2 style={{ y }} className="text-2xl md:text-3xl font-semibold tracking-tight">About</motion.h2>
            <motion.p style={{ y }} className="mt-4 max-w-3xl text-neutral-600 dark:text-neutral-300">{resume.professionalSummary}</motion.p>
        </section>
    );
}
