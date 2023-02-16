import React from 'react'
import SignIn from './sign_in/SignIn'
import { useParams } from 'react-router-dom'
import SignUp from './sign_up/SignUp'

export default function EntryFormV2() {
    const {id} = useParams();
    console.log("id:",id)

  return (
    <div>
        {
            id === ':signup' ? <SignUp/> : <SignIn/>
        }
        
    </div>
  )
}
