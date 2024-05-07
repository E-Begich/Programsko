import './App.css';
import { Link, Routes, Route, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home';
import Vozila from './pages/Vozila';
import About from './pages/About';
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import Odjava from './pages/Odjava';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='fixed-top bg-body-tertiary shadow'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className= 'navbar-brand text-success fw-semibold'>
              React Rent a car
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='active text-uppercase'>Home
              </Nav.Link>
              <Nav.Link href='/vozila' className='text-uppercase'>Vozila
              </Nav.Link>
              <Nav.Link href='/about' className='text-uppercase'>About
              </Nav.Link>
              <Nav.Link href='/prijava' className='text-uppercase'>Prijava
              </Nav.Link>
              <Nav.Link href='/registracija' className='text-uppercase'>Registracija
              </Nav.Link>
              <Nav.Link href='/odjava' className='text-uppercase'>Odjava
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vozila' element={<Vozila />} />
        <Route path='/about' element={<About />} />
        <Route path='/prijava' element={<Prijava />} />
        <Route path='/registracija' element={<Registracija />} />
        <Route path='/odjava' element={<Odjava />} />
      </Routes>

      <footer className='bg-body-tertiary'>
        <p className='p-3 m-0 text-center'>copyright @ made by DariaiEmina</p>
      </footer>
    </div>
  );
}

export default App;
