"use client"

import React, { useState, useEffect } from 'react'
import { BsSun } from 'react-icons/bs'
import { IoMoonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import playSound from '../utils/playSound';
import { useSound } from '../Context/SoundContext';

export default function ThemeSwitch() {
    type modeType = "dark" | "light";
    const [mode, setMode] = useState<modeType>("light");
    const { sound } = useSound();

    useEffect(() => {
        const savedMode = localStorage.getItem('mode') as modeType | null;
        if (savedMode) {
            setMode(savedMode);
            if (savedMode === 'dark') {
                document.documentElement.classList.add("dark");
            }
        } 
        else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setMode("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    function handleClick() {
        if (mode === "light") {
            setMode("dark");
            localStorage.setItem('mode', "dark");
            document.documentElement.classList.add("dark");
        } else {
            setMode("light");
            localStorage.setItem('mode', "light");
            document.documentElement.classList.remove("dark");
        }
        sound ? playSound("/Sounds/clicksound2.wav") : null
    }

    return (
        <button
            className="fixed right-4 bottom-4 h-12 w-12 rounded-full bg-white outline-none border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-90 transition-all"
            onClick={handleClick}
        >
            {mode === "light" ?
                (
                    <motion.div
                        key="sun"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <BsSun />
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
                        <IoMoonOutline />
                    </motion.div>
                )
            }
        </button>
    );
}


