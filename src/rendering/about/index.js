import React from 'react'
import AboutBanner from './aboutBanner'
import MeetSection from '../home/meetSection'
import ServiceSection from './serviceSection'

export default function About() {
  return (
    <div>
      <AboutBanner/>
      <MeetSection/>
      <ServiceSection/>
    </div>
  )
}
