import React from 'react'
import hola from '../../assets/img/meme-2.jpg'
import meme from '../../assets/img/carrousel-2.jpg'
import './Blog.css'

const Blog = () => {
  return (
    <div className='fondo'>
      <div className='container detras mt-5 mb-5' >
        <div className="m-3">
          <h1>Episodio "Especial de Noche de Brujas VII".Octubre 27, 1996.</h1>
          <img src={meme} className="memes" alt="meme"/>
            <div>
              <p>Lorem ipsum dolor sit amet. Et soluta sunt ut fugit dolores est omnis accusamus ut commodi quia ut voluptatem molestias. Et dignissimos pariatur sed officia recusandae sit atque accusantium? Aut voluptatem ratione vel unde dolor ea voluptatibus veritatis sit galisum dicta aut molestiae asperiores. Non doloribus voluptatum eos nesciunt repudiandae est culpa nobis ut fugit dolores.</p>        
            </div>
        </div>
        <div className="m-3">
          <h1>Episodio "Lucha educativa".Abril 16, 1995.</h1>
          <img src={hola} className="memes" alt="meme 2"/>
            <div>
              <p >Lorem ipsum dolor sit amet. Et soluta sunt ut fugit dolores est omnis accusamus ut commodi quia ut voluptatem molestias. Et dignissimos pariatur sed officia recusandae sit atque accusantium? Aut voluptatem ratione vel unde dolor ea voluptatibus veritatis sit galisum dicta aut molestiae asperiores. Non doloribus voluptatum eos nesciunt repudiandae est culpa nobis ut fugit dolores.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Blog
