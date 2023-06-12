import React, { useState, useTransition } from 'react'
import PageHeader from '../../components/pageHaders/PageHeader'
import { page } from '../../const/burriedPoint'
import clasnames from 'classnames';
import styles from './Location.module.scss'
import Upcomming from '../../components/upcomming/Upcomming';
import History from '../../components/history/History';

export default function Location() {
  const TAB_ITEMS = ["Upcoming","History"];
  const [selectedTab,setSelectedTab] = useState<any>("Upcoming");
  const [isPending,startTransition] = useTransition();

  const setActiveTab =(val:any) =>{
    setSelectedTab(TAB_ITEMS.filter((item) => item === val)[0]);
  }

  const showSelectedTab = () => {
    if(selectedTab === "Upcoming"){
      return <Upcomming/>
    } else {
      return <History/>
    }
  }

  return (
    <div className={styles.locationWrapper}>
      <PageHeader title={page.orders}/>
      <div className={styles.tabs}>
        {
          TAB_ITEMS.map((item,index) => (
            <div className={clasnames(styles.tabItems,{[styles.active]:selectedTab === item})} key={item + index} onClick={()=> setActiveTab(item)}>{item}</div>
          ))
        }
       
      </div>
      {
          showSelectedTab()
        }
    </div>
  )
}
