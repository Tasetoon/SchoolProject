import React, {useEffect, useState} from 'react'

function index() {
  const [message, setMessage] = useState("Loading...");
  const [items, setItem] = useState({})
  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.dict)
        setMessage(data.message)
        setItem(data.dict)
      })
  }, []);
  return (
  <div>
    <div>
      {message}
    </div>

  </div>
  )
}

export default index