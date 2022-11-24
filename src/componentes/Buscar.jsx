import '../css/Buscar.css';
import { useEffect } from 'react';
import FreeSolo from "./Autocompleter"
import useFullPageLoader from './FullPageLoader/useFullPageLoader';


const Buscar = () => {

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
      </div>
      <div className='teste mt-5'>
        <FreeSolo/>
      </div>
      {/* rodapé, favor não alterar :) */}
      <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mt-5 border-top fixed-bottom">
          <p className="col mb-0 text-muted">© MMXXII</p>
        </footer>
      </div>
      {loader}
    </>
  )
}

export default Buscar;
