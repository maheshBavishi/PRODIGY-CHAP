import React from 'react'
import styles from './herobanner.module.scss';
import Button from '@/shared/components/button';
export default function Herobanner() {
  return (
    <div className={styles.herobanner}>
      <div className={styles.wfull}>
        <div className='container'>
          <h1>
            Easy & Simple Visa Processing <br />
            Consulting Service
          </h1>
          <p>
          Unlock a world of travel opportunities with our simple and efficient visa processing services. Our expert consultants guide you through every step, handling the complexities and paperwork so you can focus on planning your journey. Trust us to make your visa process seamless, quick, and stress-free!
          </p>
          {/* <div className={styles.buttonCenter}>
            <Button text="Read more" />
          </div> */}
        </div>
      </div>
    </div>
  )
}
