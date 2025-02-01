"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import useSectionInView from "../lib/Hooks/Hooks";
import { useTheme } from "../Context/ThemeContextProvider";

const testimonials = [
    {
        title:
            "iBlog",
        about: "An engaging JavaScript shooting game where users aim to hit enemies, testing precision and reflexes in a fast-paced environment.",
        image: "/Blog.png",
        name: "By Parth Chavan",
        link: "https://www.google.com/",
    },
    {
        title:
            "Core Blaster",
        about: "An interactive quiz-based learning platform designed to strengthen core CS concepts with gamified experiences.",
        image: "/core-blaster.png",
        name: "By Parth Chavan",
        link: "https://core-blaster.vercel.app/",
    },
    {
        title:
            "Academic Archive",
        about: "A comprehensive student resource hub providing access to semester-specific notes, question papers, and materials.",
        image: "/academic-archive.png",
        name: "By Parth Chavan",
        link: "https://academic-archives.netlify.app/",
    },
    {
        title:
            "Hackify",
        about: "A dynamic hackathon manager app featuring an admin panel for creating hackathons and a user-friendly interface for participants to join and track events.",
        image: "/hackify.png",
        name: "By Parth Chavan",
        link: "https://github.com/chinmoypanwar1/HackifyLeague",
    },
    {
        title:
            "Text Utils",
        about: "Provides various tools to manipulate and analyze text efficiently, offering features like case conversion, word count, and text clearing for streamlined content",
        image: "/Text-Utils.png",
        name: "By Parth Chavan",
        link: "https://www.google.com/",
    },

];

export default function MovingCards() {

    const { isDark } = useTheme();

    const ref = useSectionInView("Projects", 0.5);

    return (
        <>
            <div ref={ref} className="min-h-[55rem] w-[400px] sm:w-full rounded-md flex flex-col antialiased bg-slate-50 dark:bg-black dark:bg-grid-white/[0.3] items-center justify-center relative overflow-hidden"
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
                    speed="normal"
                />

            </div>
        </>
    )
}
