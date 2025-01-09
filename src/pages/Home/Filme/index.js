import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from '../../../services/api'
import './filme-info.css'
import { toast } from "react-toastify";

function Filme(){
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setloading] = useState(true);

    useEffect(()=>{
        async function loadFilme(){
            await api.get(`/movie/${id}`, {
                params:{
                    api_key: process.env.REACT_APP_API_KEY,
                    language: "pt-BR"
                }
            })
            .then((response)=>{
                setFilme(response.data);
                setloading(false);
            })
            .catch(()=>{
                navigate("/", { replace: true })
                return;
            })
        }
        loadFilme();

    }, [navigate, id])

    function salvarFilme(){
        const myList = localStorage.getItem("@primeflix")

        let filmesSalvos = JSON.parse(myList) || [];
        //Antes de salvar ele verifica se na lista já tem ao menos um item, para não salvar duplicado
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)

        if(hasFilme){
            toast.warn("Esse filme já está na sua lista")
            return;
        }

        filmesSalvos.push(filme)
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        toast.success("Filme salvo com sucesso")
    }

    if(loading){
        return(
            <div className="filme-info">
                <h1>Carregando detalhes...</h1>
            </div>
        )
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
           
            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avaliação: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button onClick={salvarFilme}>Salvar</button>
                <button>
                    <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                        Trailer
                    </a>
                </button>
            </div>
        </div>
    )
}

export default Filme;