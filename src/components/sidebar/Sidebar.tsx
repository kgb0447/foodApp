import React, { useRef, useState } from "react";
import classnames from "classnames";
import { sidebarItemTypes } from "../../dto/sidebarItems";
import { sidebarItems } from "../../constants/sidebar";
import styles from "./Sidebar.module.scss";

interface SidebarTypes {
  callBack: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
  state: React.SetStateAction<boolean>;
}

export default function Sidebar({ state, callBack }: SidebarTypes) {
  const [isOn, setIsOn] = useState(false);
  const hideSideBar = () => {
    callBack(false);
  };

  return (
    <div
      className={classnames(styles.sidebarContainer, {
        [styles.sidebarActive]: state,
      })}
    >
      <section onClick={() => setIsOn(true)} className={styles.sidebar}>
        <div className={styles.userCard}>
          <div className={styles.avatar}>
            <img src={require("../../assets/img/user/avatar2@2x.png")} alt="" />
          </div>
          <div className={styles.userInfo}>
            <h2 className={styles.userName}>Bisco</h2>
            <p className={styles.email}>kael@gmail.com</p>
          </div>
          <div className={styles.close} onClick={hideSideBar}>
            <img
              src={require("../../assets/img/icons/arrow_left_icon@2x.png")}
              alt=""
            />
          </div>
        </div>
        <ul className={styles.sidebarList}>
          {sidebarItems.map((item: sidebarItemTypes, index: number) => (
            <li className={styles.sidebarItem} key={item.item + index}>
              <img src={item.imgSrc} alt="" key={`${item} + ${index}`} />
              <span>{item.item}</span>
            </li>
          ))}
        </ul>
      </section>
      <div
        className={classnames(styles.overlay, {
          [styles.activeOverlay]: state,
        })}
        onClick={hideSideBar}
      ></div>
      <div className={styles.log_outButton}>
        <img
          src={require("../../assets/img/icons/log_out_icon@2x.png")}
          alt=""
        />
        <span>Log Out</span>
      </div>
    </div>
  );
}
