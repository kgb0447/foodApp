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
          swiperItems.map((item:any) => (
            <div key={item.id} className={styles.swiperItems}>
              <img src={item.thumbnail} alt="" />
              <div className={styles.itemDesc}>
                <div className={styles.itemLabel}>{item.name}</div>
                <div className={styles.itemCategories}>
                  {
                    item.categories.map((val:string,index:number)=>(
                      <span key={val+index}>
                        {val}
                      </span>
                    ))
                  }
                
                </div>
                </div>
              <div className={styles.rateWrapper}>
                <div className={styles.rate}>{item?.ratings}</div>
                <span>({item.reviews})</span>
              </div>
            </div>
          ))
        }
        </div>
    </div>
  )
}
