import React, { useState, useEffect } from 'react'
import Select from 'react-select'
import DatePicker from 'react-datepicker'

import '../../styles/screens/Booking.css'
import 'react-datepicker/dist/react-datepicker.css'

const Booking = () => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.data
      };
    
    const getUserId = () => {
    const IdString = localStorage.getItem('token');
    const userId = JSON.parse(IdString);
    return userId?.userId
    };

    const [token] = useState(getToken())
    const [userId] = useState(getUserId())
    const [hostel, setHostel] = useState([])
    const [booking, setBooking] = useState([])
    const [bookingPrice, setBookingPrice] = useState(0)
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    async function bookingHostel() {
        return fetch('http://localhost:8000/booking', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                'userId' : userId,
                "hostelId": booking,
                "checkInDate": startDate,
                "checkOutDate": endDate
            }),
            redirect: 'follow'
        })
        .then(data => data.json())
       }


    useEffect(() => {
        async function fetchHostel(){
            const hostelResponse = await fetch(`http://localhost:8000/hostel/`,{
                method:'GET',
                headers: {
                'Authorization': `Bearer ${token}`
                }
            })
            const hostelData = await hostelResponse.json();
            setHostel(hostelData.data)
        }
        fetchHostel()
    },[hostel])

    const options = []

    hostel.forEach(hostel => {
        options.push({value: hostel._id, label: hostel.name, price: hostel.price})
    });

    const handleChange = (newValue, actionMeta) => {
        console.group('Value Changed');
        console.log(newValue);
        if(newValue !== null){
            setBooking(newValue.value)
            setBookingPrice(newValue.price)
        }else{
            setBooking("")
            setBookingPrice(0)
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
                'userId' : userId,
                "hostelId": booking,
                "checkInDate": startDate,
                "checkOutDate": endDate
            }),
        )
    
    }



    return (
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
    )
}

export default Booking