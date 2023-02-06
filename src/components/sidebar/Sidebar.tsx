import React, { useRef, useState } from 'react'
import styles from './Sidebar.module.scss'
import './Sidebar.module.scss';
import classnames from 'classnames';
import { sidebarItemTypes } from '../../dto/sidebarItems';
import { sidebarItems } from '../../constants/sidebar';
interface SidebarTypes{
    callBack: React.Dispatch<React.SetStateAction<React.SetStateAction<boolean>>>;
    state: React.SetStateAction<boolean>
}

export default function Sidebar({state,callBack}:SidebarTypes) {
    const sidebarRef = useRef<any>(null);
    const [isOn,setIsOn] = useState(false)
    const showSidebar = () => {
         callBack(false);

        
      }
    
       
   
  return (
    <div className={styles.sidebarContainer}>
        {/* <section className={classnames(styles.sidebar,
            {
                "sidebar active": state,
                " inactive": !state
            })}> */}
            {/* <section className={`${styles.sidebar} ${styles.active}`} ref={sidebarRef}> */}

            <section onClick={()=> setIsOn(true)} className={classnames(styles.sidebar,{[styles.active]:state=== true,[styles.inactive]:state===false})} >


            {/* <div className={classnames(styles.test,{[styles.actives]: isOn,[styles.normal]:!isOn})}>test</div>
            <button onClick={()=> setIsOn(!isOn)}>clicked</button> */}
                <div className={styles.userCard}>
                    <div className={styles.avatar}>
                        <img src={require('../../assets/img/user/avatar2@2x.png')} alt="" />
                    </div>
                    <div className={styles.userInfo}>
                        <h2 className={styles.userName}>Bisco</h2>
                        <p className={styles.email}>kael@gmail.com</p>
                    </div>
                    <div className={styles.close} onClick={showSidebar}>
                        <img src={require('../../assets/img/icons/arrow_left_icon@2x.png')} alt="" />
                    </div>
                </div>
                <ul className={styles.sidebarList}>
                    {
                        sidebarItems.map((item:sidebarItemTypes,index:number) => (
                            <li className={styles.sidebarItem}>
                                    <img src={item.imgSrc} alt="" key={`${item} + ${index}`}/>
                                <span>{item.item}</span>
                            </li>
                        ))
                    }
                </ul>
            </section>
            
        <div className={styles.overlay} onClick={showSidebar}></div>
        <div className={styles.log_outButton}>
            <img src={require('../../assets/img/icons/log_out_icon@2x.png')} alt="" />
            <span>Log Out</span>
        </div>
    </div>
  )
}
