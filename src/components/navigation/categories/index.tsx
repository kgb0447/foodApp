import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useFetch from '../../../utils/hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux/hooks';
import { getCategory,getMenuList } from '../../../reducers/fetchedAPIReducer/mapFeatureSlice';
import { RootState } from '../../../store/store';
import { removeSpaces } from '../../../utils/helpers';

import { productTypes } from '../../../dto/products';
import styles from './styles.module.scss'

export default function Categories({data,setActiveCat}:{data:any,setActiveCat:any}) {
  const navigate = useNavigate();
  const [categories,setCategories] = useState([])
  
 
  useEffect(() => {
    if(data){
      const categories = data.map((item:any) => item.categories).flat();
      setCategories(Array.from(new Set(categories)))
    }

    return () => {
      setCategories([]);
    }
  }, [data])

  const handleSelect = (ele:any) => {
    setActiveCat(ele.trim());
    navigate(`/foodMenu/${removeSpaces(ele)}`);
    
  }

  if(!data){
    return <div>...loading</div>
  }

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
          <div className={styles.categoryItems} key={item+index} onClick={()=> handleSelect(item)}>
            <img src={require(`../../../assets/img/category/${removeSpaces(item)}_icon@2x.png`)} alt="" />
            <p>{item}</p>
          </div>
        ))
      }

    </div>
  )
}
