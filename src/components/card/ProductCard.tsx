import { urlFor } from "../../client";
import { productTypes } from "../../dto/products";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ data }: { data: productTypes }) {
  return (
    <div className={styles.productWrapper}>
      <div className={styles.price}>
        <b>$</b>
        {data.price}
      </div>
      <img src={urlFor(data.image).url()} alt="" />
      <div className={styles.itemInfo}>
        <p className={styles.name}>{data.name}</p>
        <p className={styles.description}>{data?.short_description}</p>
      </div>
    </div>
  );
}
