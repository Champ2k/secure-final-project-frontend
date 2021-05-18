import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

import Booking from './screens/Booking'
import Hostel from './screens/Hostel'
import Navbar from './screens/nav'
import Carousel from './screens/carousel'
import Login from './auth/Login'
import useToken from './auth/useToken'
import Register from './auth/Register'
import Logout from './auth/Logout'

const Router = () => {
    const { token, setToken, deleteToken, deleteUserId } = useToken();
    const [options, setOptions] = useState([])

    useEffect(() => {
    async function fetchHostel(){
        const hostelResponse = await fetch(`http://localhost:8000/hostel/`,{
            method:'GET',
        }).then(response => response.json())
        .then((contents) => {
            return contents.data
        })
        const option = []

        hostelResponse.forEach(hostel => {
            option.push({value: hostel._id, label: hostel.name, price: hostel.price, placeId: hostel.googlePlaceId})
        });
        console.log(option)
        setOptions(option)
    }
    fetchHostel()
},[])

    return (
        <BrowserRouter>
            <Navbar token={token} setToken={setToken} deleteToken={deleteToken} deleteUserId={deleteUserId}/>
            <Switch>
                <Route exact path="/">
                    <Carousel />
                </Route>
                <Route path="/booking">
                    <Booking options={options} />
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