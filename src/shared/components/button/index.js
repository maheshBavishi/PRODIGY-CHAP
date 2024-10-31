import React from 'react'
import styles from './button.module.scss';
export default function Button({text}) {
  return (
    <div className={styles.button}>
      <button aria-label={text}>{text}</button>
    </div>
  )
}
