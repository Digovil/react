import React, { useContext } from 'react'
import NavBar from './NavBar'
import { UserContext } from './UserContext'

export const AboutScreen = () => {

  const {setUser} = useContext(UserContext);


  const handleClick = () => {
    setUser({});
  }

  return (
    <>
      <NavBar />    
      <h2>AboutScreen</h2>
      <button
        className='btn btn-danger'
        onClick={ handleClick }
      >
        Logout
      </button>
    </>
  )


}
