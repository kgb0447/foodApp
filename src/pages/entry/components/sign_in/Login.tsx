import React from 'react'
import EntryForm from '../EntryForm'
import { SocailMediaAcccountLogIn } from '../SocialMediaAccountLogIn'
import styles from './Login.module.scss'
export default function Login() {
  const handleLogin = () => {

  }
  return (
    <div className={styles.loginWrapper}>
      <header className={styles.entryHeader}>
        <h2>Log in</h2>
      </header>
     <EntryForm formFor={"login"}/>

    </div>
  )
}
