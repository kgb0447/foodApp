import React, { useEffect, useState } from 'react'
import SignIn from './sign_in/SignIn'
import { useParams } from 'react-router-dom'
import SignUp from './sign_up/SignUp'
import useFetch from '../../../utils/hooks/useFetch';

export default function EntryFormV2() {
    const {id} = useParams();
    console.log("id:",id)
    const [users,setUsers] = useState([]);
    const {data} = useFetch('http://localhost:0447/users');
    console.log(data,"data")


    useEffect(() => {
      if(data){
        setUsers(data)
      }
  
    }, [])
    

    
  return (
    <div>
        {
            id === ':signup' ? <SignUp /> : <SignIn  />
        }
        
    </div>
  )
}
