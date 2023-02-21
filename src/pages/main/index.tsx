import {useReducer,useEffect, useState} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Categories from '../../components/navigation/categories'
import Searchbar from '../../components/searchbar/Searchbar'
import Sidebar from '../../components/sidebar/Sidebar'
import HorizontalSwiper from '../../components/swiper/horizontal/HorizontalSwiper'
import { RootState } from '../../store/store'
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks'
import styles from './styles.module.scss'
import { getCategories } from '../../reducers/categories/categoryFeatureSlice'
import useFetch from '../../utils/hooks/useFetch'
import { PRODUCT_API, RESTAURANT_API } from '../../const/commonService'



export default function MainPage() {
  const dispatch = useAppDispatch();
  const menuList = useAppSelector((state:RootState) => state.mapperReducer.menuList);
  const cat = useAppSelector((state: RootState) => state.categoryReducer.items);
  const {data} = useFetch(RESTAURANT_API);

  console.log("cat",cat)
  const [isShown,setIsShown] = useState<React.SetStateAction<boolean>>(false);

  console.log("menuList",menuList)

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco' callBack={setIsShown}/>
        <div className={styles.greetings}>
        What would you like to order?
        </div>
        <Searchbar/>
        <Categories data={data} />
        <section className={styles.foodContent}>
          <HorizontalSwiper swiperItems={data}/>
          {/* <HorizontalSwiper swiperItems={menuList}/> */}
        </section>
        {
          isShown ? (<Sidebar state={isShown} callBack={setIsShown}/>) : null
        }
        <Footer/>
    </div>
  )
}
