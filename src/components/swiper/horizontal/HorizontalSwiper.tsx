import { urlFor } from "../../../client";
import styles from "./HorizontalSwiper.module.scss";

interface HorizontalSwiperTypes {
  swiperItems: any[];
}

export default function HorizontalSwiper({
  swiperItems,
}: HorizontalSwiperTypes) {
  console.log(swiperItems, "swiperItems");
  return (
    <div className={styles.swiperContainer}>
      <header className={styles.swiperHeader}>
        <h1>Featured Restaurants</h1>
        <div className={styles.more}>View All</div>
      </header>
      <div className={styles.swiper}>
        {swiperItems.map((item: any) => (
          <div key={item._id} className={styles.swiperItems}>
            <img src={urlFor(item.image).url()} alt="" />
            <div className={styles.itemDesc}>
              <div className={styles.itemLabel}>{item.name}</div>
              <p>{item.short_description}</p>
            </div>
            <div className={styles.rateWrapper}>
              <div className={styles.rate}>{item?.ratings}</div>
              <span>({item.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
