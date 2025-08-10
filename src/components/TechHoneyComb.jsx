import React from "react";
import { motion } from "framer-motion";

// const icon = (local, cdn) => ({ local, cdn });

const techIcons = [
    // Core
    { name: "React", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Angular", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg" },
    { name: "Vue", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" },
    { name: "TypeScript", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Node.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    // Next.js – devicon version that actually shows on white background
    { name: "Next.js", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },

    //Backend
    { name: "Springboot", url: "/java-springboot.png" },
    { name: "Django", url: "/django-logo.png" },
    { name: "Express", url: "/node-express-logo.png" },


    // Cloud/Infra
    { name: "AWS", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
    { name: "Docker", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Jenkins", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
    { name: "PostgreSQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },

    // Testing/State
    { name: "GraphQL", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
    { name: "Cypress", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypressio/cypressio-original.svg" },
    { name: "Playwright", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg" },
    { name: "Redux", url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },

    // AI / Agents – try local logos first, then fall back
    { name: "LangChain", url: "/langchain-logo.png" },
    { name: "n8n", url: "/n8n-logo.png" },
];

function Bubble({ name, url, i }) {
    const [src, setSrc] = React.useState(url);
    React.useEffect(() => {
        // Fallbacks for AI logos (if local file missing)
        if (url === "/logos/langchain.svg") setSrc("/logos/langchain.svg");
        if (url === "/logos/n8n.svg") setSrc("/logos/n8n.svg");
    }, [url]);

    const onError = () => {
        // Simple fallback icon if both local/CDN fail
        setSrc("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg");
    };

    return (
        <motion.div
            className="size-14 md:size-16 rounded-full bg-white/90 dark:bg-neutral-900/90 border border-neutral-200 dark:border-neutral-800 shadow-sm flex items-center justify-center"
            whileHover={{ scale: 1.18 }}
            whileTap={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            title={name}
            style={{ zIndex: 10 + i }}
        >
            <img src={src} onError={onError} alt={name} className="w-7 h-7 md:w-8 md:h-8 object-contain" />
        </motion.div>
    );
}

export default function TechHoneycomb() {
    const rows = [
        techIcons.slice(0, 5),
        techIcons.slice(5, 10),
        techIcons.slice(10, 15),
        techIcons.slice(15),
    ];
    return (
        <section className="mx-auto max-w-7xl px-4 mt-12">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">Tech Stack</h2>
            <div className="mt-6 space-y-4">
                {rows.map((row, r) => (
                    <div key={r} className={`flex gap-3 md:gap-4 justify-center ${r % 2 ? "translate-x-5 md:translate-x-8" : ""}`}>
                        {row.map((t, i) => <Bubble key={t.name} {...t} i={i} />)}
                    </div>
                ))}
            </div>
        </section>
    );
}
