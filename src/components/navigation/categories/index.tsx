import React from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import styles from './styles.module.scss'
import APPCATEGORY from '../../../constants/cetegories';
export default function Categories() {
  const {data} = useFetch('http://localhost:8888/menu');
  

  if(!data){
    return <div> .... loading</div>
  }

  const res =data.map((item:any)=> item.menuList);
  const prices =  res.map((item:any)=> item.map((val:any)=> val));

  const lowestPrice = prices.sort((a:any,b:any)=> a.price - b.price).slice(0,2);
  console.log("lowestPrice:",lowestPrice)

  return (
    <div className={styles.categories}>
      {
        APPCATEGORY.map((item:any,index:number) => (
          <div className={styles.categoryItems} key={item+index}>
            <img src={require('../../../assets/img/logo.png')} alt="" />
            <p>{item.label}</p>
          </div>
        ))
      }
      
  
    </div>
  )
}
