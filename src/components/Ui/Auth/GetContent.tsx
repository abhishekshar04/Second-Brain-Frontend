const token = localStorage.getItem('token')
import axios from "axios"
export const response = await axios.get("http://localhost:8888/api/v1/content",{
    headers:{
        token: token
    },
})