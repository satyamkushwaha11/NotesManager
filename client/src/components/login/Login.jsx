import React, { useState } from 'react'
import axios from "axios"
import "../signup/signup.css"
import { useHistory } from 'react-router-dom'

function Login(props) {
  const history = useHistory()
  const [data, setData] = useState({
    email: "",
    password: ""
  })

  const changeData = (e) => {
    var Name = e.target.name;
    var value = e.target.value;
    setData({ ...data, [Name]: value })
  }

  const submitLoginForm = async (e) => {
    e.preventDefault();
    const { email, password } = data

    const resp = await axios.post(
      'http://localhost:5000/login/',
      { email, password }
    )
    if (resp.status === 200) {
      // alert(resp.data.message)
     
      window.localStorage.setItem('Token', resp?.data?.jwtToken)
      window.localStorage.setItem('name', resp?.data?.name)
      window.localStorage.setItem('email', resp?.data?.email)

      history.push('/home')
    } else {
      alert(resp.data.message)
    }
  }

  return (
    <div className='main_container'>
      <h1>Login </h1>
      <form onSubmit={submitLoginForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" onChange={changeData} required placeholder='Enter Your Email' />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="text" name="password" onChange={changeData} required placeholder='Create a Password' />
        </div>
        <div className='d-flex'>
          <input type="submit" name="submit" />
        </div>
      </form>
    </div>
  );

}

export default Login
