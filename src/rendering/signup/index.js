import React from 'react'
import styles from './signup.module.scss';
import Input from '@/shared/components/input';
import Button from '@/shared/components/button';
import Link from 'next/link';
const Logo = '/assets/logo/logo.png';
const LoginBanner = '/assets/images/signup.png';
export default function Signup() {
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
                            Sign up
                        </h2>
                        <p>Welcome back! Please enter your details.</p>
                    </div>
                    <div className={styles.twocol}>
                        <Input label='First name' placeholder="First name" />
                        <Input label='Last name' placeholder="Last name" />
                    </div>
                    <div className={styles.spacer}>
                        <Input label='Mobile number' placeholder="Enter your Mobile number" />
                    </div>
                    <div className={styles.spacer}>
                        <Input label='Email' placeholder="Enter your email" />
                    </div>
                    <Input label='Password' placeholder="Enter your password" />

                    <div className={styles.button}>
                        <Button text="Create an account" />
                    </div>
                    <div className={styles.lastText}>
                        <p>
                            Already have an account?
                            <Link href="/login"> Sign in</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
