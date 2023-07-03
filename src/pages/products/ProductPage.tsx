import { useState } from "react";
import ProductCard from "../../components/card/ProductCard";
import { RootState } from "../../store/store";
import { useAppSelector } from "../../utils/hooks/redux/hooks";
import { useNavigate } from "react-router-dom";
import { productTypes } from "../../dto/products";
import styles from "./ProductPage.module.scss";

export default function ProductPage() {
  const selectedCategory = useAppSelector((state:RootState) => state.activeProduct.active_category)
  const isLoading = useAppSelector((state:RootState) => state.activeProduct.isLoading)

  const navigate = useNavigate();
  const activeCategory = useAppSelector(
    (state: RootState) => state.getServiceProps.activeCategory
  );
  const [isSelected, setIsSelected] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const handleClose = () => {
    const PREV_PAGE: number = -1;
    navigate(PREV_PAGE);
  };
  console.log(selectedCategory,"selectedCategory")
  const handleSelect = (val: any) => {
    setIsSelected(true);
    setSelectedItem(activeCategory.filter((item: any) => item === val)[0]);
  };

  if(isLoading) {
    return <h1>...Loading</h1>
  }
  return (
    <div className={styles.productPageWrapper}>
      <header>
        <h2>{selectedCategory.name.toLocaleUpperCase()}</h2>
        <p>
          {selectedCategory?.dishes?.length} types of {selectedCategory.name}
        </p>
      </header>
      <div className={styles.close} onClick={handleClose}>
        <img
          src={require("../../assets/img/icons/arrow_left_icon@2x.png")}
          alt=""
        />
      </div>
      {selectedCategory.dishes.map((item: productTypes) => (
        <div key={item.id} onClick={() => handleSelect(item)}>
          <ProductCard data={item} />
        </div>
      ))}
      {/* {isSelected ? (
        <ProductModal callback={setIsSelected} item={selectedItem} />
      ) : null} */}
    </div>
  );
}
