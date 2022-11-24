import '../css/Login.css';
import { useEffect } from 'react';
import useFullPageLoader from './FullPageLoader/useFullPageLoader';

function Login() {

    const [loader, showLoader, hideLoader] = useFullPageLoader();

    useEffect(() => {
        showLoader();
        console.log("working loader");
        setTimeout(() => {
            hideLoader()
        }, 1500);
    }, [])

    return (
        <>
            <div className="container mt-5">
                <main className="d-flex flex-wrap justify-content-center">
                    <form>
                        <h1 className="h3 mb-3 fw-normal">Inicie sua sessão</h1>
                        <div className="form-floating mt-5 mb-3">
                            <input type="email" className="form-control" id="floatingPassword" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Digite seu E-mail</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingPassword" placeholder="Password" />
                            <label htmlFor="floatingPassword">Senha</label>
                        </div>
                        <div className="checkbox mb-2">
                            <label>
                                <input type="checkbox" value="remember-me" /> Lembrar
                            </label>
                        </div>
                        <button className="w-20 btn btn-lg btn-primary mt-4" type="submit,">Entre</button>
                    </form>
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

export default Login;