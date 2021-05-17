import React from 'react';

export default function Logout({ setToken, deleteToken, deleteUserId }) {

  const handleLogout = async e => {
    e.preventDefault();
    setToken();
    deleteToken();
    deleteUserId();
  }

  return(
    <div>
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}