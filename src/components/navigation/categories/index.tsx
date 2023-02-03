import React, { useEffect } from 'react'
import useFetch from '../../../utils/hooks/useFetch';
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux/hooks';
import { getCategory,getMenuList } from '../../../reducers/fetchedAPIReducer/mapFeatureSlice';
import { RootState } from '../../../store/store';
import styles from './styles.module.scss'

export default function Categories() {

  const {data} = useFetch('http://localhost:8888/menu');
  const dispatch = useAppDispatch();
  const category = useAppSelector((state:RootState) => state.mapperReducer.category);
 
  
  useEffect(() => {
    (()=>{
      if(data){
        dispatch(getCategory(data));
        dispatch(getMenuList(data));
      }
    })()
  }, [data])
  
  if(!data){
    return <div> .... loading</div>
  }

  // const res =data.map((item:any)=> item.menuList);
  // const prices =  res.map((item:any)=> item.map((val:any)=> val));

  // const lowestPrice = prices.sort((a:any,b:any)=> a.price - b.price).slice(0,2);
  // console.log(category.toLowerCase(),"category")
  return (
    <div className={styles.categories} style={{background:``}}>
      {
        category.map((item:string,index:number) => (
          <div className={styles.categoryItems} key={item+index}>
            <img src={require(`../../../assets/img/category/${item.toLowerCase()}_icon@2x.png`) } alt="" />
            
            <p>{item.toLowerCase()}</p>
          </div>
        ))
      }
      
  
    </div>
  )
}
