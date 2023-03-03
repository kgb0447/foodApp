import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { PRODUCT_API } from '../../const/commonService';
import useFetch from '../../utils/hooks/useFetch';
import styles from './ProductPage.module.scss';
import {productTypes} from '../../dto/products'
import { useAppSelector } from '../../utils/hooks/redux/hooks';
import { RootState } from '../../store/store';


export default function ProductPage() {
    const [currentCategory,setCurrentCategory] = useState([]);
    const {data,isLoading} = useFetch(PRODUCT_API);
    const navigate = useNavigate();
    const activeCategory = useAppSelector((state: RootState) => state.serviceAPI.activeCategory);
    const {id} = useParams();

    const handleClose =() => {
        navigate('/discover');
    }
    
    useEffect(() => {
        setCurrentCategory(data.filter((item:any)=> item.categories.some((val:any) => val === "chicken")))
    }, [data])
    
    if(isLoading){
        return <h1>...Loading</h1>
    }

  return (
    <div className={styles.productPageWrapper}>
        <header>
            <h2>{id?.toLocaleUpperCase()}</h2>
            <p>{activeCategory.length} types of {id?.toLocaleUpperCase()}</p>
        </header>
        <div className={styles.close} onClick={handleClose}>
            <img src={require('../../assets/img/icons/arrow_left_icon@2x.png')} alt="" />
        </div>
        
        <section>
            {
                activeCategory.map((item:productTypes) => (
                    <div className={styles.foodItems} key={item.id}>
                        <div className={styles.price}><b>$</b>{item.price}</div>
                        <img src="" alt="" />
                        <div className={styles.itemInfo}>
                            <p className={styles.name}>{item.name}</p>
                            <p className={styles.description}>{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </section>
    </div>
  )
}
