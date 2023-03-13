import ReactDOM from 'react-dom'
import {AiOutlineClose} from 'react-icons/ai'
import { useAppDispatch,useAppSelector } from '../../utils/hooks/redux/hooks'
import { setCartItem } from '../../features/cart/cartFeature'
import styles from './ProductModal.module.scss'

export default function ProductModal({callback,item}:{callback: any,item:any}) {
  const dispatch = useAppDispatch();

  const closeModal = () => {
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
    dispatch(setCartItem(newCartItem))
  }

  return ReactDOM.createPortal(
    <div className={styles.modalOverlay} >
      <div className={styles.modalContainer}>ProductModal
        <AiOutlineClose onClick={closeModal} className={styles.modalCloseIcon}/>
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


