import  "../curriculo/curriculo.css"

function Curriculo(props) {
    
    const {resumo,experienciaAcademica,experienciaProfissionais} = props.curriculo

    
  if(!resumo || !experienciaAcademica || !experienciaProfissionais) {
      return <p>Carregando...</p>
 }
 console.log(resumo)
    return (
        <>
            <section className="secao2">
                    
                    <h2>Resumo</h2>
                 
                        
                <p>{resumo}</p>

                

            </section>
            <section className="secao3">
                <h4>Acadêmico</h4>
                <ul>

               {experienciaAcademica.map((item,index) => (
                   <li key={index}>
                   
                    <b>({item.anoInicio}  - {item.anoFim})</b> {item.titulo};
                
                   </li>
               ))}
               </ul>

            </section>
            <section className="secao4">

                <h5>Profissional</h5>
                <ul>
                    {experienciaProfissionais.map((item,index) => (

                        <li key={index}>

                            <b>({item.anoInicio}  - {item.anoFim})</b> {item.titulo};
                            
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
export default Curriculo