import React from "react";
import Header from "../../component/header";
import { useState } from "react";
import Axios from "axios";

export default function FormCliente() {
    const [nome, setNome] = useState('');
    const [nome_social, setNomeSocial] = useState('');
    const [estado, setEstado] = useState('');
    const [cidade, setCidade] = useState('');
    const [bairro, setBairro] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [codigoPostal, setCodigoPostal] = useState('');
    const [infos, setInfo] = useState('');

    function handleSubmit() {
        Axios.post("http://localhost:3001/cadastro/cliente", {
          nome: nome,
          nome_social: nome_social,
          endereco: {
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            rua: rua,
            numero: numero,
            codigoPostal: codigoPostal,
            infos: infos
          }
        }).then((res)=>{
          console.log(res)
        })    
    }

    return (
        <><Header />
            <h1>Cadastro de Clientes</h1>
            <div className="forms">
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <h3>Endereço:</h3>
                        <div className="field">
                            <label>Estado:</label>
                            <input type="text" onChange={(e) => setEstado(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Cidade:</label>
                            <input type="text" onChange={(e) => setCidade(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Bairro:</label>
                            <input type="text" onChange={(e) => setBairro(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Rua:</label>
                            <input type="text" onChange={(e) => setRua(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Número:</label>
                            <input type="text" onChange={(e) => setNumero(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Código postal:</label>
                            <input type="text" onChange={(e) => setCodigoPostal(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Mais informações:</label>
                            <input type="text" onChange={(e) => setInfo(e.target.value)}/>
                        </div>

                        <button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Cadastrar</button>
                    </form>
                </div>
        </>
    )
}