import React, { useContext } from 'react'
import NavBar from './NavBar'
import { UserContext } from './UserContext'

export const LoginScreen = () => {

  const {setUser} = useContext(UserContext);


  return (
    <>
      <NavBar />    
      <h2>LoginScreen</h2>
      <button
        className='btn btn-primary'
        onClick={() => {
            setUser({id:1,name:'Dilan'})            
          }
        }
      >
        Login
      </button>
    </>
  )
}
