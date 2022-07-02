import React from 'react'
import error from '../../assets/img/carrousel-1.jpg'

const Error = () => {
  return (
    <div className='fondo'>
      <div className='container detras mt-5 mb-5 ' >
        <div className="m-3 text-center">
          <h1>Lo sentimos, ha ocurido un error</h1>
            <p>Le recomendamos que utilice nuestro menu de navegacion para ubicarse </p>
          <img src={error} className="error" alt="error"/>
        </div>
      </div>
    </div>
  )
}

export default Error