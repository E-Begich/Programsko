import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from "../../components/HeaderAdmin";

const EditUgovor = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [datum_pocetka, setDatum_pocetka] = useState('');
  const [datum_zavrsetka, setDatum_zavrsetka] = useState('');
  const [status, setStatus] = useState('');
  const [osiguranje, setOsiguranje] = useState('');
  const [napomena, setNapomena] = useState('');
  const [id_vozilo, setId_vozilo] = useState('');
  const [id_korisnik, setId_korisnik] = useState('');
  const [id_zaposlenik, setId_zaposlenik] = useState('');


  useEffect(() => {
    const getOneUgovor = async () => {
      const { data } = await axios.get(`/api/aplikacija/getOneUgovor/${id}`)
      console.log(data)

      setDatum_pocetka(data.Datum_pocetka)
      setDatum_zavrsetka(data.Datum_zavrsetka)
      setStatus(data.Status)
      setOsiguranje(data.Osiguranje)
      setNapomena(data.Napomena)
      setId_vozilo(data.Id_vozilo)
      setId_korisnik(data.Id_korisnik)
      setId_zaposlenik(data.Id_zaposlenik)

    }
    getOneUgovor()

  }, [id])

  const updateHandler = async (e) => {

    e.preventDefault()


    const data = {
      Datum_pocetka: datum_pocetka,
      Datum_zavrsetka: datum_zavrsetka,
      Status: status,
      Osiguranje: osiguranje,
      Napomena: napomena,
      Id_vozilo: id_vozilo,
      Id_korisnik: id_korisnik,
      Id_zaposlenik: id_zaposlenik
    }

    await axios.put(`/api/aplikacija/updateUgovor/${id}`, data)

    toast.success('Ugovor je uspjesno promijenjen!')
    navigate(`/adminPocetna/${id}`)

  }
  return (
    <>
      <HeaderAdmin />
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Izmijeni ugovor</h1>
            <div class="d-flex">
              <div class="dropdown me-1">
                <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
                  Vozilo
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
                  <li><a class="dropdown-item" href="#">Ime i prezime</a></li>
                  <li><a class="dropdown-item" href="#">Marka i model</a></li>
                </ul>
              </div>
              <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Korisnik
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">Ime i prezime</a></li>
                  <li><a class="dropdown-item" href="#">OIB</a></li>
                </ul>
              </div>
              <div class="btn-group">
                <button type="button" class="btn btn-secondary">Zaposlenik</button>
                <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
                  <span class="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
                  <li><a class="dropdown-item" href="#">Ime i prezime</a></li>
                </ul>
              </div>
            </div>

          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
              <NavLink className="nav-link">
                <Link to={`/showVozilo/`} className="btn btn-outline-dark btn-lg">Pregled vozila</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/showZahtjevi/`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/addPracenje/`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
              </NavLink>
              <br />
              <br />


            </nav>
          </div>
          <div className="col-8">
            <Container className='mt-2 p-3'>
              <Form>Datum početka</Form>
              <Form onSubmit={updateHandler}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={datum_pocetka}
                    onChange={(e) => setDatum_pocetka(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Datum završetka</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={datum_zavrsetka}
                    onChange={(e) => setDatum_zavrsetka(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Status</Form>
                <Form.Group className="demo-radio-buttons-group-label" controlId="datum zavrsetka">
                  <input type="radio" checked={status === 'U tijeku'} onChange={e => setStatus(e.target.value)} name="status" value="U tijeku" className="app-check"></input>
                  <label>U tijeku</label>
                  <br />
                  <br />
                  <input type="radio" checked={status === 'Zavrsen'} onChange={e => setStatus(e.target.value)} name="status" value="Zavrsen" className="app-check"></input>
                  <label>Završen</label>
                  <br />
                  <br />
                </Form.Group>

                <Form>Osiguranje</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={osiguranje}
                    onChange={(e) => setOsiguranje(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Napomena</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={napomena}
                    onChange={(e) => setNapomena(e.target.value)}
                    type="text"
                  />
                </Form.Group>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className="btn btn-outline-dark ms-2" id="button-test">Spremi podatke</button>
                  <Link to={`/adminpocetna/${id}`} className="btn btn-outline-dark ms-2">Vrati se na početnu</Link>

                </div>

              </Form>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </>
  )
}

export default EditUgovor