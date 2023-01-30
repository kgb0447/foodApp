import React from 'react'
import styles from './Header.module.scss'
import {IoMdNotificationsOutline} from 'react-icons/io'

interface headerTypes {
  userInfo: string,
}
export default function Header({userInfo}: headerTypes) {
  return (
    <header className={styles.header}>
       <p>{userInfo}</p>
       <IoMdNotificationsOutline className={styles.notif}/>
    </header>
  )
}
