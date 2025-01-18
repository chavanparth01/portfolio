"use client"

import React from 'react';
import { MacbookScroll } from './ui/macbook-scroll';
import TextEffect from './TextEffect';
import useSectionInView from '../lib/Hooks/Hooks';

export default function About() {

    const ref = useSectionInView("About", 0.8); 
    return ( 
        <>
            <div ref={ref} className="bg-slate-50 text-gray-700 text-center text-3xl m-0 p-0">
                <TextEffect />
            </div>
            <MacbookScroll
                title={""}
                src="/me.png"
                showGradient={false}
            />
        </>
    );
}
