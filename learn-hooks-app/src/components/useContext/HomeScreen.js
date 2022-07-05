import React, { useContext } from 'react'

import NavBar from './NavBar'
import { UserContext } from './UserContext';

export const HomeScreen = () => {

  const {user} = useContext(UserContext);

  
  return (
    <>
      <NavBar />    

      <h2>HomeScreen</h2>
      <pre>
        {JSON.stringify(user,null,3)}
      </pre>
    </>
  )
}
