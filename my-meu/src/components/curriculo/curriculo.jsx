import "../curriculo/curriculo.css"
import date from "./curriculo.json"



function Curriculo(props) {

 const {resumo, experienciaAcademica, experienciasProfissionais} = props.curriculo

if(!resumo || !experienciaAcademica || !experienciasProfissionais) {
    return <p>Carregando...</p>
}
    return (
        <>
            <section className="secao2">
                <h2>Resumo</h2>
                <p>{date.resumo}</p>

            </section>
            <section className="secao3">
                <h4>objetivo</h4>


                <p >
                    <b>{date.objetivo.titulo}</b> {date.objetivo[0].sonho}
                </p>


            </section>
            <section className="secao4">

                <h5>Epectativa do curso</h5>
                <p>
                    finalizar esse curso, e poder tentar a carreira como programador!
                </p>
            </section>
        </>
    )
}
export default Curriculo