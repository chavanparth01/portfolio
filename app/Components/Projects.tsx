"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import useSectionInView from "../lib/Hooks/Hooks";
import { useTheme } from "../Context/ThemeContextProvider";

const testimonials = [
    {
        title: "Com-X",
        about: "Real-time collaboration workspace with WebSockets & WebRTC chat/video for 100+ users, customizable dashboards, and task scheduling for 15+ concurrent workflows.",
        image: "/comx.png",
        name: "By Parth Chavan",
        link: "https://com-x-eight.vercel.app/",
    },
    {
        title: "Autonomous Local AI Agent",
        about: "ReAct-based AI agent using Ollama/Groq & OpenAI SDK with multi-step tool calling, sliding-window context management, JIT path sandbox, and SQLite memory.",
        image: "/local-ai-agent.png",
        name: "By Parth Chavan",
        link: "https://pc-local-ai-agent.streamlit.app/",
    },
    {
        title: "Nyay Sahayak",
        about: "Legal AI retrieval system powered by FAISS IVF_PQ hybrid search, cross-encoder reranking, and a Dockerized Flask API on AWS EC2 with CI/CD (140ms p50 latency).",
        image: "/nyay-sahayak.png",
        name: "By Parth Chavan",
        link: "https://github.com/yojitk/Legal_AI_RAGBot",
    },
    {
        title: "CBAM & BRSR ESG Benchmarking",
        about: "Full-stack research intern project built with Python, Streamlit, and Pandas to benchmark EU carbon compliance (CBAM) against Indian BRSR filings with ReportLab scorecards.",
        image: "/cbam-esg.png",
        name: "By Parth Chavan",
        link: "https://github.com/chavanparth01/corpus-iiita-26",
    },
    {
        title: "Core Blaster",
        about: "An interactive JavaScript HTML5 Canvas and Audio API shooting game testing precision and reflexes in a fast-paced environment.",
        image: "/core-blaster.png",
        name: "By Parth Chavan",
        link: "https://core-blaster.vercel.app/",
    },
    {
        title: "Hackify",
        about: "A dynamic hackathon manager app featuring an admin panel for creating hackathons and a user-friendly interface for participants to join and track events.",
        image: "/hackify.png",
        name: "By Parth Chavan",
        link: "https://github.com/chinmoypanwar1/HackifyLeague",
    },
];

export default function MovingCards() {

    const { isDark } = useTheme();

    const ref = useSectionInView("Projects", 0.5);

    return (
        <>
            <div id="projects" ref={ref} className="min-h-[55rem] w-[400px] sm:w-full rounded-md flex flex-col antialiased bg-slate-50 dark:bg-black dark:bg-grid-white/[0.3] items-center justify-center relative overflow-hidden scroll-mt-28"
            // style={{
            //     WebkitMaskImage:
            //       "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            //     maskImage: "radial-gradient(circle, rgba(0,0,0,1) 70%, rgba(0,0,0,0) 100%)",
            //     WebkitMaskRepeat: "no-repeat",
            //     maskRepeat: "no-repeat",
            //   }}
            >

                {isDark && <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>}

                <div className="text-4xl font-mono text-center font-black text-gray-700 my-16 dark:bg-black dark:text-white dark:bg-fading-grid">
                    Take A look At my Projects
                </div>

                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="fast"
                />

            </div>
        </>
    )
}
