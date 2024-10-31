import React from 'react'
import FoneFullPackageServiceList from './foneFullPackageServiceList'
import FactsSection from './factsSection'
import CollegesAndUniversities from './collegesAndUniversities'
import OurCompany from './ourCompany'
import WhyChooseUs from './whyChooseUs'
import FoneFullPackagePlan from './foneFullPackagePlan'

export default function BoneFullPackage() {
  return (
    <div>
      <FoneFullPackageServiceList/>
      <FactsSection/>
      <CollegesAndUniversities/>
      <OurCompany/>
      <WhyChooseUs/>
      <FoneFullPackagePlan/>
    </div>
  )
}
