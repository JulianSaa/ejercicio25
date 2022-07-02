import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Blog from './pages/Blog/Blog';
import Contacto from './pages/Contacto';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/blog' element={<Blog />}/>
          <Route path='/contacto' element={<Contacto />}/>
          <Route path='*' element={<Error />}/>
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
