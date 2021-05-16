import React from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Booking from './screens/Booking'
import Hostel from './screens/Hostel'
import Navbar from './screens/nav'

const Router = () => {
    return (
        <BrowserRouter>
            <Navbar />
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