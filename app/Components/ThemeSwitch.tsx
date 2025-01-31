"use client"

import React from 'react'
import { BsSun } from 'react-icons/bs'
import { IoMoonOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import { useTheme } from '../Context/ThemeContextProvider';

export default function ThemeSwitch() {
    const { isDark ,toggleMode } = useTheme();

    return (
        <button
            className="fixed right-4 bottom-4 h-12 w-12 rounded-full bg-white outline-none border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-90 transition-all dark:bg-gray-900"
            onClick={toggleMode}
        >
            {isDark === false ?
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


