import React from 'react'
import styles from './meetourFounder.module.scss';
const FounderImage = '/assets/images/founder.avif';
export default function MeetourFounder() {
  return (
    <div className={styles.meetourFounder}>
      <div className='container'>
        <div className={styles.text}>
            <h2>
                Meet Our Founder
            </h2>
        </div>
        <div className={styles.img}>
            <img src={FounderImage} alt="FounderImage"/>
        </div>
      </div>
    </div>
  )
}
