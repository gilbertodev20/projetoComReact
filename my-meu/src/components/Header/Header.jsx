import { useEffect, useState } from "react"
import "../Header/Header.css"
import axios from "axios"

function Header(props){

    const [dados, setDados] = useState({
        nome: "",
        foto: "",
        cargo: "",
    })

    useEffect(() => {
//        (() => {})()

        async function carregarDados(){
            const result = await fetch("http://localhost:5000/informacoes")
            const data = await result.json()
            console.log(data)
            setDados({
                nome: data[0].nome,
                cargo: data[0].cargo,
                foto: data[0].foto
            })
        }
        carregarDados()
    }, [])

    return(
        <header>
    <img id="avatar" src={dados.foto} alt="foto do rosto de Gilberto"/>
    <h1>{dados.nome}</h1>
    <h3>{dados.cargo}</h3>
    </header>
    
        
    )
}
export default Header