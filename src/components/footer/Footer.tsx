import React from 'react'
import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <div className={styles.navItem}>
          <img src={require('../../assets/img/footer/discover@2x.png')} alt="" />
        </div>
        <div className={styles.navItem}>
          <img src={require('../../assets/img/footer/location@2x.png')} alt="" />
        </div>
        <div className={styles.navItem}>
          <img src={require('../../assets/img/footer/cart@2x.png')} alt="" />
        </div>
        <div className={styles.navItem}>
          <img src={require('../../assets/img/footer/favorites@2x.png')} alt="" />
        </div>
        <div className={styles.navItem}>
          <img src={require('../../assets/img/footer/notif@2x.png')} alt="" />
        </div>
      </nav>
    </footer>
  )
}
