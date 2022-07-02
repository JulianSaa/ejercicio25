import React from 'react';
import evolucion from '../../assets/img/carrousel-3.jpg'
import maggie from '../../assets/img/maggie.jpg'
import homer from '../../assets/img/homer.jpg'
import bart from '../../assets/img/bart.jpg'
import './Home.css'

const Home = () => {
    return (
        <>
            <div>
                <img src={evolucion} className='evolucion' alt="imagen de la evolucion"/>
                <div className='fondo container-fluid'>
                    <div className="card" >
                        <img src={maggie} className="card-img-top cardimg" alt="maggie" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="btn btn-danger">Leer mas...</p>
                        </div>
                    </div>
                    <div className="card" >
                        <img src={homer} className="card-img-top cardimg" alt="homer" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="btn btn-danger">Leer mas...</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={bart} className="card-img-top cardimg" alt="bart" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <p class="btn btn-danger">Leer mas...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Home 