import { useEffect, useState } from "react"
import { apiRequest } from "./apiRequest"

export const useApi = ({ method, path, body, options }) => {
    console.log(`apiCall\nMethod: ${method}\nPath: ${path}\n `);

    const [data, setData] = useState()
    const [loading, setLoading] = useState()
    const [error, setError] = useState()

    const fetchData = async () => {
        console.log("FETCHING");
        setLoading(true)
        try {
            const data = await apiRequest({ method, path, body, options })
            console.log(data);

            setData(data)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    const validateBeforeFetching = () => {
        console.log("validateB4Patching");

        if (path) {
            fetchData()
        } else {
            console.log("failed to validate correct path");
        }
    }
    // useEffect(() => {
    //     console.log("useEffect triggered", { method, path, body, options, dep });
    //     if (path) {
    //         console.log("hi");
    //         fetchData()
    //     } else {
    //         console.log("not fetching");

    //     }

    // }, [])
    return { data, loading, error, validateBeforeFetching }
}