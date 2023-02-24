import React, { ReactHTMLElement, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Value } from 'sass'
import { FOOTER_ITEMS } from '../../constants/footerItems'
import { FooterItemTypes } from '../../dto/footerItems'
import styles from './Footer.module.scss'
import classnames from 'classnames'

export default function Footer() {
  const navigate = useNavigate();
  const {id} = useParams();
  const footerItemRef = useRef<any>([]);
  const [selected,setSelected] = useState<any>(FOOTER_ITEMS[0]);
  
  useEffect(() => {
    handleRoute(FOOTER_ITEMS[0]);
  },[])
    const handleRoute = (ele: any) => {
      const selectedItem = FOOTER_ITEMS.filter((item:any) => item === ele);
      setSelected(selectedItem);
      navigate(`/${ele.item}`);
      console.log(ele,"elleee")
    }


  return (
    <footer className={styles.footer}>
      <nav>
        {
          FOOTER_ITEMS.map((item:FooterItemTypes,index: number ) => (
            <div className= {classnames(styles.navItem,{[styles.active]:selected[0] === item})} key={index} ref={el => footerItemRef.current[index] = el}  onClick={()=>handleRoute(item)}>
                <img src={selected[0] === item ?  item.img_active : item.img } alt="" />
                <p className={styles.itemLabel}>{item.item}</p>
            </div>
          ))
        }
      </nav>
    </footer>
  )
}
