"use client"

import React from 'react';
import { motion } from 'framer-motion'

export default function SectionDividerProjects() {
  return (
    <motion.div
      id = "projects"
      className="bg-gray-300 my-24 h-16 w-[2px] rounded-full hidden sm:block"
      initial = {{opacity: 0, y: 100}}
      animate = {{opacity: 1, y: 0}}
      transition={{
        type: "spring",
        stiffness: 80,
        damping: 8,
        duration: 0.5,
        delay: 0.4
      }}
    >
    </motion.div>
  );
}
