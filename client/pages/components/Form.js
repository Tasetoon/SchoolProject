"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateForm(props){
const router = useRouter()
    const [style, setStyle ] = useState("hidden")
    const [object, setObject ] = useState('')
    const [object2, setObject2] = useState('')
    const [answer, setAnswer] = useState("Answer...");
    console.log(props)
    console.log(props.p1[0], props.p2[0], props.answer)
    useEffect(() => {
        router.push(
            `?${props.p1[0]}=${object}&${props.p2[0]}=${object2}` ,
            {
                scroll: false,
            }
        );
    }, [object, object2]);

    async function fetchData() {
        fetch(`http://localhost:8080/home/problem?${props.p1[0]}=${object}&${props.p2[0]}=${object2}`)
              .then((response) => response.json())  
              .then((data) => {
                setAnswer(data.result);
        })
    }

    useEffect(() => {
        fetchData()
      }, [])


    const handleSubmit = async (e) => {
        e.preventDefault()
        fetchData()
    }
    const handleClickAnswer = async (e) => {
        if(object !== '' && object > 0 && object2 !== '' && object2 > 0){
            setStyle("flex flex-col justify-around")
        }
      }
    console.log(props.formule)
    return (
        <div className="grid grid-cols-2 gap-4">

        
        <form onSubmit={handleSubmit} className="mx-auto">
            <div className="margin-bottom">
                <label className="margin-bottom-small text font-medium text-white">{props.p1[1]}</label>
                <input className="input text focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value1'
                        required
                        type="number"
                        min='0'
                        step="0.1"
                        onChange={(e) => setObject(e.target.value)}
                        value = {object}
                    />
            </div>

            <div className="margin-bottom">
                <label className="margin-bottom-small text font-medium text-white">{props.p2[1]}</label>
                    <input className="input text focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value2'
                        required
                        type="number"
                        min='0'
                        step="0.1"
                        onChange={(e) => setObject2(e.target.value)}
                        value = {object2}
                    />
            </div>
            <button type="submit" onClick={handleClickAnswer} className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium text-center mb-2 button">Посмотреть ответ</button>
            
        </form>
        <div className={style} id="answer">
                    
            <label className='margin-bottom-small text font-medium text-white'>Ответ: {props.answer[0]} = {answer} {props.answer[1]}</label>
            <div className="flex">
                <label className='margin-bottom-small text font-medium text-white'>Формула:</label>
                <img src={props.formule} alt='img' className="mypng margin-left"/>
            </div>
        </div>
        </div>
    )
}
