import '../css/Remover.css';
import blogFetch from "../hooks/axios";
import { useState, useEffect } from "react";
import useFullPageLoader from './FullPageLoader/useFullPageLoader';

const Remover = () => {
    const [id, setId] = useState()
    
    const [loader, showLoader, hideLoader] = useFullPageLoader();

    useEffect(() => {
        showLoader();
        console.log("working loader");
        setTimeout(() => {
            hideLoader()
        }, 1500);
    }, [])
    
    const removeProduct = async (e) => {
        e.preventDefault();
        await blogFetch.delete(`/produtos/${id}`, {
        id
        })
      
    };
    return (
        <>
            <div className="container mt-5">
                <main>
                    <div>
                        <form onSubmit={(e) => removeProduct(e)}>
                        <input type="number" className="form-control" id="floatingInput" placeholder="Id do produto" onChange={(e)=> setId(e.target.value)}/>
                        <br />
                        <button className="w-20 btn btn-lg btn-primary mt-5" type="submit">Remover</button>
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

export default Remover


