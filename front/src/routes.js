import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import FormCliente from './pages/Cadastro/formCliente';
import Clientes  from './pages/Dados/cliente';
import EditarCliente from './pages/Editar/clientes';

export default function RoutesApp() {
    return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    
                    <Route path='/cadastrar_cliente' element={<FormCliente/>}/>

                    <Route path='/clientes' element={<Clientes/>}/>                  
                    
                    <Route path='/editar_cliente/:id' element={<EditarCliente/>}/>
                </Routes>
            </Router>
        );
    }