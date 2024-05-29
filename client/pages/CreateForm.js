
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

        const ticket = {
            object, object2
        }
 
        const res = await fetch('http://localhost:3000/home/form-test', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(ticket)
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
                    required
                    type="text"
                    onChange={(e) => setObject(e.target.value)}
                    value = {object}
                />
            </label>
            <label>
            <span>Parametr2:</span>
                <input
                    required
                    type="text"
                    onChange={(e) => setObject2(e.target.value)}
                    value = {object2}
                />
            </label>
            <button
                className = "btn-primary"
                disabled = {isLoading}

            >
                {isLoading && <span>Adding...</span>}
                {!isLoading && <span>Add Ticket</span>}
            </button>
        </form>
    )
}
