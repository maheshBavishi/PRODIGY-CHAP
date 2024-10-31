import React from 'react'
import styles from './login.module.scss';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';
const LoginBanner = '/assets/images/login1.png';

export default function Login() {
    return (
        <div className={styles.loginPagealignment}>
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
                            Sign in
                        </h2>
                        <p>Welcome back! Please enter your details.</p>
                    </div>
                    <div className={styles.spacer}>
                        <Input label='Email' placeholder="Enter your email" />
                    </div>
                    <Input label='Password' placeholder="Enter your password" />
                    <div className={styles.forgotPassword}>
                        <Link href="/forgotpassword">Forgot password?</Link>
                    </div>
                    <div className={styles.button}>
                        <Button text="Sign in" />
                    </div>
                    <div className={styles.lastText}>
                        <p>
                            Don't have an account?
                            <Link href="/signup"> Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
