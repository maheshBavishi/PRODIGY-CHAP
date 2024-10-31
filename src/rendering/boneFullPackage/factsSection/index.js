import React from 'react'
import styles from './factsSection.module.scss';
export default function FactsSection() {
  return (
    <div className={styles.factsSection}>
      <div className='container'>
        <h2>Facts</h2>
        <ul>
           <li>Being well-prepared for the B1/B2 interview is as much important as it is for filling your DS160.</li>
           <li>Planning your points for interview with strong reasonable answers by showcasing your proof of income, your intention to return after the scheduled visit must be crafted truthfully to give the officer a clear picture of your applicaiton.</li>
           <li>Additional documents such as your Leave letter (for employee), business ownership documents (for self- employed) must be prepared in advance to prove your ties to your home country.</li>
           <li>Ownership of fixed assests is a good point to showcase also in the interview to convice the officer that you have no intention of immigrating to the US other than coming back to your home country.</li>
        </ul>
      </div>
    </div>
  )
}
