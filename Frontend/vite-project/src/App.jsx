import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const endpoint = 'http://localhost:4000/'
  const endpoint2 = 'http://localhost:4000/info/'

  const [name, setname] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const MakeRequest = () => {
    axios.post(endpoint + 'info', { name, email, password })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);

      })
  };

  const submitDetails = () => {
    const information = { name, email, password }
    axios.post(endpoint2, information)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  

  return (
    <>
      <h1>Frontend and Backend Connected</h1>
      <button onClick={MakeRequest}>Make Request</button>
      <hr />
      <input onChange={(e) => { setname(e.target.value) }} type="text" placeholder='name' value={name} />
      <input onChange={(e) => { setemail(e.target.value) }} type="text" placeholder='email' value={email} />
      <input onChange={(e) => { setpassword(e.target.value) }} type="text" placeholder='password' value={password} />
      <button onClick={submitDetails}>Submit</button>
    </>
  )
}

export default App