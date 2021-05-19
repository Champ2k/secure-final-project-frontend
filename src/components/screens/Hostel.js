import React, { useState, useEffect } from 'react'

import '../../styles/screens/Hostel.css'


const Hostel = () => {
    const [hostel, setHostel] = useState([])

    useEffect(() => {
        async function fetchHostel(){
            const hostelResponse = await fetch(`http://localhost:8000/hostel/`,{
                method:'GET',
            })
            const hostelData = await hostelResponse.json();
            setHostel(hostelData.data)
        }
        fetchHostel()
    },[])

    return (
        <div>
             {hostel.map((data, index) => (
            <article key={`article-${index}`} className="hostel u-shadow" >
                <div key={`detail-div-${index}`} className="detail u-placeholder">
                    <p key={`data-detail-${index}`}>{data.detail}</p>
                </div>
                <div key={`detail-wrapper-div-${index}`} className="detail-wrapper">
                    <p key={`data-name-${index}`} className="detail-header"><b>{data.name}</b></p>
                    <p key={`data-=price-${index}`}>Price: <b>{data.price}</b></p>
                </div>
            </article>
                )
                )
            }
        </div>
    )
}

export default Hostel