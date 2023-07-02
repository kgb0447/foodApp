import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../utils/hooks/redux/hooks";
import { RootState } from "../../store/store";
import { removeSpaces } from "../../utils/helpers";
import { getActiveCategory } from "../../features/getServiceProperty/getServiceProperty";
import styles from "./styles.module.scss";
import { urlFor } from "../../client";

export default function Categories() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const categories = useAppSelector(
    (state: RootState) => state.serviceAPI.categories
  );
  console.log(categories, "categories");
  const handleSelect = (ele: any) => {
    // setActiveCat(ele.trim());
    // dispatch(getActiveCategory({ data: data, value: ele }));
    navigate(`/foodMenu/${ele.trim()}`);
  };

  // useEffect(() => {
  //   (()=>{
  //     if(categories){
  //       dispatch(getCategory(categories));
  //       dispatch(getMenuList(categories));
  //     }
  //   })()
  // }, [categories])

  // if(!categories){
  //   return <div> .... loading</div>
  // }

  // const res =data.map((item:any)=> item.menuList);
  // const prices =  res.map((item:any)=> item.map((val:any)=> val));

  // const lowestPrice = prices.sort((a:any,b:any)=> a.price - b.price).slice(0,2);
  // console.log(category.toLowerCase(),"category")

  return (
    <div className={styles.categoryWrapper}>
      {categories?.map((item, index) => (
        <div
          className={styles.categoryItems}
          key={item.name + index}
          onClick={() => handleSelect(item.name)}
        >
          <img src={urlFor(item.image).url()} alt="" />
          <p> {item.name}</p>
        </div>
      ))}
    </div>
  );
}
