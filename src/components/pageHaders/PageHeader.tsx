import React from 'react'
import { pageHeaderTypes } from '../../dto/pageHeader'
import BackBtn from '../backBtn/BackBtn'



import styles from './PageHeader.module.scss'


export default function PageHeader({title="Bisco's Food App"}:pageHeaderTypes) {
  return (
    <div className={styles.header}>
         <BackBtn navigateTo={'/discover'} left={30} top={20}/>
        <h2>{title}</h2>
        <img className={styles.userAvatar} src={require('../../assets/img/user/avatar2@2x.png')} alt="" />
    </div>
  )
}
