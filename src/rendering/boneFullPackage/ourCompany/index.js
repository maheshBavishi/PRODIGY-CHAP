import React from 'react'
import styles from './ourCompany.module.scss';
const CompanyImage = '/assets/images/company.jpg';
export default function OurCompany() {
  return (
    <div className={styles.ourCompanyAlignment}>
      <div className='container'>
        <div className={styles.title}>
            <h2>Our Company</h2>
        </div>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={CompanyImage} alt="CompanyImage"/>
                </div>
            </div>
            <div className={styles.griditems}>
               <p>
               Our company has successfully sent off 10 visitors to the US for 
               their vacation.
               </p>
               <p>
               We serve with due diligence for the visitors, giving interactive responses, additional information that needs 
               attention in timely manner.
               </p>
               <p>
               Moreover, we offer after-sale support such as giving suggestions and advices to our client's 
               additional inquiries.
               </p>
            </div>
        </div>
      </div>
    </div>
  )
}
