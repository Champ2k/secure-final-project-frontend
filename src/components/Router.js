import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Booking from './screens/Booking'
import Hostel from './screens/Hostel'
import Navbar from './screens/nav'
import Carousel from './screens/carousel'
import Login from './auth/Login'
import useToken from './auth/useToken'
import Register from './auth/Register'

const Router = () => {
    const { token, setToken, deleteToken, deleteUserId } = useToken();
    
    return (
        <BrowserRouter>
            <Navbar token={token} setToken={setToken} deleteToken={deleteToken} deleteUserId={deleteUserId}/>
            <Switch>
                <Route exact path="/">
                    <Carousel />
                </Route>
                <Route path="/booking">
                    <Booking />
                </Route>
                <Route path="/hostel">
                    <Hostel />
                </Route>
                <Route path="/login">
                    <Login setToken={setToken} />
                </Route>
                <Route path="/register">
                   <Register/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router