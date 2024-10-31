import React from 'react'
import styles from './purchaseSection.module.scss';
import Button from '@/shared/components/button';
const StudentImage = '/assets/images/student.png';
export default function PurchaseSection() {
  return (
    <div className={styles.purchaseSection}>
      <div className='container'>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={StudentImage} alt="StudentImage"/>
                </div>
            </div>
            <div className={styles.griditems}>
                <h2>
                    Purchase the F1 interview training file
                </h2>
                <p>
                No more worries for interview with visa oflicer.
We have you covered, with the Questions and Answers that is drafted according to your education profile.
Within an hour, we will plan it for you. Wow !!!
                </p>
                <p>
                Purchase Now! Get your Fl visa approved.
                </p>
                <Button text="Purchase it"/>
            </div>
        </div>
      </div>
    </div>
  )
}
