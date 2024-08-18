import axios from "axios";

const isProduction = import.meta.env.VITE_PRODUCTION

export const apiRequest = async ({ method, path, body, options = {} }) => {
    console.log('apiCall \n', { method, path, body });
    try {

        let finalPath = path.startsWith("/") ? path.slice(1) : path
        let baseUrl = isProduction === "true" ? prodUrl : 'http://localhost:3030/'
        const url = `${baseUrl}${finalPath}`

        const { data } = await axios({
            method,
            url,
            data: body,
            headers: {
                Authorization: `Bearer ${localStorage.token}` || ''
            },
            ...options
            
        })
        console.log("response", data);
        return data
    } catch (error) {
        console.error("Error:", error.message);
        throw error;
    }
}