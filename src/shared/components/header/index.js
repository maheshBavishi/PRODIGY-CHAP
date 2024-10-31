import React from 'react'
import styles from './header.module.scss';
import Button from '../button';
import DownIcon from '../icons/downIcon';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';
export default function Header() {
    return (
        <header className={styles.header}>
            <div className='container'>
                <div className={styles.headerAlignment}>
                    <div className={styles.logo}>
                        <Link href="/">
                        <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={styles.menuAlignment}>
                        <div className={styles.menu}>
                            <a className={styles.style}>Visa Training</a>
                            <DownIcon/>
                            <div className={styles.dropdown}>
                                <div className={styles.border}>
                                    <a>F1 Student Visa</a>
                                    <a>B1/B2 Visit Visa</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.menu}>
                            <a className={styles.style}>Consultation Package</a>
                            <DownIcon/>
                            <div className={styles.dropdown}>
                                <div className={styles.border}>
                                    <Link href="/f1-package">F1 Full Package Student</Link>
                                    <Link href="/b1-package">B1/B2 Full Package Visit</Link>
                                    <a>Online Consultation</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles.menu}>
                            <Link href="/whyus" className={styles.style}>Why Us?</Link>
                        </div>
                        <div className={styles.menu}>
                            <Link href="/faq"className={styles.style}>FAQ</Link>
                        </div>
                        <div className={styles.menu}>
                            <Link href="/about" className={styles.style}>About Us</Link>
                        </div>
                        <div className={styles.menu}>
                            <a className={styles.style}>Contact Us</a>
                        </div>
                    </div>
                    <div className={styles.loginButton}>
                        <Link href="/login">
                        <Button text="Login" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}
