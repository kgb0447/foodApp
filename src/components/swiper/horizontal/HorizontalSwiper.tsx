import React from 'react'
import { RootState } from '../../../store/store';
import { useAppSelector } from '../../../utils/hooks/redux/hooks';
import useFetch from '../../../utils/hooks/useFetch';
import styles from './HorizontalSwiper.module.scss'

interface HorizontalSwiperTypes{
  swiperItems: any[]
}
export default function HorizontalSwiper({swiperItems}: HorizontalSwiperTypes) {

 console.log("swiperItems",swiperItems.length);
  return (
    <div className={styles.swiperContainer}>
        <header className={styles.swiperHeader}>
            <h1>Featured Restaurants</h1>
            <div className={styles.more}>View All</div>
        </header>
        <div className={styles.swiper}>

          {
            swiperItems.length > 1 ? (
              swiperItems.map((item:any) => (
                item.map((val:any, index: number) => (
                  <div className={styles.swiperItems} 
                  key={val.id}>
                    <img src={val?.img} alt={""} />
                    <div className={styles.itemLabel}>{val.name}</div>
                    <div className={styles.rateWrapper}>
                      <div className={styles.rate}>4.5</div>
                      <span>25+</span>
                    </div>
                    <div className={styles.likeFood}>
                      <img src={require('../../../assets/img/cards/heart_icon@2x.png')} alt="" />
                    </div>
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
