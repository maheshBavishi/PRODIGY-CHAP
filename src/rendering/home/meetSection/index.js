import React from 'react'
import styles from './meetSection.module.scss';
import FacebookIcon from '@/shared/components/icons/facebookIcon';
import InstagramIcon from '@/shared/components/icons/instagramIcon';
import TwitterIcon from '@/shared/components/icons/twitterIcon';
import YoutubeIcon from '@/shared/components/icons/youtubeIcon';
const ClientImage = '/assets/images/man.jpg';
export default function MeetSection() {
    return (
        <div className={styles.meetSection}>
            <div className='container'>
                <div className={styles.text}>
                    <h2>
                    Meet the Founder, CEO, Mr.Khan Muang
                    </h2>
                </div>
                <div className={styles.grid}>
                    <div className={styles.griditems}>
                        <div className={styles.img}>
                            <img src={ClientImage} alt="ClientImage" />
                        </div>
                    </div>
                    <div className={styles.griditems}>
                        <p>
                        The founder Khan Muang has a degree in Information Technology(UK) and MBA from Webster University (USA). During his college days, he freelanced as English translator for freelance projects while also tutoring English part-time. He has a great writing skill that has been part of his strengths in his academia, and 
                        he utilized it to the fullest when he started consulting for college admission to the US. 
                        </p>
                        <p>
                        Moreover, his visa tips helped over 100 students obtain US F1 visas and his visa guidance has been going viral ever since. His expert consultation has helped many students obtain admission to the best colleges in the US. Since then, he has been making a great impact on aspiring students for their US college application with great results.
                        </p>
                        <h3>CEO, Mr.Khan Muang</h3>
                        <div className={styles.socialIcon}>
                            <FacebookIcon/>
                            <InstagramIcon/>
                            <TwitterIcon/>
                            <YoutubeIcon/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
