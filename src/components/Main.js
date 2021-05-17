import React from 'react'

import '../styles/Home.css';
import Router from './Router'
import Logout from './auth/Logout'
import MapContainer from './googlemap/MapContainer'


const Main = () => {
    return(
      <div>
        <div className="wrapper">
            <Router/>
        </div>
        <div>
          <MapContainer/>
        </div>
      </div>
    )

}

export default Main
