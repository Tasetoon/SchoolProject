import { useEffect, useState } from "react";


export default function Dropdown(props){
    const [data, setData] = useState([]);
    if(props.type === 'liquids_density'){
        useEffect(() => {
            fetch(`http://localhost:8080/home/constants?type=${props.type}`)
            .then((response) => response.json())  
            .then((data) => {
                setData(data.result);
            })
        }, []);
    }
    else if(props.type === 'bodies_density'){
        useEffect(() => {
            fetch(`http://localhost:8080/home/constants?type=${props.type}`)
            .then((response) => response.json())  
            .then((data) => {
                setData(data.result);
            })
        }, []);
    }
    
    console.log(data)
    return (
    <div>
        <ul className="w-48 text-sm font-medium rounded-lg bg-gray-700 border-gray-900 text-white">
            {data.map((x) => (
                <li className="w-full px-4 py-2 border-b border-gray-900">{x}(кг/м3)</li>
            ))}
        </ul>
    </div>   
    )
}