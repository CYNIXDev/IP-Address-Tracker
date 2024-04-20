import axios from 'axios'

export default async function apiRequests(host, type) {
    const apiKey = import.meta.env.VITE_API_KEY;
    const apiUrl = import.meta.env.VITE_API_URL;
    console.log('API Key: ', apiKey)
    console.log('API URL: ', apiUrl)
    let url
    if (type === 'domain') {
        url = apiUrl + apiKey + "&domain=" + host
        console.log("URL: ", url)
    } else {
        url = apiUrl + apiKey + "&ipAddress=" + host
        console.log("URL: ", url)
    }
    try {
        const response = await axios.get(url);
        const data = response.data;
        const status = response.status;
        return ({ status, data })
    } catch (error) {
        console.error("Failed to make request:", error.message);
        return error
    }
}