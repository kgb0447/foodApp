import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../utils/hooks/redux/hooks';
import { RootState } from '../../../store/store';
import { removeSpaces } from '../../../utils/helpers';
import { getActiveCategory } from '../../../features/getServiceProperty/getServiceProperty';
import styles from './styles.module.scss'

export default function Categories() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const myCategories = useAppSelector((state: RootState) => state.serviceAPI.categories);
  const data = useAppSelector((state:RootState) => state.serviceAPI.data)
  
  const handleSelect = (ele:any) => {
    // setActiveCat(ele.trim());
    dispatch(getActiveCategory({data:data,value:ele}));
    navigate(`/foodMenu/${ele.trim()}`)
    
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
        myCategories.map((item:string,index:number) => (
          <div className={styles.categoryItems} key={item+index} onClick={()=> handleSelect(item)}>
            <img src={require(`../../../assets/img/category/${removeSpaces(item)}_icon@2x.png`)} alt="" />
            <p>{item}</p>
          </div>
        ))
      }

    </div>
  )
}
