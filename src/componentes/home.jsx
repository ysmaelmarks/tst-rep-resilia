import '../css/home.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cadastrar from './Cadastrar';
import Remover from './Remover';
import Atualizar from './Atualizar';
import Buscar from './Buscar';
import Contatos from './contatos';
import Index from './Index';
import Login from './Login';

function Home() {
    return (
        <>
            <div className="container">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <div className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32">
                        </svg>
                        <span className="nav-item text-primary"><Link to="/" className="nav-link">Home</Link></span>
                    </div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"><Link to="/Buscar" className="nav-link">Buscar</Link></li>
                        <li className="nav-item"><Link to="/Cadastrar" className="nav-link">Cadastrar</Link></li>
                        <li className="nav-item"><Link to="/Atualizar" className="nav-link">Atualizar</Link></li>
                        <li className="nav-item"><Link to="/Remover" className="nav-link">Remover</Link></li>
                        <li className="nav-item"><Link to="/Login" className="nav-link">Login</Link></li>
                        <li className="nav-item"><Link to="/Contatos" className="nav-link">Contatos</Link></li>
                    </ul>
                    <Routes>
                        <Route path='/' element={<Index />}></Route>
                        <Route path='/Buscar' element={<Buscar />}></Route>
                        <Route path='/Cadastrar' element={<Cadastrar />}></Route>
                        <Route path='/Atualizar' element={<Atualizar />}></Route>
                        <Route path='/Remover' element={<Remover />}></Route>
                        <Route path='/Login' element={<Login />}></Route>
                        <Route path='/Contatos' element={<Contatos />}></Route>
                    </Routes>
                </header>
            </div>
        </>
    )
}

export default Home;