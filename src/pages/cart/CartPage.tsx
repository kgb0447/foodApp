import React from 'react'
import { productTypes } from '../../dto/products'
import { RootState } from '../../store/store'
import { useAppSelector } from '../../utils/hooks/redux/hooks'
import styles from './CartPage.module.scss'
export default function CartPage() {
  const cart = useAppSelector((state: RootState) => state.cart.cartItems);
  
  return (
    <div className={styles.cartWrapper}>
      {
        cart.map((item: productTypes) => (
          <div key={item.id}>
            <p>{item.name}</p>
            
          </div>
          )
        )
      }
    </div>
  )
}
