import React, { useEffect, useState } from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux/hooks';
import { getCategory,getMenuList } from '../../../reducers/fetchedAPIReducer/mapFeatureSlice';
import { RootState } from '../../../store/store';
import styles from './styles.module.scss'
import { productTypes } from '../../../dto/products';

export default function Categories({data}:{data:any}) {
  const [categories,setCategories] = useState([])
  
  // const dispatch = useAppDispatch();
  // const category = useAppSelector((state:RootState) => state.mapperReducer.category);
 
  useEffect(() => {
    if(data){
      const categories = data.map((item:any) => item.categories).flat();
      const allCategories : any= new Set(categories);
      setCategories(allCategories)
    }
  }, [])

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

  
    
    console.log(categories,"!!!!!")
 
  
  return (
    <div className={styles.categories} style={{background:``}}>
      {
        categories.length >= 1 ? (categories.map((item:string,index:number) => (
          <div className={styles.categoryItems} key={item+index}>
            
            <p>{item}</p>
          </div>
        ))) : null
      }

    </div>
  )
}
