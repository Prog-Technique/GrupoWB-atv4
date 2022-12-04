import React from "react";
import { Button } from 'react-bootstrap';
import Header from "../../component/header";
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Axios from "axios";
import { useState, useEffect } from "react";
import "../style.css";

export default function EditarCliente(){

    const navigate = useNavigate();
    var { id } = useParams();
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
        Axios.post("http://localhost:3001/editar/cliente", {
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
            },
            id: id
        }).then((res)=>{
          console.log(res)
        })    
    }

    const [list, setList] = useState([]);
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setList(resp.data);
      });
    }, [])

    var Nome = new String
    for(let k=0; list.length > k; ++k){
        var pessoa = list[k]
        if(pessoa[0] == id){
            Nome = pessoa
            break 
        }  
    }


    return (
            <><Header />
            <main>
                <h1>Editar Cliente: {Nome[1]}</h1>
                <div className="forms">
                <Button className="button" variant="outline-dark" href='/clientes'>Voltar</Button>
                
                    <form>
                        <div className="field">
                            <label>Nome Completo:</label>
                            <input type="text" placeholder={Nome[1]} onChange={(e) => setNome(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Nome social:</label>
                            <input type="text" placeholder={Nome[2]} onChange={(e) => setNomeSocial(e.target.value)}/>
                        </div>
                        <h3>Endereço:</h3>
                        <div className="field">
                            <label>Estado:</label>
                            <input type="text" placeholder={Nome[3]} onChange={(e) => setEstado(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Cidade:</label>
                            <input type="text" placeholder={Nome[4]} onChange={(e) => setCidade(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Bairro:</label>
                            <input type="text" placeholder={Nome[5]} onChange={(e) => setBairro(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Rua:</label>
                            <input type="text" placeholder={Nome[6]} onChange={(e) => setRua(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Número:</label>
                            <input type="text" placeholder={Nome[7]} onChange={(e) => setNumero(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Código postal:</label>
                            <input type="text" placeholder={Nome[8]} onChange={(e) => setCodigoPostal(e.target.value)}/>
                        </div>
                        <div className="field">
                            <label>Mais informações:</label>
                            <input type="text" placeholder={Nome[9]} onChange={(e) => setInfo(e.target.value)}/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit' onClick={() => handleSubmit()}>Atualizar</Button>{' '}
                    </form>
                </div>
            </main>
        </>
    );
}


