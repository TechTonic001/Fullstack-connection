import React from 'react'
import axios from 'axios'

const App = () => {
  const endpoint = 'http://localhost:4000/'
  const MakeRequest = () => {
    axios.get(endpoint)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
        
      })
  };

  return (
    <>
      <h1>Frontend and Backend Connected</h1>
      <button onClick={MakeRequest}>Make Request</button>
    </>

  )
}

export default App