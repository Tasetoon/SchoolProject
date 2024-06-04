
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateForm(props){
const router = useRouter()

    const [object, setObject ] = useState('')
    const [object2, setObject2] = useState('')
    const [answer, setAnswer] = useState("Answer...");
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
    return (
        <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">{props.p1[1]}</label>
                <input className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value1'
                        required
                        type="number"
                        onChange={(e) => setObject(e.target.value)}
                        value = {object}
                    />
            </div>

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-white">{props.p2[1]}</label>
                    <input className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value2'
                        required
                        type="number"
                        onChange={(e) => setObject2(e.target.value)}
                        value = {object2}
                    />
            </div>
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Посмотреть ответ</button>

            <div className="mb-5 visible" id="answerblock">
                
                <label className="block mb-2 text-sm font-medium text-white">{props.answer}</label>
                    <div className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {answer}
                    </div>
            </div>
        </form>
    )
}
