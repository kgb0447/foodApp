import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux/hooks";
import { RootState } from "../../store/store";
import { urlFor } from "../../client";
import { setActiveData } from "../../features/serviceAPI/activeServiceSlice";
import styles from "./styles.module.scss";

export default function Categories() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.serviceAPI.categories
  );

  const handleSelect = (ele: any) => {
    dispatch(setActiveData(ele)) 
    navigate(`/foodMenu/${ele.trim()}`);
  };

  return (
    <div className={styles.categoryWrapper}>
      {categories?.map((item, index) => (
        <div
          className={styles.categoryItems}
          key={item.name + index}
          onClick={() => handleSelect(item.name)}
        >
          <img src={urlFor(item.image).url()} alt="" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
}
