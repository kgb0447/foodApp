import React from 'react'
import styles from './Header.module.scss'


interface headerTypes {
  userInfo: string,
  callBack: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
}
export default function Header({userInfo,callBack}: headerTypes) {

  const showSidebar = () => {
    callBack(true);
  }
  return (
    <header className={styles.header}>
      <span className={styles.userIcon}>
        <img src={require('../../assets/img/icons/hamburger_icon@2x.png')} alt="" onClick={showSidebar}/>
      </span>
      <p>{userInfo}</p>
      <div className={styles.userCard}>
        <img src={require('../../assets/img/user/avatar1@2x.png')} alt="" />
      </div>
    </header>
  )
}
