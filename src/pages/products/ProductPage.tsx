import React, { useEffect, useState } from 'react'
import { RootState } from '../../store/store';
import { useAppSelector,useAppDispatch } from '../../utils/hooks/redux/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import {productTypes} from '../../dto/products'
import styles from './ProductPage.module.scss';
import ProductModal from '../../components/modal/ProductModal';
import ProductCard from '../../components/card/ProductCard';

export default function ProductPage() {
    const navigate = useNavigate();
    const {id} = useParams();
    const activeCategory = useAppSelector((state:RootState) => state.getServiceProps.activeCategory);
    const [isSelected,setIsSelected] = useState(false);
    const [selectedItem,setSelectedItem] = useState({})

    const handleClose =() => {
        navigate(-1);
    }
    console.log(activeCategory,"activeCategory")
    const handleSelect = (val:any) => {
        setIsSelected(true);
        setSelectedItem(activeCategory.filter((item:any) => item === val)[0]);
        
    }
    console.log(selectedItem,"isSelected")
  return (
    <div className={styles.productPageWrapper}>
        <header>
            <h2>{id?.toLocaleUpperCase()}</h2>
            <p>{activeCategory.length} types of {id?.toLocaleUpperCase()}</p>
        </header>
        <div className={styles.close} onClick={handleClose}>
            <img src={require('../../assets/img/icons/arrow_left_icon@2x.png')} alt="" />
        </div>
        {
            activeCategory.map((item:productTypes) => (
                <div key={item.id} onClick={() => handleSelect(item)}>
                    <ProductCard data={item}/>
                </div>
            ))
        }
        {
            isSelected ? <ProductModal callback={setIsSelected} item={selectedItem} /> : null
        }
    </div>
  )
}
