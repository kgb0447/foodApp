import {useEffect, useState} from 'react'
import BackBtn from '../../components/backBtn/BackBtn'
import { productTypes } from '../../dto/products'
import { RootState } from '../../store/store'
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks'
import { setCartItem } from '../../features/cart/cartFeature'
import {AiOutlineClose} from 'react-icons/ai'
import styles from './CartPage.module.scss'

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.cartItems);
  const products = useAppSelector((state:RootState) => state.serviceAPI.data);
  const [cartToMap,setCartToMap] = useState<productTypes[]>([])
 
  const cartItems = cart.map((item:any) => item.food_id);
  console.log("cartItems:",cartItems)
  const productAtCart = products.filter((item:any) => item.id === cartItems);

    useEffect(()=>{
      dispatch(setCartItem({}));
      const item = getCartMatchFromProducts();
      setCartToMap(item)
    },[])
  

   const getCartMatchFromProducts = () =>  {
      let cartedItems: productTypes[] = [];
      const testProd = products.map((item:productTypes) => item.id);
      for(var i in cart){
        if(testProd.indexOf(cart[i].food_id) > -1){
          cartedItems.push(products[i]);
        }
      }
      return cartedItems
    }

 
    console.log(cartToMap,"rarrr")
  return (
    <div className={styles.cartWrapper}>
      <header>
        <BackBtn left={0} top={20}/>
        <h2>Cart</h2>
      </header>
      {
        cartToMap.map((item: productTypes) => (
          <div key={item.id} className={styles.items}>
            <AiOutlineClose className={styles.closeIcon}/>
            <img src="" alt="" />
            <div className={styles.itemInfo}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
            <div className={styles.quantityWrapper}>
              <button className={styles.minus}>-</button>
              <div className={styles.quantity}>{cartToMap.length}</div>
              <button className={styles.add}>+</button>
            </div>
          </div>  
          )
        )
      }
    </div>
  )
}
