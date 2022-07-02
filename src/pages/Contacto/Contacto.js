import React from 'react'
import './Contacto.css'

const Contacto = () => {
  return (
    <div className='caja'>
      <form className='container formulario mt-5'>
        <div className="mb-3">    
          <label for="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='SuCorreo@mail.com' />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">Mensaje</label>
          <textarea type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3 form-check">
        </div>
        <button type="submit" className="btn btn-danger">Submit</button>
      </form>
    </div>
  )
}

export default Contacto