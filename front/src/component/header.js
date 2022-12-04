import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

export default function Header() {
    return (
            <header>
                <div className='logo'>
                    <Link to="/"><p>WB</p></Link>
                </div>

                <ul className="nav-links">
                    <input type="checkbox" id="checkbox_toggle" />
                    <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                    <div className="menu">
                        <li className="services">
                            <Link to="/cadastrar_cliente">Cadastrar</Link>
                        </li>
                        <li className="services">
                            <Link to="/clientes">Listagem</Link>
                        </li>
                    </div>

                </ul>
            </header>
        );
    }