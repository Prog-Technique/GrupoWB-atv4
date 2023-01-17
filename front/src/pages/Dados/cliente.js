import React from "react";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Header from "../../component/header";
import Axios from "axios";
import { useState, useEffect } from "react";

import './styles.css'

export default function Clientes() {

    const [list, setList] = useState([]);
    
    useEffect(() => {
      Axios.get(`http://localhost:3001/ver/clientes`).then((resp) => {
        setList(resp.data);
      });
    }, [])
    

    function handleSubmit(id: number) {     
        Axios.post("http://localhost:3001/deletar", {
          id: id,
          tabela: 'cliente'
        }).then((res)=>{
          console.log(res)
        })    
    }

    return (
        <><Header /><main>
            <h1>Clientes</h1>

            <div className='container-table'>
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                                <th>Nome Social</th>
                                <th>Estado</th>
                                <th>Cidade</th>
                                <th>Bairro</th>
                                <th>Rua</th>
                                <th>Número</th>
                                <th>CEP</th>
                                <th>Informações</th>
                                <th>Ações</th>
                        </tr>
                    </thead>
                    {typeof list !== 'undefined' && list.map((value) => {
                            return value ?

                    <tbody>
                        <tr>
                            <td> {value[1]} </td>
                            <td> {value[2]} </td>
                            <td> {value[3]} </td>
                            <td> {value[4]} </td>
                            <td> {value[5]} </td>
                            <td> {value[6]} </td>   
                            <td> {value[7]} </td> 
                            <td> {value[8]} </td> 
                            <td> {value[9]} </td> 
                            <td>
                                <div className='Column'>
                                    <Link to={`/editar_cliente/${value[0]}`}><FiEdit></FiEdit>Editar</Link> <br />
                                    <Link to="#" onClick={() => handleSubmit(value[0])}><FiTrash2></FiTrash2>Excluir</Link>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                    :null})}
                </table>
            </div>

        </main></>
    );
}