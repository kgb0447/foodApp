import React from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import styles from './styles.module.scss'
export default function Categories() {
  const {data} = useFetch('http://localhost:8888/menu');

  const test = data.map((item: any) => item )
  console.log(test.map((val:any) => console.log(val,"testing")))
  return (
    <div className={styles.categories}>
      {data.map((item: any,index: number) => (
      
           <div className={styles.categoryItems} key={item + index}>{Object.keys(item)}</div>
   
      ))}
    </div>
  )
}
