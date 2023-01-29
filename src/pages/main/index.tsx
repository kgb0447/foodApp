import {useReducer,useEffect} from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Categories from '../../components/navigation/categories'
import styles from './styles.module.scss'


export default function MainPage() {

  return (
    <div className={styles.mainPage}>      
        <Header userInfo='Kael,Bisco'/>
        <div className={styles.greetings}>
          <h1>Hello Bisco </h1>
          <p>What do you want to eat?</p>
        </div>
       
        <Categories/>
        <Footer/>
    </div>
  )
}
