import { useEffect, useState } from "react";
import api from "../../services/api";
function Home(){
    const [filmes, setFilmes] = useState([])

    useEffect(()=>{
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "",
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