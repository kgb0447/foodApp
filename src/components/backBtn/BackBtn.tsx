import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './BackBtn.module.scss'

interface BackBtnTypes{
    callback ?: any,
    top?: string|number,
    left?: string|number,
    right?: string|number,
    bottom?: string|number,
}
const RETURN_PREVIOUS_PAGE : number= -1;
export default function BackBtn({callback = RETURN_PREVIOUS_PAGE,top,left,right,bottom}:BackBtnTypes) {
    const navigate = useNavigate();
  return (
    <button className={styles.closeBtn} style={{top: top, right:right , bottom:bottom , left:left}} onClick={() => navigate(callback)} >
        <img src={require('../../assets/img/icons/arrow_left_icon@2x.png')} alt="" />
    </button>
  )
}
