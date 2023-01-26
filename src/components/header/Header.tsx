import React from 'react'
import styles from './Header.module.scss'

interface headerTypes {
  userInfo: string,
}
export default function Header({userInfo}: headerTypes) {
  return (
    <header className={styles.header}>
       <p>{userInfo}</p>
       <div>notif</div>
    </header>
  )
}
