import { useEffect, useState } from "react";
import api from "../../services/api";
//https://api.themoviedb.org/3/movie/now_playing?api_key=1a583ba8d30a9e9afb56214a80eb5ec5&language=pt-BR
function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "1a583ba8d30a9e9afb56214a80eb5ec5",
                    language: "pt-BR",
                    page: 1,
                }
            })
            console.log('no response', response.data.results.slice(0,10))
        }
        loadFilmes();
    },[])
    return(
        <div>
            <h1>Bem-vindo a home</h1>
        </div>

    )
}

export default Home;