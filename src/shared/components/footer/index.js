import React from 'react'
import styles from './footer.module.scss';
import FacebookIcon from '../icons/facebookIcon';
import InstagramIcon from '../icons/instagramIcon';
import TwitterIcon from '../icons/twitterIcon';
import YoutubeIcon from '../icons/youtubeIcon';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';

export default function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <div className='container'>
          <div className={styles.footerAlignment}>
            <div>
              <div className={styles.logo}>
                <Link href="/">
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
              <div className={styles.text}>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam eaque ipsa quae abillo inventore
                </p>
              </div>
              <div className={styles.socialIcon}>
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
                <YoutubeIcon />
              </div>
            </div>
            <div>
              <h3>
                Explore Link
              </h3>
              <div className={styles.twoList}>
                <div>
                  <Link href="/whyus">Why Us?</Link>
                  <Link href="/faq">FAQ</Link>
                  <Link href="/about">About Us</Link>
                  <a>Contact Us</a>
                </div>
                <div>
                  <a>F1 Student Visa</a>
                  <Link href="/f1-package">F1 Full Package Student</Link>
                  <Link href="/b1-package">B1/B2 Full Package Visit</Link>
                  <a>Online Consultation</a>
                </div>
              </div>
            </div>
            <div>
              <h3>Others</h3>
              <a>Privacy Policy</a>
              <a>Terms of Service</a>
            </div>
          </div>
          <div className={styles.copyright}>
            <p>
              Copyright © 2024 e.visa All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
