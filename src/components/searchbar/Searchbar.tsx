import React from 'react'
import styles from './Searchbar.module.scss'
export default function Searchbar() {
  return (
    <div className={styles.searchBarContainer}>
        <input type="search" name="" id="" className={styles.searchbar}/>
        <div className={styles.filter}>
            <img src={require('../../assets/img/filter/filter_icon@2x.png')} alt="" />
        </div>
    </div>
  )
}
