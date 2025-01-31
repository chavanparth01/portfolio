"use client"

import React, { useState } from 'react'
import { HiMiniSpeakerWave } from 'react-icons/hi2'
import { PiSpeakerSimpleNoneFill } from 'react-icons/pi';
import { motion } from 'framer-motion';
import { useSound } from '../Context/SoundContext';

export default function Sound() {

    const { sound, setSound, toggle } = useSound();
    return (
        <button
            className="fixed bottom-5 left-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-900"
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
