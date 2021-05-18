import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


async function registerUser(data){
    return fetch('http://localhost:8000/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
    })
}

async function userValidate(data){
  return fetch("http://localhost:8000/user/validate",{
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
  }
  )
  .then(response => response.json())
  .then(result => {
    return result
  })
  // console.log(result))
  // .catch(error => console.log('error', error));
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
    const userVal = await  userValidate({
      email,
      username,
      password,
      firstname,
      lastname,
    })
    if(userVal.data){
      const token = await registerUser({
        email,
        username,
        password,
        firstname,
        lastname,
      })
      console.log(userVal.message, ": Register Success")
      history.push('/');
    }else{
      console.log(userVal.message, "Please Try Again")
    }
  }

  return(
    <div className="register-wrapper">
      <h1>Register</h1>
      <form onSubmit={handleSubmit} >
        <label>
          <p>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <label>
          <p>Email</p>
          <input type="text" onChange={e => setEmail(e.target.value)} />
        </label>
        <label>
          <p>Firstname</p>
          <input type="text" onChange={e => setFirstName(e.target.value)} />
        </label>
        <label>
          <p>Lastname</p>
          <input type="text" onChange={e => setLastName(e.target.value)} />
        </label>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}




