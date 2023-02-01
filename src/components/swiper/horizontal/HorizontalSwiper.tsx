import React from 'react'
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../utils/hooks/redux/hooks';
import styles from './HorizontalSwiper.module.scss'

interface HorizontalSwiperTypes{
  swiperItems: any[]
}
export default function HorizontalSwiper({swiperItems}: HorizontalSwiperTypes) {
 console.log("swiperItems",swiperItems.length);
  return (
    <div className={styles.swiperContainer}>'
        <header className={styles.swiperHeader}>
            <h1>Today's Promo</h1>
            <div>See All</div>
        </header>
        <div className={styles.swiper}>

          {
            swiperItems.length > 1 ? (
              swiperItems.map((item:any) => (
                item.map((val:any, index: number) => (
                  <div className={styles.swiperItems} 
                  key={val?.orderNo + index}
                  style={{background:`url(${val.img})`, backgroundSize: 'cover'}}
                  >
                    <div className={styles.itemLabel}>{val.name}</div>
                   
                  </div>
                ))
              ))
            ) :
              (
                swiperItems.map((item:any,index:number) => (
                  <React.Fragment key={item?.orderNo}>
                    <div className={styles.swiperItems}>{item.orderNo}</div>
                  </React.Fragment>
                ))
              ) 
          }
            {/* <div className={styles.swiperItems}>dfdfdfdfd</div>
            <div className={styles.swiperItems}>dfdfdfdfd
                <div className={styles.itemLabel}>fddf</div>
            </div> */}
        </div>
    </div>
  )
}
