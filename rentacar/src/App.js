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
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar-brand text-success fw-semibold'>
              React Restaurant
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home</Nav.Link>
              <Nav.Link href='/menu' className='text-uppercase'>Menu</Nav.Link>
              <Nav.Link href='/vozila' className='text-uppercase'>Vozila</Nav.Link>
              <Nav.Link href='/onama' className='text-uppercase'>Onama</Nav.Link>
              <Nav.Link href='/prijava' className='text-uppercase'>Prijava</Nav.Link>
              <Nav.Link href='/registracija' className='text-uppercase'>Registracija</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vozila' element={<Vozila />} />
        <Route path='/onama' element={<Onama />} />
        <Route path='/prijava' element={<Prijava />} />
        <Route path='/registracija' element={<Registracija />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by Ionut Cora</p>
      </footer>
    </div>
  );
}

export default App;