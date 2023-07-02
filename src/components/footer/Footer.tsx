/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import classnames from "classnames";
import { useNavigate } from "react-router-dom";
import { FOOTER_ITEMS } from "../../constants/footerItems";
import { FooterItemTypes } from "../../dto/footerItems";
import styles from "./Footer.module.scss";

export default function Footer() {
  const navigate = useNavigate();
  const footerItemRef = useRef<any>([]);
  const [selected, setSelected] = useState<any>(FOOTER_ITEMS[0]);

  useEffect(() => {
    handleRoute(FOOTER_ITEMS[0]);
  }, []);

  function handleRoute(ele: any) {
    const selectedItem = FOOTER_ITEMS.filter((item: any) => item === ele);
    setSelected(selectedItem);
    navigate(`/${ele.item}`);
  }

  return (
    <footer className={styles.footer}>
      <nav>
        {FOOTER_ITEMS.map((item: FooterItemTypes, index: number) => (
          <div
            className={classnames(styles.navItem, {
              [styles.active]: selected[0] === item,
            })}
            key={index}
            ref={(el) => (footerItemRef.current[index] = el)}
            onClick={() => handleRoute(item)}
          >
            <img
              src={selected[0] === item ? item.img_active : item.img}
              alt=""
            />
            <p className={styles.itemLabel}>{item.item}</p>
          </div>
        ))}
      </nav>
    </footer>
  );
}
