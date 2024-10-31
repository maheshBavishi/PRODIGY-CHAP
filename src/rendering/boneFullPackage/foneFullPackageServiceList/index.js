import React from 'react'
import styles from './foneFullPackageServiceList.module.scss';
const ServiceListImage = '/assets/images/service-list.jpg';
export default function FoneFullPackageServiceList() {
  return (
    <div className={styles.foneFullPackageServiceList}>
      <div className='container'>
        <div className={styles.grid}>
            <div className={styles.gridItems}>
                <div className={styles.img}>
                    <img src={ServiceListImage} alt="ServiceListImage"/>
                </div>
            </div>
            <div className={styles.gridItems}>
                <h2>B1/B2 Full Package Service List</h2>
                <ul>
                  <li>Travel Plan</li>
                  <li>DS160 Filling</li>
                  <li>Personal Documents Preparation</li>
                  <li>Additional Documents Filling and Verification</li>
                  <li>Employment Letter Preparation (for employee)</li>
                  <li>Business Ownership Papers Preparation (for self-employed)</li>
                  <li>Visa Appointment Booking</li>
                  <li>B1/B2 interview training</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
