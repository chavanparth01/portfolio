import React from 'react'

export default function Footer() {
  return (
    <div className='w-[100vw] min-h-14 mt-14 mb-5 flex flex-col gap-2 justify-center'>
      <div className='font-bold text-sm text-center'>
        &copy; 2024 | Parth Chavan, All rights reserved 
      </div>
      <div className='text-center text-xs'>
        <span className='font-semibold'>About the website : </span>
        Built with React & Next js(App router and server actions), Typescript, Tailwind CSS, Framer Motion, React email and resend, vercel Hosting.
      </div>
    </div>
  )
}
