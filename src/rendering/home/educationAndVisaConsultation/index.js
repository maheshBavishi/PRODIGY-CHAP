import React from 'react'
import styles from './educationAndVisaConsultation.module.scss';
import Button from '@/shared/components/button';
const ServiceImage = '/assets/images/service.jpg';
export default function EducationAndVisaConsultation() {
  return (
    <div className={styles.educationAndVisaConsultation}>
      <div className='container'>
        <div className={styles.grid}>
            <div className={styles.griditems}>
                <div className={styles.img}>
                    <img src={ServiceImage} alt="ServiceImage"/>
                </div>
                <div className={styles.vec}></div>
                <div className={styles.vec1}></div>
            </div>
            <div className={styles.griditems}>
                <h2>
                Prodigy Chap - Education & Visa Consulting
                </h2>
                <p>
                Studying abroad for an international degree can be overwhelming, requiring thorough planning and intensive preparation. Prodigy Chap is here to alleviate the burden of international college admission. We o0er consultation on English tests, college application, visa interview preparation, by providing detailed explanations and concrete guidance. Currently, Prodigy Chap operates exclusively for US and UK college applications, serving over 80 students in obtaining US F1 visa approvals. We operate fully online, providing 
                interaction through email, phone, and video calls for ourclients.
                </p>
                <p>
                We aim to serve inspiring students seeking an international learning environment, vibrant interactive culture, exposure to diverse students, and hands-on learning experiences only available in developed countries like the US and UK. Despite the endless list of criteria for college admission, Prodigy Chap is dedicated to providing conclusive, timely and just-in-time services. Follow or call Prodigy Chap to help with the application journey and ensure you reach your desired international college.
                </p>
            </div>
        </div>
      </div>
    </div>
  )
}
