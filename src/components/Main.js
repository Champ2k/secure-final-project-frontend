import React from 'react'

import '../styles/Home.css';
import Login from './auth/Login'
import Router from './Router'
import useToken from './auth/useToken'
import Logout from './auth/Logout'


const Main = () => {
  const { token, setToken } = useToken();

  // if(!token) {
  //   return <Login setToken={setToken} />
  // }
  
    return(
        <div className="wrapper">
            <Router/>
            <Logout setToken={setToken}/>
            
        </div>



    )

}

export default Main
