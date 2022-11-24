import '../css/Index.css';
import { useEffect } from 'react';
import useFullPageLoader from './FullPageLoader/useFullPageLoader';

function Index() {

  {/* inicio do loader */}
  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
      showLoader();
      console.log("working loader");
      setTimeout(() => {
          hideLoader()
      }, 1500);
  }, [])
{/* fim do loader */}
  return (
    <>
      {/* Jumbotron */}
      <div className="p-5 mb-4 myBackground rounded-3">
        <div className="container-fluid py-5 text-center">
          <h1 className="display-5 fw-bold text-dark ">NOME DA FERRAMENTA</h1>
          <p className=" fs-4  text-white text-justify">Sabemos o que você precisa para o seu negócio!<br/> Por isso desenvolvemos esta ferramenta para facilitar seus processos.</p>
        </div>
      </div>
      {/* hanging icons */}
      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">FUNCIONALIDADES</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Cadastrar</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#cpu-fill" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Buscar</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
              <svg className="bi" width="1em" height="1em"><use xlinkHref="#tools" /></svg>
            </div>
            <div>
              <h3 className="fs-2">Remover</h3>
              <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
              <a href="#" className="btn btn-primary">
                Primary button
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Jumbotron */}
      <div className="p-5 mb-4 bg-dark rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold text-white">A FERRAMENTA ERP IDEAL PARA O SEU NEGÓCIO!</h1>
          <p className="fs-4 text-white">_____ é uma ferramenta software de gestão de estoque que interliga todos os dados e processos da sua organização em um único sistema!</p>
          <button className="btn btn-primary btn-lg" type="button">Entre em contato!</button>
        </div>
      </div>

      <div className="container py-3">
        <main>
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
            {/* Card 1 */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Free</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$0<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>10 users included</li>
                    <li>2 GB of storage</li>
                    <li>Email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3">
                  <h4 className="my-0 fw-normal">Pro</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$15<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>20 users included</li>
                    <li>10 GB of storage</li>
                    <li>Priority email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Get started</button>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm border-primary">
                <div className="card-header py-3 text-bg-primary border-primary">
                  <h4 className="my-0 fw-normal">Enterprise</h4>
                </div>
                <div className="card-body">
                  <h1 className="card-title pricing-card-title">$29<small className="text-muted fw-light">/mo</small></h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>30 users included</li>
                    <li>15 GB of storage</li>
                    <li>Phone and email support</li>
                    <li>Help center access</li>
                  </ul>
                  <button type="button" className="w-100 btn btn-lg btn-primary">Contact us</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* rodapé, favor não alterar :) */}
      <div classNameName="container">
                <footer classNameName="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top sticky-bottom backgroundfooter">
                    <p classNameName="col mb-0 text-muted">© MMXXII</p>
                </footer>
      </div>
      {/* inicio da chamada do loader */}
      {loader}
      {/* fim da chamada do loader */}
    </>
  )
}

export default Index;