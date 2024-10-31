import React, { useEffect } from 'react'
import Herobanner from './herobanner'
import EducationAndVisaConsultation from './educationAndVisaConsultation'
import MeetSection from './meetSection'
import PurchaseSection from './purchaseSection'
import MockInterview from './mockInterview'
import OnlineConsulation from './onlineConsulation'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  }, [])
  return (
    <div>
      <Herobanner />
      <EducationAndVisaConsultation />
      <MeetSection />
      <PurchaseSection />
      <MockInterview />
      <OnlineConsulation />
    </div>
  )
}
