//https://api.themoviedb.org/3/movie/now_playing?api_key=1a583ba8d30a9e9afb56214a80eb5ec5&language=pt-BR
import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api;