import '../css/contato.css'
import { useEffect } from 'react';
import useFullPageLoader from './FullPageLoader/useFullPageLoader';

function contatos() {

  const [loader, showLoader, hideLoader] = useFullPageLoader();

  useEffect(() => {
    showLoader();
    console.log("working loader");
    setTimeout(() => {
      hideLoader()
    }, 500);
  }, [])

  return (

    <>    
    <section className="team-section py-5">
      <div className="container">
        <div className="row justify-content-center">
        {/* primeiro card :) */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
              <div className="card-body p-4">
                <div className="member-profile position-absolute w-100 text-center">
                  <img className="rounded-circle mx-auto d-inline-block shadow-sm"
                    src="https://www.bootdey.com/img/Content/avatar/avatar5.png" alt="" />
                </div>
                <div className="card-text pt-1">
                  <h5 className="member-name mb-0 text-center text-primary font-weight-bold">Ysmael Marques</h5>
                  <div className="mb-3 text-center">Programador</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque
                    convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat
                    est, et venenatis nunc.</div>
                </div>
              </div>
              <div className="">
              <ul className="social-list list-inline mb-0 mx-auto">
              <li className="list-inline-item"><a href="https://www.github.com/ysmaelmarks" target="_blank"><img className='img'
                    src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/ysmael-marques/" target="_blank"><img className='img' id='img'
                    src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* segundo card :) */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
              <div className="card-body p-4">
                <div className="member-profile position-absolute w-100 text-center">
                  <img className="rounded-circle mx-auto d-inline-block shadow-sm"
                    src="https://www.bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                </div>
                <div className="card-text pt-1">
                  <h5 className="member-name mb-0 text-center text-primary font-weight-bold">Yan Alves</h5>
                  <div className="mb-3 text-center">Programador</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque
                    convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat
                    est, et venenatis nunc.</div>
                </div>
              </div>
              <div className="">
              <ul className="social-list list-inline mb-0 mx-auto">
              <li className="list-inline-item"><a href="https://www.linkedin.com/in/yan-alves-7b953123a/" target="_blank"><img className='img'
                    src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></a></li>
                  <li className="list-inline-item"><a href="https://github.com/PogeYn" target="_blank"><img className='img' id='img'
                    src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* terceiro card :) */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
              <div className="card-body p-4">
                <div className="member-profile position-absolute w-100 text-center">
                  <img className="rounded-circle mx-auto d-inline-block shadow-sm"
                    src="https://th.bing.com/th/id/OIP.bDLkAdcxKVUsvbZ_VVZ05QAAAA?pid=ImgDet&rs=1" alt="" />
                </div>
                <div className="card-text pt-1">
                  <h5 className="member-name mb-0 text-center text-primary font-weight-bold">Rayane Santos</h5>
                  <div className="mb-3 text-center">Programador</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque
                    convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat
                    est, et venenatis nunc.</div>
                </div>
              </div>
              <div className="">
              <ul className="social-list list-inline mb-0 mx-auto">
                 <li className="list-inline-item"><a href="https://github.com/rayane1705" target="_blank"><img className='img'
                    src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/rayane-santos-1915a024b/" target="_blank"><img className='img' id='img'
                    src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* quarto card :) */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
              <div className="card-body p-4">
                <div className="member-profile position-absolute w-100 text-center">
                  <img className="rounded-circle mx-auto d-inline-block shadow-sm"
                    src="https://bordadopontocruz.com/wp-content/uploads/2019/06/Princesas-Disney-Pop-Art-3.png" alt="" />
                </div>
                <div className="card-text pt-1">
                  <h5 className="member-name mb-0 text-center text-primary font-weight-bold">Jariane Santos</h5>
                  <div className="mb-3 text-center">Programador</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque
                    convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat
                    est, et venenatis nunc.</div>
                </div>
              </div>
              <div className="">
                <ul className="social-list list-inline mb-0 mx-auto">
                <li className="list-inline-item"><a href="https://github.com/Jarianesantos" target="_blank"><img className='img'
                    src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/jariane-santos-b2921a1b2/" target="_blank"><img className='img' id='img'
                    src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* quinto card :) */}
          <div className="col-12 col-md-6">
            <div className="card border-0 shadow-lg pt-5 my-5 position-relative">
              <div className="card-body p-4">
                <div className="member-profile position-absolute w-100 text-center">
                  <img className="rounded-circle mx-auto d-inline-block shadow-sm"
                    src="https://bordadopontocruz.com/wp-content/uploads/2019/06/Princesas-Disney-Pop-Art-2.png" alt="" />
                </div>
                <div className="card-text pt-1">
                  <h5 className="member-name mb-0 text-center text-primary font-weight-bold">Larissa Martins</h5>
                  <div className="mb-3 text-center">Programador</div>
                  <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    Vivamus eget eros vestibulum, accumsan ante viverra, condimentum tellus. Curabitur pellentesque
                    convallis purus non ornare. Donec bibendum sed purus dignissim rutrum. Maecenas bibendum feugiat
                    est, et venenatis nunc.</div>
                </div>
              </div>
              <div className="">
                <ul className="social-list list-inline mb-0 mx-auto">
                  <li className="list-inline-item"><a href="https://github.com/laririn" target="_blank"><img className='img'
                    src="https://pngimg.com/uploads/github/github_PNG40.png" alt="" /></a></li>
                  <li className="list-inline-item"><a href="https://www.linkedin.com/in/larissa98pereira/" target="_blank"><img className='img' id='img'
                    src="https://www.clipartmax.com/png/middle/304-3041379_linkedin-with-circle-comments-transparent-background-website-icon.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
          {/* fecha todos os cards :) */}
          </div>
          </div>
        </section>
        <div className="container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 mt-5 border-top sticky-bottom">
          <p className="col mb-0 text-muted">© MMXXII</p>
        </footer>
      </div>
        {loader}
        </>


        )
}


export default contatos