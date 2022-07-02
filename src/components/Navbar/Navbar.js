import { Link } from 'react-router-dom'
import icono from '../../assets/img/header-simpsons.gif';
import './Navbar.css'

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">                  
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mt-0">
                                <Link className="nav-link" aria-current="page" to="/"><img className='imagenNavbar' src={icono} alt='Los Simpsons fanpage' /></Link>
                            </li>
                            <li className="nav-item mt-4">
                                <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item mt-4" >
                                <Link className="nav-link" to="/contacto">Contacto</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                        <input type="text" className="form-control me-3" aria-describedby="emailHelp" placeholder='Search' />
                            <button className="btn btn-outline-success" type="submit">Busqueda</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>)
}
export default Navbar