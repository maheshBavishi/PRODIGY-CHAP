import React from 'react'
import styles from './factsSection.module.scss';
export default function FactsSection() {
  return (
    <div className={styles.factsSection}>
      <div className='container'>
        <h2>Facts</h2>
        <ul>
          <li>
            Applying to a US college requires careful planning and preparation to match with the most suitable college.
          </li>
          <li>
            Students are required to write admission essay, write personal statement, write additional essays if required, and even submit
            recommendation(s) from your colleagues/professors/employers etc.
          </li>
          <li>
            Filling college application form looks simple and easy, however, there are certain points students need to look at
            to avoid committing any mistakes.
          </li>
          <li>
            Finally, most important all, applying for your intended major at a credible US college must be planned with full
            attention, and research.
          </li>
        </ul>
      </div>
    </div>
  )
}
