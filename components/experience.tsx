"use client";
import React from 'react'
import SectionHeading from './SectionHeading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';

export default function Experience() {
    return (
    <section
    id="experience"
    >
        <SectionHeading>My Experience</SectionHeading>
        <VerticalTimeline>
            {
                experiencesData.map((item,index)=>(
                    <React.Fragment key={index}>
                        <VerticalTimelineElement
                        visible={true}
                        >
                            <h3 className="vertical-timeline-element-title">{item.title}</h3>
                            <p className="vertical-timeline-element-subtitle">{item.location}</p>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>
    </section>
    )
}
