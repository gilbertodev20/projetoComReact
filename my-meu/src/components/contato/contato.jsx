import "../contato/contato.css"

function Contato() {
    return (
        <>
            <section id="secao2">
                <center id="secao">
                    <form id="form">
                        <h5>htmlFormulario</h5>
                        <fieldset>
                            <label htmlFor="input-name">Nome</label>
                            <input type="text" name="input-name" id="input-name" className="inputs required" placeholder="Nome"
                                onInput="nameValidate()" />
                            <span className="spans-required">nome deve ter no minimo de 8 caracteres</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-email">E-mail</label>
                            <input type="text" name="input-email" id="input-email" className="inputs  required" placeholder="E-mail"
                                onInput="emailValidate()" />
                            <span className="spans-required">digite um Email valido</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-numero">Número</label>
                            <input type="text" name="celular" id="celular" className="inputs required" placeholder="Número" />
                            <span className="spans-required">Adicione seu número</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-msg">Mensagem</label>
                            <textarea name="input-msg" id="input-msg" cols="30" rows="10"></textarea>
                        </fieldset>
                        <button id="btn" onClick="enviarParaWhatsApp()">Enviar</button>
                    </form>
                </center>
            </section>
        </>
    )
}
export default Contato