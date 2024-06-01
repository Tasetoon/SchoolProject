
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
            //mode: 'no-cors',
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
        <form onSubmit={handleSubmit} className="w-1/2">
            <label>
                <span>Parametr1:</span>
                <input
                    name = 'value1'
                    required
                    type="number"
                    onChange={(e) => setObject(e.target.value)}
                    value = {object}
                />
            </label>
            <label>
            <span>Parametr2:</span>
                <input
                    name = 'value2'
                    required
                    type="number"
                    onChange={(e) => setObject2(e.target.value)}
                    value = {object2}  
                />
            </label>
            <button
                className = "btn-primary"
                disabled = {isLoading}

            >
                {isLoading && <span>Sending...</span>}
                {!isLoading && <span>SEND</span>}
            </button>
        </form>
    )
}
