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
      getDuplicateItems();
    },[])

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

    const getDuplicateItems = () => {
      let cartItemWithCount:any = {};
        cart.forEach(function(i) {
          cartItemWithCount[i.food_id] = (cartItemWithCount[i.food_id]||0) + 1;
        });

        const stringCartKeys = Object.keys(cartItemWithCount);
        
        let numberArray:any=[];
        for (var i = 0; i < stringCartKeys.length; i++) numberArray.push(parseInt(stringCartKeys[i]));
          
        let arrayOfOrders = [];
        const found = products.some((r:any)=>  numberArray.includes(r.id));
        for(let i = 0; i < products.length; i++){
            if(products.some((r:any)=>  numberArray.includes(r.id))){
              arrayOfOrders.push(products[i]);
            } else{
            return arrayOfOrders
          }
        }

        for(var i = 0; i < arrayOfOrders.length; i++){
          setCartToMap(arrayOfOrders.map((item:any,index:number) => ({...item,quantity: Object.values(cartItemWithCount)[index]})))
        }
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
              <div className={styles.quantity}>{item.quantity}</div>
              <button className={styles.add} onClick={()=>  addQuantity(item)}>+</button>
            </div>
          </div>  
          )
        )) : <h1>...Loading</h1>
      }
    </div>
  )
}
