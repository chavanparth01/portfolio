"use client";
import React, { useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"
import useSectionInView from "../lib/Hooks/Hooks";
import Experience from "./Experience";
import SectionHeading from "./SectionHeading";

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

    const ref = useSectionInView("Projects" , 0.5)

    type TypeOfSpeed = "normal" | "fast" | "slow" | undefined;
    const [speed, setSpeed] = useState<TypeOfSpeed>("normal");
    const [key, setKey] = useState(0); 

    // const handleSpeed = (newSpeed: TypeOfSpeed) => {
    //     setSpeed(newSpeed);
    //     console.log(`speed changed to ${newSpeed}`);
    //     setKey(key+1);
    // }

    return (
        <>
            <div ref = {ref} className="min-h-[40rem] mt-10 mb-10 rounded-md flex flex-col antialiased bg-slate-50  dark:bg-grid-white/[0.3] items-center justify-center relative"
            >
                <SectionHeading>
                    Take A look At my Projects
                </SectionHeading>

                <InfiniteMovingCards
                    key = {key}
                    items={testimonials}
                    direction="right"
                    speed={speed}
                />

            </div>
        </>
    )
}
