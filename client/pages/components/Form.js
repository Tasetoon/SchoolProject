
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CreateForm(){
const router = useRouter()

    const [object, setObject ] = useState('')
    const [object2, setObject2] = useState('')
    const [answer, setAnswer] = useState("Answer...");
    useEffect(() => {
        router.push(
            `?val1=${object}&val2=${object2}` ,
            {
                scroll: false,
            }
        );
    }, [object, object2]);

    async function fetchData() {
        fetch(`http://localhost:8080/home/form?val1=${object}&val2=${object2}`)
              .then((response) => response.json())  
              .then((data) => {
                setAnswer(data.multiplication);
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
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value 1</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value1'
                        required
                        type="number"
                        onChange={(e) => setObject(e.target.value)}
                        value = {object}
                    />
            </div>

            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Value 2</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name = 'value2'
                        required
                        type="number"
                        onChange={(e) => setObject2(e.target.value)}
                        value = {object2}
                    />
            </div>
            <button type="submit" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Send</button>

            <div className="mb-5 visible" id="answerblock">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Answer</label>
                    <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        {answer}
                    </div>
            </div>
        </form>
    )
}
