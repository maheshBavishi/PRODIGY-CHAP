import React from 'react'
import styles from './resetpassword.module.scss';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';
const LoginBanner = '/assets/images/auth-banner.png';
export default function Resetpassword() {
    return (
        <div>
            <div className={styles.resetpassword}>
                <div className={styles.layer}>
                    <div className={styles.logo}>
                        <Link href="/">
                            <img src={Logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className={styles.banner}>
                        <img src={LoginBanner} alt="LoginBanner" />
                    </div>
                </div>
                <div className={styles.content}>
                    <div className={styles.wfull}>
                        <div className={styles.text}>
                            <h2>
                                Reset password

                            </h2>
                            <p>We've sent a code to your nominated email address.</p>
                        </div>
                        <div className={styles.spacer}>
                            <Input label='Verification code' placeholder="Enter the 6 digit code" />
                        </div>
                        <Input label='Create a password' placeholder="Enter your password" />
                        <div className={styles.button}>
                            <Button text="Reset password" />
                        </div>
                        <div className={styles.lastText}>
                            <p>
                                <a>Resend verification email</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
