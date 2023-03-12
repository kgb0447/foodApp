
import { productTypes } from '../../dto/products'
import cs from 'classnames'
import styles from './ProductCard.module.scss'


export default function ProductCard({data}:{data: productTypes}) {
  return (
    <div className={styles.productWrapper}>
        <div className={styles.price}><b>$</b>{data.price}</div>
        <img src="" alt="" />
        <div className={styles.itemInfo}>
            <p className={styles.name}>{data.name}</p>
            <p className={styles.description}>{data.description}</p>
        </div>
        
    </div>
  )
}
