import React from 'react'
import { SocailMediaAcccountLogIn } from '../SocialMediaAccountLogIn'
import styles from './SignUp.module.scss'
export default function SignUp() {


  const handleSignUp = (e:any) => {
    e.preventDefault();
    const userNameInput = e.target[0].value;
    const userPasswordInput = e.target[1].value;
    const userConfirmPassword = e.target[2].value;
    console.log("test event",userNameInput,userPasswordInput,userConfirmPassword)
    if(userPasswordInput === userConfirmPassword){
      console.log("test event Match")
    } else{
      console.log("test event Not match")
    }
  }
  return (
    <div className={styles.registerWrapper
    }>
      <header className={styles.entryHeader}>
        <h2>Sign UP</h2>
      </header>

      <form action="submit" onSubmit={handleSignUp}>
        <label htmlFor="username" >User Name</label>
        <input type="email" id="username" autoComplete='null'/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="password" autoComplete='null'/>
        <label htmlFor="confirmPassword" >Full Name</label>
        <input type="password" name="" id="confirmPassword" />

        <input type="submit" value="Sign Up"/>
      </form>
      <SocailMediaAcccountLogIn/>
      {/* <div className={styles.login}>Already have an account? <u>Sign In</u></div> */}
    </div>
  )
}
