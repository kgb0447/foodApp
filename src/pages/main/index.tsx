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
// import { getCategories } from '../../reducers/categories/categoryFeatureSlice'
import useFetch from '../../utils/hooks/useFetch'
import { PRODUCT_API, RESTAURANT_API } from '../../const/commonService'
import { useSelector,useDispatch } from 'react-redux'
import { getData } from '../../features/serviceAPI/serviceAPISlice'



export default function MainPage() {
 
  const dispatch = useAppDispatch();
  const menuList = useAppSelector((state:RootState) => state.mapperReducer.menuList);
  const cat = useAppSelector((state: RootState) => state.categoryReducer.items);
  const {data} = useFetch(RESTAURANT_API);
  const [activeCat,setActiveCat] = useState('');
  const [isShown,setIsShown] = useState<React.SetStateAction<boolean>>(false);
  const myData = useAppSelector((state: RootState) => state.serviceAPI.data);
  const isLoading = useAppSelector((state:RootState) => state.serviceAPI.isLoading)


  useEffect(() => {
    dispatch(getData());
   
      
    
  }, [dispatch]);

  if(isLoading){
    return <h1>...Loading</h1>
  }

  console.log(myData,"myData")

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco' callBack={setIsShown}/>
        <div className={styles.greetings}>
        What would you like to order?
        </div>
        <Searchbar />
        <Categories data={data} setActiveCat={setActiveCat}/>
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
