import React from 'react'
import styles from './Header.module.scss'
import {IoMdNotificationsOutline} from 'react-icons/io'

interface headerTypes {
  userInfo: string,
}
export default function Header({userInfo}: headerTypes) {
  return (
    <header className={styles.header}>
      <span className={styles.userIcon}>
        <img src={require('../../assets/img/icons/hamburger_icon@2x.png')} alt="" />
      </span>
      <p>{userInfo}</p>
      <div className={styles.userCard}>
        <img src={require('../../assets/img/user/avatar1@2x.png')} alt="" />
      </div>
    </header>
  )
}
