import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { resume } from "@/data/resume";

function useParallax(range = 40) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), { stiffness: 90, damping: 22, mass: 0.35 });
}

function Pill({ children }) {
    return <span className="inline-block rounded-full border border-neutral-200 dark:border-neutral-800 px-3 py-1 text-xs text-neutral-700 dark:text-neutral-200">{children}</span>;
}

export default function CoreSkills() {
    const y = useParallax(40);
    const buckets = [
        { title: "Frontend", items: resume.technicalSkills.Frontend.slice(0, 4) },
        { title: "Backend", items: resume.technicalSkills.Backend.slice(0, 4) },
        { title: "DevOps & Testing", items: [...resume.technicalSkills.DevOps.slice(0, 2), ...resume.technicalSkills.Testing.slice(0, 2)] },
    ];
    return (
        <section className="mx-auto max-w-7xl px-4 mt-12">
            <motion.div style={{ y }} className="grid md:grid-cols-3 gap-6">
                {buckets.map((b) => (
                    <Card key={b.title} className="rounded-[20px] border-neutral-200 bg-white dark:bg-neutral-900 dark:border-neutral-800">
                        <CardHeader><CardTitle className="font-semibold">{b.title}</CardTitle></CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                            {b.items.map((it) => <Pill key={it}>{it}</Pill>)}
                        </CardContent>
                    </Card>
                ))}
            </motion.div>
        </section>
    );
}
