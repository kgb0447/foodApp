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
        for(let i = 0; i < products.length; i++){
            if(products.some((r:any)=>  numberArray.includes(r.id))){
              arrayOfOrders.push(products[i]);
            } else{
            return arrayOfOrders
          }
        }
        setCartToMap(arrayOfOrders.map((item:any,index:number) => ({...item,quantity: Object.values(cartItemWithCount)[index]}))) 
      }

      const getTotal = () => {
        let myTotal = 0;
        for(let i = 0; i < cartToMap.length; i++){
          //@ts-ignore
          return myTotal = cartToMap[i].price * cartToMap[i]?.quantity
        }
      }
      console.log(getTotal(),"getTotal")
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
      <section className={styles.computationSection}>
        <div>Subtotal: <span>$0</span> </div> 
        <div>Tax Fees: <span>$0</span></div>
        <div>Delivery Fee: <span>$0</span></div>
        <div>Total: <span>${getTotal()}</span></div>
      </section>
      <button className={styles.checkoutBtn}>Checkout</button>  
    </div>
  )
}
