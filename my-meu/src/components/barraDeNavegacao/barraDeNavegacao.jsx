import { Link } from "react-router-dom"
import "../barraDeNavegacao/barraDeNavegacao.css"

function BarraDeNavegacao() {
    return (
        <nav>

        <Link className='button' to="/">Curriculo</Link>
        <Link className='button' to="/Portfolio">Portfolio</Link>
        <Link className='button' to="/Contato">Contato</Link>

      </nav>
    )
}
export default BarraDeNavegacao