"use client"

import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';
import { div } from 'framer-motion/client';
import { MdLocationOn } from 'react-icons/md';

export default function Experience() {
  return (
    <div>
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline lineColor=''>
        {
          experiencesData.map((item, idx) => {
            return (
              <VerticalTimelineElement
                key={idx}
                contentStyle={{
                  boxShadow: "5px 10px 8px #F5F5F5",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign : "left",
                  minHeight: "12rem",
                  padding: "1.3rem 2rem"
                }}
                contentArrowStyle={{ borderRight: '10px solid  #E0E0E0' }}
                icon={item.icon}
                iconStyle={item.style}
                date= {item.date}
              >
                <h1 className='font-extrabold text-xl'>{item.title}</h1>
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
