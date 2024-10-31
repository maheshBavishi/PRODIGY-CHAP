import React from 'react'
import styles from './ourClients.module.scss';
import StarIcon from '@/shared/components/icons/starIcon';
import Marquee from "react-fast-marquee";
const ProfileImage = '/assets/images/profile.webp';
export default function OurClients() {
    return (
        <div className={styles.ourClients}>
            <div className='container'>
                <div className={styles.title}>
                    <h2>What our Clients say about us</h2>
                </div>

            </div>
            <Marquee>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Htet Khaing
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "My fear for interview was blown away when I took interview training 
                    with the founder and eventually got my F1 approved"
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Thi Myint 
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                     
"Sir provided me with best questions and answers that helped me to get my visa approved. "

                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Ingyin Swe
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "Taking 5 interview sessions rid me of my nervousness in the real interview and I am thankful to sir for his expert training session that got me visa approved."
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Htet Khaing
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "My fear for interview was blown away when I took interview training 
                    with the founder and eventually got my F1 approved"
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Thi Myint 
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                     
"Sir provided me with best questions and answers that helped me to get my visa approved. "

                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Ingyin Swe
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "Taking 5 interview sessions rid me of my nervousness in the real interview and I am thankful to sir for his expert training session that got me visa approved."
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Htet Khaing
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "My fear for interview was blown away when I took interview training 
                    with the founder and eventually got my F1 approved"
                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Thi Myint 
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                     
"Sir provided me with best questions and answers that helped me to get my visa approved. "

                    </p>
                </div>
                <div className={styles.box}>
                    <div className={styles.cardHeaderAlignment}>
                        <div className={styles.leftContnet}>
                            <img src={ProfileImage} alt="ProfileImage" />
                            <h3>
                            Ingyin Swe
                            </h3>
                        </div>
                        <div className={styles.ratingAlignment}>
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                            <StarIcon />
                        </div>
                    </div>
                    <p>
                    "Taking 5 interview sessions rid me of my nervousness in the real interview and I am thankful to sir for his expert training session that got me visa approved."
                    </p>
                </div>
            </Marquee>

        </div>
    )
}
