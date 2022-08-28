import React, { useEffect, useState } from 'react'
import axios from 'axios';


// Whenever page renders if we want to trigger any sort of function like API calls, we have to use useEffect
// Primarily for API call trigger
function Effect() {
  const [data, setData] = useState("")
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((response) => {
            setData(response.data[20].email)
    console.log("API was called")
    })
  }, [])

  return <>
  <h1>UseEffect</h1>
  <div>
    <h1>{data}</h1>
  </div>
  </>
}

export default Effect