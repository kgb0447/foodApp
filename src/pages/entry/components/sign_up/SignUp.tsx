import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { userTypes } from '../../../../dto/userTypes';
import useFetch from '../../../../utils/hooks/useFetch';
import { SocailMediaAcccountLogIn } from '../SocialMediaAccountLogIn'
import styles from './SignUp.module.scss'
// import { isEqual } from '../../../../utils/helpers';



export default function SignUp() {
  const navigate = useNavigate();
  const [myUser,setMyUser] = useState([]);
  const {data} = useFetch('http://localhost:0447/users');
  const [hasErr,setHasErr] = useState(false);
  const [isEqual,setIsEqual] = useState(false)


  const handleSignUp = (e:any) => {
    e.preventDefault();
    const userNameInput = e.target[0].value;
    const userPasswordInput = e.target[1].value;
    const userConfirmPassword = e.target[2].value;

    if(userNameInput.length > 3 && userPasswordInput.length > 3){ 
      if(userPasswordInput === userConfirmPassword){
        if(!checkUserNameDuplicate(userNameInput,data)){
          signUp(userNameInput,userPasswordInput);
          setIsEqual(true);
          navigate('/discover')
          
        }
        else{
          console.log("The username was already taken")
        }
      }
    } 
  }
  const checkUserNameDuplicate = (userInput:string,arr:any) : boolean => {
    const usernames = arr.map((item:any) => item.username);
    
    return usernames.includes(userInput);
  }
  const signUp = async(username: string,password:string) => {
    const newUser = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        fullName: "",
        username: username,
        password: password
      })
    };

    try{
      const res =  await fetch('http://localhost:0447/users',newUser);
      const data = await res.json();
      setMyUser(data)
    }catch(e){
      alert(e)
    }
  }

  if(!data){
    return <h1>...Loding</h1>
  }

  return (
    <div className={styles.registerWrapper
    }>
      <header className={styles.entryHeader}>
        <h2>Sign Up</h2>
      </header>

      <form action="submit" onSubmit={handleSignUp}>
        <label htmlFor="username" >User Name:</label>
        <input type="email" id="username" autoComplete='null'/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id="password" autoComplete='null'/>
        <label htmlFor="confirmPassword" >Confirm Password:</label>
        <input type="password" name="" id="confirmPassword" />
        {
          !isEqual ? <p className={styles.toast}>Password does not match </p>: null
        }

        <input type="submit" value="Sign Up"/>
      </form>
      <SocailMediaAcccountLogIn/>
      <div className={styles.login}>Already have an account? <u>Sign In</u></div>
    </div>
  )
}
