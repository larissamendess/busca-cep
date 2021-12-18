import axios from "axios";

//CEP/json
const api = axios.create({
    baseURL:"http://viacep.com.br/ws/"
})

export default api;