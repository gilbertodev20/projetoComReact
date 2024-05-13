import React from "react";
import avatarGilberto from "../../assets/WhatsApp Image 2024-04-15 at 18.08.56.jpeg"

function Header(){
    return(
        <>
        <header>
    <img id="avatar" src={avatarGilberto} alt="foto do rosto de Gilberto"/>
    <h1>Gilberto Soares</h1>
    <h3>Dsenvolvedor de software</h3>
    </header>
    <section class="cabecalho">
     <nav>
        <ul>
        <li><a href="./src/portifólio/index.html">PORTFÓLIO</a></li>
        <li><a href="./index.html">CURRÍCULO</a></li>
        <li><a href="./src/contato/index.html">CONTATO</a></li>
       </ul> 
    </nav>
    </section>
        </>
    )
}
export default Header