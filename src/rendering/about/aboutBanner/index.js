import React from 'react'
import styles from './aboutBanner.module.scss';
const CompanyImage = '/assets/images/company.webp';
export default function AboutBanner() {
  return (
    <div className={styles.aboutBannerAlignment}>
      <div className='container'>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={CompanyImage} alt="CompanyImage"/>
                </div>
            </div>
            <div className={styles.griditems}>
                <h2>
                    Company Background
                </h2>
               <p>
               Our company started oñ with providing consultation on college admission to the US along with exclusive one on one consultation on writing college admission essays. Our founder himself was an English teacher who had helped hundreds of students achieved high score on IELTS and Duolingo. Eventually, he started this consulting service to provide exclusive, client-oriented visa and college application to let aspiring students admitted to the best colleges in the US. He also brings the best tips to ace the US visa interview for his clients, making them felt assured that every tip he gives is instrumental to forming solid reasons for applying the 
               US visa.
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}
