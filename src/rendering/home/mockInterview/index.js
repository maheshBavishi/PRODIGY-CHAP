import React from 'react'
import styles from './mockInterview.module.scss';
const MaxresdefaultImage = '/assets/images/maxresdefault.jpg';
export default function MockInterview() {
  return (
    <div className={styles.mockInterview}>
      <div className='container'>
        <div className={styles.text}>
            <h2>
                F1 Mock Interview
            </h2>
        </div>
        <div className={styles.img}>
            <img src={MaxresdefaultImage} alt="MaxresdefaultImage"/>
        </div>
      </div>
    </div>
  )
}
