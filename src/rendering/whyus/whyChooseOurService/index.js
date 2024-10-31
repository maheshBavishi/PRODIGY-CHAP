import React from 'react'
import styles from './whyChooseOurService.module.scss';
const Image1 = '/assets/images/1.jpg';
const Image2 = '/assets/images/2.jpg';
const Image3 = '/assets/images/3.jpg';
const Image4 = '/assets/images/4.jpg';
export default function WhyChooseOurService() {
    return (
        <div className={styles.whyChooseOurService}>
            <div className='container'>
                <div className={styles.text}>
                    <h2>
                        Why Choose Our Services?
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={Image1} alt="Image1" />
                        </div>
                        <div>

                            <p>
                                Expert Guidance
                                With our founder’s long history of consulting on US visas and proven track record of applying for clients, we can provide you step-by- step guide on both your F1 interview training and F1 full package.

                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={Image2} alt="Image2" />
                        </div>
                        <div>

                            <p>
                                Detailed Evaluation
                                We will analyze your case on individual basis and suggest you tips on applying for US visas as well as for college application. Not only this, we provide		additional documentation checking
                                on personal	background, academic profile to get your visa approved.
                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={Image3} alt="Image3" />
                        </div>
                        <div>

                            <p>
                                Guaranteed Q&A
                                Our AI generated questions and answers perfectly align with our clients' case and generate	case-specific answers that will help clients ace in their US visa interview.

                            </p>
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={Image4} alt="Image4" />
                        </div>
                        <div>

                            <p>
                                Easy Access
                                Our services are conducted online and our F1 training file can be obtained at any time after purchase. Also, consultation sessions can be booked online at ease, with no restriction.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
