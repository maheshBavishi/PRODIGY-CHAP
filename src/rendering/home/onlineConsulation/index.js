import React from 'react'
import styles from './onlineConsulation.module.scss';
import Button from '@/shared/components/button';
const OnlineConsulationImage = '/assets/images/OnlineConsulation.png';
export default function OnlineConsulation() {
  return (
    <div className={styles.onlineConsulation}>
      <div className='container'>
      <div className={styles.grid}>
        <div className={styles.griditems}>
            <h2>
            Online Consulation
            </h2>
            <p>
            Don’t know where to start? Relax we have your back.
            </p>
            <ul>
                <li>
                	Talk with Sir Khan Muang online. He will walk you through the screening process, education profiling 
                and matching you with the most suitable college/university.
                </li>
                <li>
                	It is a 15 min talk. Schedule a video call and we are more than delighted to hear 
                your needs and academic goals from you.
                </li>
            </ul>
            <Button text="Book Online Consultation"/>
        </div>
        <div className={styles.griditems}>
            <div className={styles.img}>
                <img src={OnlineConsulationImage} alt="OnlineConsulationImage"/>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}
