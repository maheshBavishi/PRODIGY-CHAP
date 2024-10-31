import React from 'react'
import styles from './forgotpassword.module.scss';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';
const LoginBanner = '/assets/images/auth-banner.png';
export default function Forgotpassword() {
    return (
        <div className={styles.forgotpassword}>
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
                            Forgot password?

                        </h2>
                        <p>Fill in your email and we'll send you a link to reset your password.</p>
                    </div>

                    <Input label='Email' placeholder="Enter your email" />


                    <div className={styles.button}>
                        <Link href="/resetpassword">
                            <Button text="Send verification code" />
                        </Link>
                    </div>
                    <div className={styles.lastText}>
                        <p>
                            Back to
                            <Link href="/login"> Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
