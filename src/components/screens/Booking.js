import React, { useState, useEffect } from 'react'
import { useCookie } from "react-use"
import Select, { components } from 'react-select'
import DatePicker from 'react-datepicker'
import MapContainer from '../googlemap/MapContainer'

import '../../styles/screens/Booking.css'
import 'react-datepicker/dist/react-datepicker.css'

const Booking = (props) => {
    const [valueToken, updateCookie, deleteCookie] = useCookie("token");
    const [valueUser, updateCookieUser, deleteCookieUser] = useCookie("userId")
    const [booking, setBooking] = useState([])
    const [bookingPrice, setBookingPrice] = useState(0)
    const [startDate, setStartDate] = useState(new Date())
    const today = startDate;
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate()+1);
    const [endDate, setEndDate] = useState(tomorrow)
    const [currentLocation, setCurrentLocation] = useState({lat: 15.870032, lng: 100.992541})
    const [placeName, setPlaceName] = useState("Thailand")
    const [options, setOptions] = useState([])
    const [zoom, setZoom] = useState(5)

    useEffect(() => {
        async function fetchHostel(){
            const hostelResponse = await fetch(`http://localhost:8000/hostel/`,{
                    method:'GET',
                })
            const hostelData = await hostelResponse.json();
            console.log(hostelData.data)
            const option = []
            hostelData.data.map(hostel => {
                const googleData = JSON.parse(hostel.googlePlaceData)
                console.log(googleData)
                console.log("lat", googleData.result.geometry.location.lat)
                option.push({value: hostel._id, label: hostel.name, price: hostel.price, placeId: hostel.googlePlaceId, Lat: googleData.result.geometry.location.lat, Long: googleData.result.geometry.location.lng })
            });
        setOptions(option)
        console.log(option)
        }
        fetchHostel()
    },[])

    async function bookingHostel() {
        return fetch('http://localhost:8000/booking', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${valueToken}`,
            },
            body: JSON.stringify({
                'userId' : valueUser,
                "hostelId": booking,
                "checkInDate": startDate,
                "checkOutDate": endDate
            }),
            redirect: 'follow'
        })
        .then(data => data.json())
       }


    const handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        if(newValue !== null && newValue.hostelId !== null){
            setZoom(14)
            setBooking(newValue.value)
            setBookingPrice(newValue.price)
            setPlaceName(newValue.label)
            if(newValue.Lat !== null && newValue.Lat.Long !== null){
                setCurrentLocation({
                    lat: newValue.Lat,
                    lng: newValue.Long
                })
            }
        }else{
            setZoom(5)
            setCurrentLocation({lat: 15.870032, lng: 100.992541})
            setBooking(null)
            setBookingPrice(0)
            setPlaceName("Thailand")
        }
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
      };
    const handleInputChange = (inputValue, actionMeta) => {
        console.group('Input Changed');
        console.log(inputValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const postBooking = await bookingHostel()
        console.log(postBooking)
        console.log(
            JSON.stringify({
                'userId' : valueUser,
                "hostelId": booking,
                "checkInDate": startDate,
                "checkOutDate": endDate
            }),
        )
    }
    return (
        <div>
        <div className="booking-wrapper select-wrapper-container">
            <h1>Choose Hostel</h1>
            <div>
                <form onSubmit={handleSubmit} action="/booking">
                    <Select
                    isClearable
                    onChange={handleChange}
                    onInputChange={handleInputChange}
                    options={options}
                    className='select-wrapper'
                    />
                    <div style={{ marginTop: 10 }}>
                        <DatePicker
                        label="Check In"
                        showYearDropdown
                        dateFormat="d/MMMM/yyyy, 13:00"
                        placeholderText="Check In Date"
                        closeOnScroll={true}
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        monthsShown={2}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        />
                        <DatePicker
                        label="Check Out"
                        showYearDropdown
                        dateFormat="d/MMMM/yyyy, 12:00"
                        placeholderText="Check Out Date"
                        closeOnScroll={true}
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        monthsShown={2}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        />
                        <h3>Total Price = {bookingPrice} ฿</h3>
                    </div>
                    <button style={{ marginTop: 10 }} type="submit">Submit</button>
                </form>
            </div>
      </div>
          <MapContainer zoom={zoom} currentLocation={currentLocation} placeName={placeName}/>
            {/* <GoogleMap centerMove={centerMove}/> */}
      </div>
    )
}

export default Booking