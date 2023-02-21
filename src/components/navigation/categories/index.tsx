import React, { useEffect, useState } from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux/hooks';
import { getCategory,getMenuList } from '../../../reducers/fetchedAPIReducer/mapFeatureSlice';
import { RootState } from '../../../store/store';

import { productTypes } from '../../../dto/products';
import styles from './styles.module.scss'

export default function Categories({data}:{data:any}) {
  const [categories,setCategories] = useState([])
  
  // const dispatch = useAppDispatch();
  // const category = useAppSelector((state:RootState) => state.mapperReducer.category);
 
  useEffect(() => {
    if(data){
      const categories = data.map((item:any) => item.categories).flat();
      setCategories(Array.from(new Set(categories)))
    }

    return () => {
      setCategories([]);
    }
  }, [data])

  if(!data){
    return <div>...loading</div>
  }
  console.log(data,"ttt")
  // useEffect(() => {
  //   (()=>{
  //     if(categories){
  //       dispatch(getCategory(categories));
  //       dispatch(getMenuList(categories));
  //     }
  //   })()
  // }, [categories])
  
  // if(!categories){
  //   return <div> .... loading</div>
  // }

  // const res =data.map((item:any)=> item.menuList);
  // const prices =  res.map((item:any)=> item.map((val:any)=> val));

  // const lowestPrice = prices.sort((a:any,b:any)=> a.price - b.price).slice(0,2);
  // console.log(category.toLowerCase(),"category")


 
  
  return (
    <div className={styles.categories} style={{background:``}}>
      {
        categories.map((item:string,index:number) => (
          <div className={styles.categoryItems} key={item+index}>
            <img src={`../../../assets/img/category/${item}_icon@2x.png`} alt="" />
            <p>{item}</p>
          </div>
        ))
      }

    </div>
  )
}
