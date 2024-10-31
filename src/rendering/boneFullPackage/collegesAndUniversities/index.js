import React from 'react'
import styles from './collegesAndUniversities.module.scss';
export default function CollegesAndUniversities() {
  return (
    <div className={styles.collegesAndUniversities}>
      <div className='container'>
        <div className={styles.text}>
            <h2>
            Popular Tourist Destinations in the US
            </h2>
        </div>
        <div className={styles.lightBox}></div>
      </div>
    </div>
  )
}
