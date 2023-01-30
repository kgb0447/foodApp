import React from 'react'
import styles from './HorizontalSwiper.module.scss'
export default function HorizontalSwiper() {
  return (
    <div className={styles.swiperContainer}>'
        <header className={styles.swiperHeader}>
            <h1>Today's Promo</h1>
            <div>See All</div>
        </header>
        <div className={styles.swiper}>
            <div className={styles.swiperItems}>dfdfdfdfd</div>
            <div className={styles.swiperItems}>dfdfdfdfd
                <div className={styles.itemLabel}>fddf</div>
            </div>
        </div>
    </div>
  )
}
