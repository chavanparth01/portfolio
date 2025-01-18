"use client";
import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { div } from 'framer-motion/client';

const words = "Parth Chavan: Passionate Developer with a Focus on Building Creative and Interactive web-sites"
export default function TextEffect() {
  return (
      <TextGenerateEffect className='!font-mono' words={words} />
  )
}
