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
              <img src={ServiceListImage} alt="ServiceListImage" />
            </div>
          </div>
          <div className={styles.gridItems}>
            <h2>F1Full Package Service List</h2>
            <ul>
              <li>	US College Application </li>
              <li>	Admission Essay Consultation</li>
              <li>	Personal Statement Consultation</li>
              <li>DS160 Filling</li>
              <li>	Academic Documents Preparation</li>
              <li>	Additional Documents Filling and Verification
              </li>
              <li>	Sponsorship documents Preparation</li>
              <li>Visa Appointment Booking</li>
              <li>	F1 interview Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
