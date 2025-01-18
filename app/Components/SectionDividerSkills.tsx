"use client"

import React from 'react';
import { motion } from 'framer-motion'

export default function SectionDividerSkills() {
  return (
    <motion.div
      id = "skills"
      className="bg-gray-300 mt-16 mb-8 h-16 w-[2px] rounded-full hidden sm:block"
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
  )
}
