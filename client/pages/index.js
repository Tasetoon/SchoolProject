import React, {useEffect, useState} from 'react'
import Link from 'next/link';
import CreateForm from "./CreateForm"


function index() {
  const [message, setMessage] = useState("Loading..."); 
  useEffect(() => {
    fetch("http://localhost:8080/home")
      .then((response) => response.json())  
      .then((data) => {
        setMessage(data.message);
      })
  }, []);
  return (
  <div>
    <div>
      {message}
      
    </div>
    <div>
      <h1 className='mylink'>
        <Link href="/posts/first-post">Click!</Link>
      </h1>
      <CreateForm/>
    </div>

  </div>
  )
}

export default index