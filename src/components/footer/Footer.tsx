import React, { ReactHTMLElement, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Value } from 'sass'
import { FOOTER_ITEMS } from '../../constants/footerItems'
import { FooterItemTypes } from '../../dto/footerItems'
import styles from './Footer.module.scss'

export default function Footer() {
  const navigate = useNavigate();
    const handleRoute = (e: any) => {
      navigate(`/${e.target.innerHTML}`);
    }

  return (
    <footer className={styles.footer}>
      <nav>
        {
          FOOTER_ITEMS.map((item:FooterItemTypes,index: number ) => (
            <div className={styles.navItem} key={index}>
                <img src={item.img} alt="" />
                <p className={styles.itemLabel}  onClick={handleRoute}>{item.item}</p>
            </div>
          ))
        }
      </nav>
    </footer>
  )
}
