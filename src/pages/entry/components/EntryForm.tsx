import React, { useState} from 'react'
import { CLIENT_RENEG_LIMIT } from 'tls'
import { formTypes } from '../../../dto/form'
import { userTypes } from '../../../dto/userTypes'
import useFetch from '../../../utils/hooks/useFetch'
import styles from './EntryForm.module.scss'
import { SocailMediaAcccountLogIn } from './SocialMediaAccountLogIn'
import { loggedInReducer,initialLogInState } from '../../../reducers/entry/logInFeature'
import { logInActionTypes } from '../../../actions/logInActions'
import { loginTypes } from '../../../dto/login'
import { useNavigate } from 'react-router-dom'


export default function EntryForm({formFor}:formTypes) {
    const [user,setUser] = useState<loginTypes>({userName:"",isLoggedIn: false})
    const navigate = useNavigate();
    const {data} = useFetch(' http://localhost:0447/users');
    console.log(data,"data")

    if(!data){
        return <h1>...Loading</h1>
    }
    const handleSubmit = (e:any) => {
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
    <React.Fragment>
    <form className={styles.entryForm} onSubmit={handleSubmit}>
        {
            formFor === "register" ? (
                <React.Fragment>
                     <label htmlFor="fullName" aria-autocomplete='none'>Full Name:</label>
                     <input type="text" id={"fullName"} maxLength={100}/>
                </React.Fragment>
            ) : null
        }
        <label htmlFor="username">User Name:</label>
        <input type="email" name="" id={"username"} aria-autocomplete='none' maxLength={16}/>
        <label htmlFor="password">Password:</label>
        <input type="password" name="" id={"password"} maxLength={20}/>
        {
            formFor === "register" ? (
                <React.Fragment>
                    <label htmlFor="confirm_password">Confirm Password:</label>
                    <input type="password" name="" id={"confirm_password"} />
                </React.Fragment>
                
            ) : null
        }
        <input type="submit" value="LOGIN" />
        {
            formFor === "register" ? (
                <div className={styles.promptMessage}>
                    Already have an account? <span>Login</span>
                </div>
            ) : (
                <div className={styles.promptMessage}>
                    Already have an account? <span>Login</span>
                </div>
            )
        }
        
    </form>
     <SocailMediaAcccountLogIn handleLink={""}/>
    </React.Fragment>
  )
}
