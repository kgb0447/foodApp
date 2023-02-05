import {useReducer,useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Categories from '../../components/navigation/categories'
import Searchbar from '../../components/searchbar/Searchbar'
import HorizontalSwiper from '../../components/swiper/horizontal/HorizontalSwiper'
import { RootState } from '../../store/store'
import { useAppSelector } from '../../utils/hooks/redux/hooks'
import styles from './styles.module.scss'



export default function MainPage() {
  const menuList = useAppSelector((state:RootState) => state.mapperReducer.menuList);

  console.log("menuList",menuList)

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco'/>
        <div className={styles.greetings}>
        What would you like to order ?
        </div>
       <Searchbar/>
        <Categories/>
        <HorizontalSwiper swiperItems={menuList}/>
        {/* <Footer/> */}
    </div>
  )
}
