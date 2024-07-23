import { useState } from "react";
import "../contato/contato.css"

function Contato() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [celular, setCelular] = useState("")
    const [inputMsg, setinputMsg] = useState("")
    function emviarFormulario(event) {
        event.preventDefault();
        console.log("formulário enviado!")
        const text = `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${inputMsg}`;

       const numeroWhatsapp = import.meta.env.VITE_WHATSAPP_NUMBER;
       const linkWhatsapp =`https://api.whatsapp.com/send?phone=${numeroWhatsapp}&text=${encodeURIComponent(text)}`
       
       window.open(linkWhatsapp,`_blank`);


    }
    return (
        <>
            <section id="secao2">
                <center id="secao">
                    <form id="form" onSubmit={emviarFormulario} >
                        <h5>Formulario</h5>
                        <fieldset>
                            <label htmlFor="input-name">Nome</label>
                            <input
                                type="text"
                                name="input-name"
                                id="input-name"
                                className="inputs required"
                                placeholder="Nome"
                                required minLength={8}
                                value={nome}
                                onChange={(event) => setNome(event.target.value)}
                            />
                            <span
                                className="spans-required">nome deve ter no minimo de 8 caracteres</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-email">E-mail</label>
                            <input
                                type="email"
                                name="input-email"
                                id="input-email"
                                className="inputs  required"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <span className="spans-required">digite um Email valido</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-numero">Número</label>
                            <input
                                type="tel"
                                name="celular"
                                id="celular"
                                className="inputs required"
                                placeholder="(99) 99999-9999"
                                required pattern="^\(\d{2}\) \d{5}-\d{4}$"
                                maxLength={15}
                                value={celular}
                                onChange={(event) => setCelular(event.target.value)}
                            />
                            <span className="spans-required">Adicione seu número</span>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="input-msg">Mensagem</label>
                            <textarea
                                name="inputMsg"
                                id="input-msg"
                                cols="30"
                                rows="10"
                                value={inputMsg}
                                onChange={(event) => setinputMsg(event.target.value)}
                                ></textarea>

                        </fieldset>
                        <input id="btn" type="submit" value="Enviar" />
                    </form>
                </center>
            </section>
        </>
    )
}
export default Contato