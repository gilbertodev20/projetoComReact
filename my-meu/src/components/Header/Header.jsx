import { useEffect, useState } from "react"
import "../Header/Header.css"
import axios from "axios"

function Header(props){

const {nome,  cargo, foto} = props.informacoes

    return(
        <header>
    <img id="avatar" src={foto} alt="foto do rosto de Gilberto"/>
    <h1>{nome}</h1>
    <h3>{cargo}</h3>
    </header>
    
        
    )
}
export default Header