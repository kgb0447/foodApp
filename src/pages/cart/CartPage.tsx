import {useEffect, useState} from 'react'
import BackBtn from '../../components/backBtn/BackBtn'
import {AiOutlineClose} from 'react-icons/ai'
import { productTypes } from '../../dto/products'
import { RootState } from '../../store/store'
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks'
import { setCartItem } from '../../features/cart/cartFeature'
import styles from './CartPage.module.scss'

export default function CartPage() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state: RootState) => state.cart.cartItems);
  const products = useAppSelector((state:RootState) => state.serviceAPI.data);
  const [cartToMap,setCartToMap] = useState<productTypes[]>([]);

    useEffect(()=>{
      dispatch(setCartItem({}));
      setCartToMap(getCartMatchFromProducts())
    },[])
  
    const getCartMatchFromProducts = () =>  {
      let cartedItems: productTypes[] = [];
      const testProd = products.map((item:productTypes) => item.id);

      for(var i in cart){
        if(testProd.indexOf(cart[i].food_id) > -1){
          cartedItems.push(products[i]);
        }
      }
      const cartItems =  cartedItems.filter((item:productTypes) => item !== undefined)
      return cartItems
    }

    const addQuantity = async (value : any) => {
      const newCartItem = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
          food_id: value.id
        })
      };
      dispatch(setCartItem(newCartItem))
    }

    const removeItem = () => {
      console.log("...todo remove items")
    }
    
  return (
    <div className={styles.cartWrapper}>
      <header>
        <BackBtn left={0} top={20}/>
        <h2>Cart</h2>
      </header>
     
      {
        Array.isArray(cartToMap) ? 
        (cartToMap.map((item: productTypes) => (
          <div key={item.id} className={styles.items}>
            <AiOutlineClose className={styles.closeIcon} onClick={removeItem}/>
            
            <img src="" alt="" />
            <div className={styles.itemInfo}>
              <h2>{item.name}</h2>
              <p>{item.description}</p>
              <p>${item.price}</p>
            </div>
            <div className={styles.quantityWrapper}>
              <button className={styles.minus}>-</button>
              <div className={styles.quantity}>{cart.length}</div>
              <button className={styles.add} onClick={()=>  addQuantity(item)}>+</button>
            </div>
          </div>  
          )
        )) : <h1>...Loading</h1>
      }
    </div>
  )
}
