
import { useRouter } from "next/router";
import { useState } from "react";

export default function CreateForm(){
const router = useRouter()

    const [object, setObject ] = useState('')
    const [object2, setObject2] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        console.log(JSON.stringify(
            {
                'val1' : object,
                'val2' : object2
            }
        ))
        const res = await fetch('http://localhost:8080/home/form-test', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body:
            JSON.stringify({
                    'val1' : object,
                    'val2' : object2
                })

        })

        if(res.status === 201){
            router.refresh()
            router.push('/tickets')
        }
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
            <button type="submit" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Send</button>
        </form>
    )
}
