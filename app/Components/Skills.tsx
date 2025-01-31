"use client";

import React from 'react';
import { skillsData } from '../lib/data';
import { motion } from 'framer-motion';
import useSectionInView from '../lib/Hooks/Hooks';
import SectionHeading from './SectionHeading';

export default function Skills() {
    const ref = useSectionInView("Skills", 0.5);

    // Define animation variants
    // const containerVariants = {
    //     hidden: {
    //         opacity: 0,
    //     },
    //     show: {
    //         opacity: 1,
    //         transition: {
    //             staggerChildren: 0.1, // Stagger animation with 0.1s delay
    //         },
    //     },
    // };

    // const itemVariants = {
    //     hidden: {
    //         opacity: 0,
    //         y: 20, // Start with a slight downward offset
    //     },
    //     show: {
    //         opacity: 1,
    //         y: 0, // Animate to its original position
    //         transition: {
    //             duration: 0.3,
    //         },
    //     },
    // };

    const component = (
        <motion.div
            className="max-w-[53rem] flex flex-row flex-wrap"
            //   variants={containerVariants}
            //   initial="hidden"
            //   whileInView="show"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                staggerChildren: 0.1,
            }}
            whileInView="animate"
            viewport={{ once: true }} // Ensures animation runs only once when in view
        >
            {skillsData.map((skill, idx) => (
                <motion.div
                    key={idx}
                    className="p-3 m-4 bg-white text-gray-400 text-center shadow-lg rounded-2xl dark:bg-gray-900 dark:text-gray-200 dark:shadow-white"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                        delay: 0.1*idx,
                        duration: 0.3
                    }}
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    {skill}
                </motion.div>
            ))}
        </motion.div>
    );

    return (
        <div ref={ref}>
            <SectionHeading>
                My Skills
            </SectionHeading>
            {component}
        </div>
    );
}
