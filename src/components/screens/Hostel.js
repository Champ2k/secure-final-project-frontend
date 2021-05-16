import React, { useState, useEffect } from 'react'

import '../../styles/screens/Hostel.css'


const Hostel = () => {

    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken?.data
      };


    const [token] = useState(getToken())
    const [hostel, setHostel] = useState([])


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
    },[])
    console.log(hostel)

    return (
        <div>
             {hostel.map((data, index) => (
            <article key={`article-${index}`} className="hostel u-shadow" >
                <div key={`detail-div-${index}`} className="detail u-placeholder">
                    <p key={`data-detail-${index}`}>{data.detail}</p>
                </div>
                <div key={`detail-wrapper-div-${index}`} className="detail-wrapper">
                    <p key={`data-name-${index}`} className="detail-header">{data.name}</p>
                    <p key={`data-=price-${index}`}>{data.price}</p>
                </div>
            </article>
                )
                )
            }
        </div>
    )
}

export default Hostel