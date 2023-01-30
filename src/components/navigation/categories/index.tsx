import React from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import styles from './styles.module.scss'
export default function Categories() {
  const {data} = useFetch('http://localhost:8888/menu');

 
  return (
    <div className={styles.categories}>
      <div className={styles.categoryItems}>
        <img src={require('../../../assets/img/logo.png')} alt="" />
        <p>1</p>
      </div>
      <div className={styles.categoryItems}>2</div>
      <div className={styles.categoryItems}>3</div>
      <div className={styles.categoryItems}>4</div>
    </div>
  )
}
