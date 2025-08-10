import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";
import { resume } from "@/data/resume";

function useParallax(range = 20) {
    const { scrollY } = useScroll();
    return useSpring(useTransform(scrollY, [0, 600], [0, range]), { stiffness: 90, damping: 22, mass: 0.35 });
}

export default function Contact() {
    const y = useParallax(20);
    return (
        <section id="contact" className="mx-auto max-w-7xl px-4 mt-16 mb-20">
            <motion.h2 style={{ y }} className="text-2xl md:text-3xl font-semibold tracking-tight">Contact</motion.h2>
            <motion.div style={{ y }} className="mt-6 flex flex-wrap gap-3">
                <Button variant="outline" className="rounded-full" asChild><a href={`mailto:${resume.contact.email}`}><Mail className="h-4 w-4 mr-2" />Email</a></Button>
                <Button variant="outline" className="rounded-full" asChild><a href={`tel:${resume.contact.phone}`}><Phone className="h-4 w-4 mr-2" />Call</a></Button>
                <Button variant="outline" className="rounded-full" asChild><a href={`https://${resume.contact.linkedin.replace(/^https?:\/\//, "")}`} target="_blank" rel="noreferrer"><Linkedin className="h-4 w-4 mr-2" />LinkedIn</a></Button>
                <Button variant="outline" className="rounded-full" asChild><a href={resume.github} target="_blank" rel="noreferrer"><Github className="h-4 w-4 mr-2" />GitHub</a></Button>
                <Button className="rounded-full bg-neutral-900 text-white hover:bg-black dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-100" onClick={async () => { await navigator.clipboard.writeText(resume.contact.email); toast("Email copied"); }}>Copy Email</Button>
            </motion.div>
        </section>
    );
}
