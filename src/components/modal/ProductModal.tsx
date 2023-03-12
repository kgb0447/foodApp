import React, { useEffect, useReducer, useState } from 'react'
import { useAppDispatch,useAppSelector } from '../../utils/hooks/redux/hooks'
import { RootState } from '../../store/store'
import {AiOutlineClose} from 'react-icons/ai'
import styles from './ProductModal.module.scss'
import ReactDOM from 'react-dom'
import { setCartItem } from '../../features/cart/cartFeature'
import useFetch from '../../utils/hooks/useFetch'
import { CART_API } from '../../const/commonService'

export default function ProductModal({callback,item}:{callback: any,item:any}) {
  const [foodItem,setFoodItem] = useState({});
  const dispatch = useAppDispatch();
  const {data} = useFetch(CART_API,postCartItems);
  const cart = useAppSelector((state : RootState) => state.cart.cartItems)

  const handleClick = () => {
    callback(false)
  }

  async function postCartItems (val:any) {
    const newCartItem = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        food_id: val.id
      })
    };

    try{
      const res =  await fetch('http://localhost:0447/users',newCartItem);
      const mydata = await res.json();
      console.log(mydata,"myData")
    } catch(e){
        alert(e)
    }
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} >
      <div className={styles.modalContainer}>ProductModal
        <AiOutlineClose onClick={handleClick} className={styles.modalCloseIcon}/>
        <div className={styles.modalContent}>
          <img src="" alt="" />
          <div className={styles.rateWrapper}>
            <div className={styles.rate}>5.5</div> <span>(2.5)</span>
          </div>
          <div className={styles.productName}>{item.name}</div>
          <div className={styles.price}>${item.price}</div>
          <div className={styles.itemDesc}>{item.description}</div>
          <button className={styles.addBtn} onClick={()=> postCartItems(item)}>Add to cart</button>
        </div>
      </div>
    </div>,
    document.body
  )
}

function setCartData(cart: { method: string; headers: { Accept: string }; body: string }): any {
  throw new Error('Function not implemented.')
}

function cartItems(cart: { method: string; headers: { Accept: string }; body: string }): any {
  throw new Error('Function not implemented.')
}

