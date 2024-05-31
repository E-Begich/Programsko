import { Routes, Route } from 'react-router-dom';
import "./App.css"
//pocetna stranica
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Vozila from './pages/Vozila';
import Onama from './pages/Onama';
import Prijava from './pages/Prijava';
import Odjava from './pages/Odjava';
import Home2 from './pages/Home2';
import Registracija from './pages/Registracija';
import AboutVozilo from './pages/AboutVozilo';

//admin radnje
import AdminPrijava from './pages/Admin/AdminPrijava';
import AdminPocetna from './pages/Admin/AdminPocetna';
import AddPracenje from './pages/Admin/AddPracenje';
import AddRacun from './pages/Admin/AddRacun';
import AddUgovor from './pages/Admin/AddUgovor';
import AddVozilo from './pages/Admin/AddVozilo';
import AddZahtjev from './pages/Admin/AddZahtjev';
import DeleteUgovor from './pages/Admin/DeleteUgovor';
import DeleteVozilo from './pages/Admin/DeleteVozilo';
import EditPracenje from './pages/Admin/EditPracenje';
import EditUgovor from './pages/Admin/EditUgovor';
import EditVozilo from './pages/Admin/EditVozilo';
import ShowUgovor from './pages/Admin/ShowUgovor';
import ShowVozilo from './pages/Admin/ShowVozilo';
import ShowZahtjeva from './pages/Admin/ShowZahtjeva';

//klijent radnje
import KlijentEdit from './pages/Klijent/KlijentEdit';
import KlijentEditLozinka from './pages/Klijent/KlijentEditLozinka';
import KlijentPocetna from './pages/Klijent/KlijentPocetna';
import ShowZahtjevi from './pages/Klijent/ShowZahtjevi';
import KlijentZahtjev from './pages/Klijent/KlijentZahtjev';
import KlijentAllUgovori from './pages/Klijent/KlijentAllUgovori';



//importan toast - onaj mali skocni prozorcic za informacije
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='App'>
      <ToastContainer></ToastContainer>
    <Header />
      <Routes>
        {/* pocetna stranica */}
        <Route path='/' element={<Home />} />
        <Route path='/pocetna' element={<Home2 />} />
        <Route path='/vozila' element={<Vozila />} />
        <Route path='/aboutVozilo/:id' element={<AboutVozilo />} />
        <Route path='/onama' element={<Onama />} />
        <Route path='/prijava' element={<Prijava />} />
        <Route path='/odjava' element={<Odjava />} />
        <Route path='/registracija' element={<Registracija />} />

        {/* Admin-Zaposlenik radnje */}
        <Route path='/adminPrijava' element={<AdminPrijava />} />
        <Route path='/addpracenje' element={<AddPracenje />} />
        <Route path='/addracun' element={<AddRacun />} />
        <Route path='/addugovor' element={<AddUgovor />} />
        <Route path='/addvozilo' element={<AddVozilo />} />
        <Route path='/addzahtjev' element={<AddZahtjev />} />
        <Route path='/adminpocetna/:id' element={<AdminPocetna />} />
        <Route path='/deleteugovor' element={<DeleteUgovor />} />
        <Route path='/deletevozilo' element={<DeleteVozilo />} />
        <Route path='/editpracenje' element={<EditPracenje />} />
        <Route path='/editugovor' element={<EditUgovor />} />
        <Route path='/editvozilo' element={<EditVozilo />} />
        <Route path='/showugovor' element={<ShowUgovor />} />
        <Route path='/showvozilo' element={<ShowVozilo />} />
        <Route path='/showzahtjeva' element={<ShowZahtjeva />} />

        {/* Klijent radnje */}
        <Route path='/klijentPocetna/:id' element={<KlijentPocetna />} />
        <Route path='/klijentEdit/:id' element={<KlijentEdit />} />
        <Route path='/klijentEditLozinka/:id' element={<KlijentEditLozinka />} />
        <Route path='/showZahtjevi/:id' element={<ShowZahtjevi />} />
        <Route path='/klijentZahtjev/:id' element={<KlijentZahtjev />} />
        <Route path='/klijentAllUgovori/:id' element={<KlijentAllUgovori />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;