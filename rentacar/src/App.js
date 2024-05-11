import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vozila from './pages/Vozila';
import Onama from './pages/Onama';
import Prijava from './pages/Prijava';
import Registracija from './pages/Registracija';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
    <Header />
    <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vozila' element={<Vozila />} />
        <Route path='/onama' element={<Onama />} />
        <Route path='/prijava' element={<Prijava />} />
        <Route path='/registracija' element={<Registracija />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;