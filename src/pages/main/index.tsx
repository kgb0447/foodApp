import {useReducer,useEffect, useState} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Categories from '../../components/navigation/categories'
import Searchbar from '../../components/searchbar/Searchbar'
import Sidebar from '../../components/sidebar/Sidebar'
import HorizontalSwiper from '../../components/swiper/horizontal/HorizontalSwiper'
import { RootState } from '../../store/store'
import { useAppSelector } from '../../utils/hooks/redux/hooks'
import styles from './styles.module.scss'



export default function MainPage() {
  const menuList = useAppSelector((state:RootState) => state.mapperReducer.menuList);

  const [isShown,setIsShown] = useState<React.SetStateAction<boolean>>(false);

  console.log("menuList",menuList)

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco' callBack={setIsShown}/>
        <div className={styles.greetings}>
        What would you like to order ?
        </div>
        <Searchbar/>
        <Categories/>
        <section className={styles.foodContent}>
          <HorizontalSwiper swiperItems={menuList}/>
          <HorizontalSwiper swiperItems={menuList}/>
        </section>
        {
          isShown ? (<Sidebar state={isShown} callBack={setIsShown}/>) : null
        }
        <Footer/>
    </div>
  )
}
