import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Booking from './screens/Booking'
import Hostel from './screens/Hostel'


const Router = () => {
    return (
        <BrowserRouter>
            <NavLink to="/" className="nav-item">Home</NavLink>{' '}
            <NavLink to="/booking" className="nav-item">Booking</NavLink>{' '}
            <NavLink to="/hostel" className="nav-item">Hostel</NavLink>{' '}
            <Switch>
                <Route path="/booking">
                    <Booking />
                </Route>
                <Route path="/hostel">
                    <Hostel />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router