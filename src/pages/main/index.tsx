import {useEffect, useState} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Categories from '../../components/navigation/categories'
import Searchbar from '../../components/searchbar/Searchbar'
import Sidebar from '../../components/sidebar/Sidebar'
import HorizontalSwiper from '../../components/swiper/horizontal/HorizontalSwiper'
import { RootState } from '../../store/store'
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks'
import { getData } from '../../features/serviceAPI/serviceAPISlice'
import styles from './styles.module.scss'



export default function MainPage() {
 
  const dispatch = useAppDispatch();
  const [isShown,setIsShown] = useState<React.SetStateAction<boolean>>(false);
  const isLoading = useAppSelector((state:RootState) => state.serviceAPI.isLoading)
  const data = useAppSelector((state:RootState) => state.serviceAPI.data)

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  if(isLoading){
    return <h1>...Loading</h1>
  }

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco' callBack={setIsShown}/>
        <div className={styles.greetings}>
        What would you like to order?
        </div>
        <Searchbar />
        <Categories />
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
