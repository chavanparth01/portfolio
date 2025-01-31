"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import { MdLocationOn } from 'react-icons/md';
import { useTheme } from '../Context/ThemeContextProvider';
import useSectionInView from '../lib/Hooks/Hooks';

export default function Experience() {
  
  const { isDark } = useTheme();
  const ref = useSectionInView("Experience" , 0.5); 

  return (
    <div ref = { ref }>
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((item, idx) => {
            return (
              <VerticalTimelineElement
                key={idx}
                contentStyle={{
                  boxShadow: isDark ? "5px 10px 8px rgba(255, 255, 255, 0.2)" : "5px 10px 8px rgba(0, 0, 0, 0.1)",
                  border: isDark ? "2px solid rgba(255, 255, 255, 0.1)" : "1px solid rgba(0, 0, 0, 0.05)",
                  backgroundColor: isDark ? "#1f1f1f" : "#F5F5F5", 
                  color: isDark ? "#FFF" : "#333", 
                  textAlign: "left",
                  minHeight: "12rem",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{
                  borderRight: isDark ? "10px solid #444" : "10px solid #E0E0E0" 
                }}
                icon={item.icon}
                iconStyle={item.style}
                date= {item.date}
                >
                <div className='font-extrabold text-xl'>{item.title}</div>
                <p className='!mt-1 font-bold'> <MdLocationOn className='inline mr-1'/>{item.location}</p>
                <p>{item.description}</p>
              </VerticalTimelineElement>

            )
          })
        }
      </VerticalTimeline>
    </div>
  )
}
