"use client";
import React from 'react'
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = "Who Am I? Discover More About Me!😄"
export default function TextEffect() {
  return (
      <TextGenerateEffect className='!font-mono dark:!bg-[#121212] dark:!text-gray-50' words={words} />
  )
}
