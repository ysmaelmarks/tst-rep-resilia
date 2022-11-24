import React from 'react'
import Moto from "./moto.gif";
import Spinner from "./Gear-0.2s-200px.gif"
import Spinner2 from "./Gear-0.4s-234px.gif"
import Spinner3 from "./Eclipse-0.4s-201px.gif"
import "./Loading.css"

const FullPageLoader = () => {
  return (
    <div className="fp-container">
        <img src={Spinner3} className="fp-loader" alt="loading" /> 
    </div>
  )
}

export default FullPageLoader;