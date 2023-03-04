import React, { useEffect, useState } from 'react'
import { RootState } from '../../store/store';
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import {productTypes} from '../../dto/products'
import styles from './ProductPage.module.scss';

export default function ProductPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const activeCategory = useAppSelector((state:RootState) => state.getServiceProps.activeCategory);

    const handleClose =() => {
        navigate(-1);
    }
    console.log(activeCategory,"activeCategory")
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
