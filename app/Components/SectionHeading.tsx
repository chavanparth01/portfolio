import React from 'react'

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-4xl font-mono text-center font-black text-gray-700 my-16">
      {children}
    </div>
  )
}
