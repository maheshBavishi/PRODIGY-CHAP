import React from 'react'
import styles from './serviceSection.module.scss';
const FullPackageImage = '/assets/images/full-package.jpg';
export default function ServiceSection() {
    return (
        <div className={styles.serviceSectionAlignment}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>Services</h2>
                </div>
                <div className={styles.allGridAlignment}>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3>
                            	F1 Full Package
                            </h3>
                           <p>
                           A full package US student visa that includes
                           </p>
                           <ul>
                            <li>College Application</li>
                            <li>Academic Papers Preparation</li>
                            <li>Additional Documents Preparation</li>
                            <li>Sponsorship Documents Preparation</li>
                            <li>Appointment Booking</li>
                            <li>Interview Training</li>
                           </ul>
                           <p>
                           For those who don’t know where to start. This package is a real deal for you in which we take full accountability for application to your desired US college. Moreover, additional advice is given whenever necessary to ensure students leave 
                           no stones unturned.
                           </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={FullPackageImage} alt="FullPackageImage" />
                            </div>
                            <div className={styles.layer}></div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3>
                            	F1 Interview Training
                            </h3>
                            <p>
                            For those who are worried about how to speak and express your intentions, goals for US visa, this is the right choice for you. The training teaches you about the nature of the interview with most suitable questions and corresponding answers to let students ace the 
                            F1 interview.
                            </p>
                            <p>
                            This training will cool down all your concerns about F1 interview and equip you with best responses to get your 
                            visa approved.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={FullPackageImage} alt="FullPackageImage" />
                            </div>
                            <div className={styles.layer}></div>
                        </div>
                    </div>
                    <div className={styles.grid}>
                        <div className={styles.griditems}>
                            <h3>
                                Additional Documentation and Verification
                            </h3>
                            <p>
                            For applying F1 visa, students are required to submit academic documents, personal documents and other additional documents that look a bit of a hassle for those who are just starting. Don't worry. We will cover all your documentation with one-on- one approach to have no gaps in between, and have you fully prepared with all necessary documents. Sometimes, US colleges ask for verification of academic documents and we , at the best of our knowledge, will facilitate
                             the verification process in a seamless, concise manner.
                            </p>
                        </div>
                        <div className={styles.griditems}>
                            <div className={styles.img}>
                                <img src={FullPackageImage} alt="FullPackageImage" />
                            </div>
                            <div className={styles.layer}></div>
                        </div>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}
