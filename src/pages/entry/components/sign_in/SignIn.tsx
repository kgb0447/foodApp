import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginTypes } from '../../../../dto/login'
import { userTypes } from '../../../../dto/userTypes'
import useFetch from '../../../../utils/hooks/useFetch'
import { SocailMediaAcccountLogIn } from '../SocialMediaAccountLogIn'
import styles from './SignIn.module.scss'


export default function SignIn() {

  const [user,setUser] = useState<loginTypes>({userName:"",isLoggedIn: false})
    const navigate = useNavigate();
    const {data} = useFetch(' http://localhost:0447/users');
    console.log(data,"data")

    if(!data){
        return <h1>...Loading</h1>
    }
  const handleSignUp = (e:any) => {
    e.preventDefault();

    const un = data.map((item:userTypes) => item.username);
    const pw = data.map((item:userTypes) => item.password);
    const emaiInput = e.target[0].value ;
    const passwordInput = e.target[1].value;

    if(un.includes(emaiInput) && pw.includes(passwordInput)){
       sessionStorage.setItem("user",emaiInput);
       sessionStorage.setItem("password",passwordInput);
        setUser({userName:emaiInput,isLoggedIn:true})
        navigate('/home')
    }else{
        console.log("world")
    }
  }
  return (
    <div className={styles.loginWrapper
    }>
      <header className={styles.entryHeader}>
        <h2>Sign In</h2>
      </header>

      <form action="submit" onSubmit={handleSignUp}>
        <label htmlFor="username" >User Name</label>
        <input type="email" id="username" autoComplete='null'/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="password" autoComplete='null'/>

        <input type="submit" value="Sign In"/>
      </form>
      <SocailMediaAcccountLogIn/>
      <div className={styles.login}>Don't have an account? <u>Sign Up</u></div>
    </div>
  )
}
