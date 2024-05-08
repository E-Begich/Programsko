import './App.css';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Header from './components/Header';
import Footer from './components/Footer';
import Nav from 'react-bootstrap/Nav';
import Home from './pages/Home';
import Vozila from './pages/Vozila';
import Onama from './pages/Onama';
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import Odjava from './pages/Odjava';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vozila' element={<Vozila />} />
        <Route path='/Onama' element={<Onama />} />
        <Route path='/prijava' element={<Prijava />} />
        <Route path='/registracija' element={<Registracija />} />
        <Route path='/odjava' element={<Odjava />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
