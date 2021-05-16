import React from 'react';

export default function Logout({ setToken }) {

  const handleLogout = async e => {
    e.preventDefault();
    setToken('');
  }

  return(
    <div>
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}