import React from 'react'
import styles from './ourClientsArrival.module.scss';
const Image1 = '/assets/images/img1.jpg';
const Image2 = '/assets/images/img2.jpg';
const Image3 = '/assets/images/img3.jpg';
export default function OurClientsArrival() {
  return (
    <div className={styles.ourClientsArrival}>
      <div className='container'>
        <div className={styles.text}>
            <h2>
                Our Client's Arrival to the US
            </h2>
        </div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={Image1} alt="Image1"/>
                </div>
            </div>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={Image2} alt="Image2"/>
                </div>
            </div>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={Image3} alt="Image3"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
