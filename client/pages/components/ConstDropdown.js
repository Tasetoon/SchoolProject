import { useEffect, useState } from "react";


export default function Dropdown(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/home/constants")
          .then((response) => response.json())  
          .then((data) => {
            setData(data.result);
          })
      }, []);
    
    console.log(data)
    return (
    <div>
        <ul className="w-48 text-sm font-medium rounded-lg bg-gray-700 border-gray-900 text-white">
            {data.map((x) => (
                <li class="w-full px-4 py-2 border-b border-gray-900">{x}</li>
            ))}
        </ul>
    </div>   
    )
}