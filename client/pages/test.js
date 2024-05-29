import React, {useEffect, useState} from 'react'

function test() {
  const [message, setMessage] = useState("Loading..."); 
  const [constant, setConstant] = useState("Constant")
  useEffect(() => {
    fetch("http://localhost:8080/home/test")
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.name);
        setConstant(data.value);
        console.log(constant)
        console.log(message)

      })
  }, []);
  return (
  <div>
    <div>
      {message}
    </div>
    <div>
      {constant}
    </div>
  </div>
  )
}

export default index