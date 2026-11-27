'use client'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { HiDownload } from 'react-icons/hi'
import { LinkPreview } from "./ui/link-preview";
import { FaGithubSquare } from 'react-icons/fa'
import useSectionInView from '../lib/Hooks/Hooks'
import { useSound } from '../Context/SoundContext'
import playSound from '../utils/playSound'

export default function Intro() {

    const ref = useSectionInView("Home", 0.5)
    const { sound } = useSound();

    return (
        <section id="home" ref={ref} className={`mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28`}>
            <div className='relative flex items-center justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        delay: 0.1,
                        type: 'tween',
                        duration: 0.5,
                        ease: 'easeInOut'
                    }}
                >
                    <Image
                        src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?t=st=1735792633~exp=1735796233~hmac=25f4bf3ead1280b6db96adb7607e87f6705dcae57aa4164549df660c57227cee&w=740"
                        alt="Parth Chavan"
                        width="130"
                        height="130"
                        quality="95"
                        priority={true}
                        className='h-24 w-24 object-cover rounded-full shadow-xl'
                    />
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 80,
                            damping: 8,
                            duration: 0.5
                        }}
                        className='absolute bottom-0 ml-5 text-2xl'>
                        👋
                    </motion.span>
                </motion.div>
            </div>

            <motion.div
                className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.5
                }}
            >
                <span className="font-bold">Hello, I&apos;m Parth Chavan.</span> I&apos;m a{" "}
                <span className="font-bold">Full-Stack &amp; AI Developer</span> and final-year{" "}
                <span className="font-bold">IT student at IIIT Allahabad</span>. I enjoy
                building <span className="italic">scalable web applications</span> and <span className="italic">AI-powered systems</span>. My major focus is :{" "}
                <div className="underline text-gray-500 font-bold flex flex-wrap gap-5 justify-center">
                    <LinkPreview url="https://react.dev/learn" className="font-bold !text-black dark:!text-white">
                        React
                    </LinkPreview>{" "}
                    <LinkPreview url="https://nextjs.org/docs" className="font-bold !text-black dark:!text-white">
                        Next.js
                    </LinkPreview>
                    <LinkPreview url="https://nodejs.org/en" className="font-bold !text-black dark:!text-white">
                        Node.js
                    </LinkPreview>
                    <LinkPreview url="https://www.typescriptlang.org" className="font-bold !text-black dark:!text-white">
                        TypeScript
                    </LinkPreview>
                    <LinkPreview url="https://www.python.org" className="font-bold !text-black dark:!text-white">
                        Python
                    </LinkPreview>
                </div>
            </motion.div>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-4 text-lg font-medium'
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.3,
                    duration: 0.5
                }}
            >
                <Link
                    href="#contact"
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 hover:bg-gray-950 active:scale-95 transition ease-in duration: 150
                    '
                    onClick={() => sound ? playSound("/Sounds/clicksound2.wav") : null}
                >
                    Contact me here <BsArrowRight
                        className='group-hover:translate-x-1 transition-transform'
                    />
                </Link>
                <a href="https://drive.google.com/file/d/1WtFcSktd-qk9YC1rWAHm2k8IjilZ-h8c/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group bg-white text-gray-900 px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110  active:scale-95 transition ease-in duration: 150 outline-none border border-black/20
                '
                    onClick={ () => sound ? playSound("/Sounds/clicksound2.wav") : null }
                >Download CV <HiDownload
                        className='group-hover:translate-y-1 transition-transform'
                    /> </a>

                <a href="https://www.linkedin.com/in/parth-chavan-2743b3290/"
                    target="_blank"
                    className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.35rem] hover:scale-110  active:scale-95 transition ease-in duration: 150 outline-none border border-black/20'
                    onClick={ () => sound ? playSound("/Sounds/clicksound2.wav") : null }
                >
                    <BsLinkedin />
                </a>
                <a href="https://github.com/chavanparth01"
                    target="_blank"
                    className='bg-white text-gray-700 p-4 flex items-center gap-2 rounded-full text-[1.5rem] hover:scale-110  active:scale-95 transition ease-in duration: 150 outline-none border border-black/20'
                    onClick={ () => sound ? playSound("/Sounds/clicksound2.wav") : null } 
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
