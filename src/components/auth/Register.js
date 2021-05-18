import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../../styles/auth/Register.css';


async function registerUser(data){
    return fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    })
}

export default function Register(){
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [firstname, setFirstName] = useState();
  const [lastname, setLastName] = useState();
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await registerUser({
      email,
      username,
      password,
      firstname,
      lastname,
    })
    history.push('/');
  }

  return(
    <div className="register-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} >
        <div>
        <label className="regis">
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        </div>
        <div>
        <label className="regis">
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        </div>
        <div>
        <label className="regis">
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        </div>
        <div>
        <label className="regis">
          <p>Firstname</p>
          <input type="text" onChange={e => setFirstName(e.target.value)} />
        </label>
        </div>
        <div>
        <label className="regis">
          <p>Lastname</p>
          <input type="text" onChange={e => setLastName(e.target.value)} />
        </label>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}




