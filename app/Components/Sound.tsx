"use client"

import React from 'react'
import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { PiSpeakerSimpleNoneFill } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useSound } from '../Context/SoundContext';

export default function Sound() {

    const { sound, toggle } = useSound();
    return (
        <button
            aria-label="Toggle sound"
            className="fixed top-[5.25rem] left-4 sm:top-6 sm:left-6 z-[999] w-[3rem] h-[3rem] bg-white/90 backdrop-blur-[0.5rem] border border-black/15 shadow-xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900/90 dark:border-white/20 dark:text-white"
            onClick={toggle}
        >
            {sound ?
                (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <HiMiniSpeakerWave />
                    </motion.div>
                )
                :
                (
                    <motion.div
                        key="moon"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <PiSpeakerSimpleNoneFill />
                    </motion.div>
                )
            }

        </button>
    )
}
