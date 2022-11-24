import { useState, useEffect } from "react";
import '../css/Cadastrar.css';
import blogFetch from "../hooks/axios";
import useFullPageLoader from './FullPageLoader/useFullPageLoader';

const Atualizar = () => {
       
    const [id, setId] = useState()
    const [nome, setNome] = useState()
    const [descricao, setDescricao] = useState()
    const [preco, setPreco] = useState()
    const [imagem, setImagem] = useState()
    
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    useEffect(() => {
      showLoader();
      console.log("working loader");
      setTimeout(() => {
        hideLoader()
      }, 1500);
    }, [])
    

    const updateProduct = async (e) => {
        e.preventDefault();
        await blogFetch.patch(`/produtos/${id}`, {
        id, nome, descricao, preco, imagem
        })
      
    };

    return (
        <>
            <div className="container mt-5">
                <main>
                    <div className="d-flex flex-wrap justify-content-center">
                        <form onSubmit={(e) => updateProduct(e)}>
                        <div className="col-md-6">
                            <input type="text" className="form-control" id="id" placeholder="ID" name="id" onChange={(e)=> setId(e.target.value)}/>
                            <br />
                            {/* ID */}
                            <input type="text" className="form-control" id="nome" placeholder="Nome" name="nome" onChange={(e)=> setNome(e.target.value)}/>
                            <br />
                            {/* Nome */}
                            <input type="text" className="form-control" id="descricão" placeholder="Descrição" name="Descrição" onChange={(e)=> setDescricao(e.target.value)} />
                            <br />
                            {/* Descrição */}
                            <input type="text" className="form-control" id="preco" placeholder="Preco" name="Preco" onChange={(e)=> setPreco(e.target.value)}/>
                            <br />
                            {/* Valor */}
                            <input type="text" className="form-control" id="imagem" placeholder="Url Imagem" name="imagem" onChange={(e)=> setImagem(e.target.value)}/>
                            <br />
                            {/* Url */}
                            <button className="w-200 btn btn-lg btn-primary mt-5" type="submit" id='but'>Atualizar</button>
                        </div>
                        </form>
                    </div>
                </main>
            </div>
            {/* rodapé, favor não alterar :) */}
            <div className="container">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top fixed-bottom">
                    <p className="col mb-0 text-muted">© MMXXII</p>
                </footer>
            </div>
            {loader}
        </>
    )
}

export default Atualizar;