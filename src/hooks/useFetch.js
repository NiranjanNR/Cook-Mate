import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setisPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            setisPending(true)
            try {
                const res = await fetch(url)
                if(!res.ok){
                    throw new Error(res.statusText)
                }
                const db = await res.json()
                setisPending(false)
                setData(db)
                setError(null)
            }
            catch (err) {
                setisPending(false)
                setError('Could not fetch data')
                console.log(err.message)
            }
        }

        fetchData()
    }, [url])

    return { data, isPending, error }
}

