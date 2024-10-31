import React from 'react'
import styles from './foneFullPackagePlan.module.scss';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
export default function FoneFullPackagePlan() {
    return (
        <div className={styles.foneFullPackagePlanAlignment}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>Interested in our F1Full Package?</h2>
                    <ul>
                        <li>Sign up now by filling the form.</li>
                        <li>Create new account with your credentials.</li>
                        <li>No need to pay first.</li>
                        <li>Our founder will contact you soon for the F1 Full Package and explain you in detail.</li>
                        <li>Everything shared is kept safe and confidential. No worries for your privacy.</li>
                    </ul>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.outlineBox}>
                            <h3>F1 Full Package</h3>
                            <h4>$1300</h4>
                            <p>(6,175,100 Kyat)</p>
                            <ul>
                                <li>Evaluating student's background, education profile</li>
                                <li>Matching with the suitable US college</li>
                                <li>Applying to the US college, guiding on necessary documentation</li>
                                <li>Guiding on personal statement, scholarship essay</li>
                                <li>Academic Documentation</li>
                                <li>Ensuring the student gets acceptance letter</li>
                                <li>Visa application</li>
                                <li>Sponsorship documentation</li>
                                <li>Additional documents filing and verification</li>
                                <li>Appointment booking</li>
                                <li>Interview Training</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.box}>
                            <div className={styles.twoCol}>
                                <Input label='Name' placeholder='Please enter name' />
                                <Input label='Current Education Level' placeholder='Please enter Education Level' />
                                <Input label='Intended Major' placeholder='Please enter Intended Major' />
                                <Input label='Sponsorship' placeholder='Please enter Sponsorship' />
                            </div>
                            <h3>Contact Information</h3>
                            <div className={styles.twoCol}>
                                <Input label='Country' placeholder='Please enter Country' />
                                <Input label='Phone' placeholder='Please enter Phone' />
                                <Input label='Chat App' placeholder='Please enter Chat App' />
                                <Input label='Chat App ID' placeholder='Please enter Chat ID' />
                                <Input label='Email' placeholder='Please enter Email' />
                            </div>
                            <div className={styles.btnAlignment}>
                                <Button text="Apply" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
