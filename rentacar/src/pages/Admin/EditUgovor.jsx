import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
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

    await axios.put(`/api/aplikacija/getOneUgovor/${id}`, data)

    toast.success('Ugovor je uspjesno promijenjen!')
    navigate(`/adminPocetna/${id}`)

  }
  return (
    <>
    <HeaderAdmin/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Izmijeni ugovor</h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
            <NavLink className="nav-link">
              <Link to={`/showVozilo/${id}`} className="btn btn-outline-dark btn-lg">Pregled vozila</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/showZahtjevi/${id}`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/addPracenje/${id}`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
              </NavLink>
              <br />
              <br />
              <NavLink className="nav-link">
                <Link to={`/klijentEdit/${id}`} className="btn btn-outline-dark btn-lg">Promijeni podatke</Link>
              </NavLink>


            </nav>
          </div>
          <div className="col-8">
            <Container className='mt-2 p-3'>
              <Form onSubmit={updateHandler}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={datum_pocetka}
                    onChange={(e) => setDatum_pocetka(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={datum_zavrsetka}
                    onChange={(e) => setDatum_zavrsetka(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={osiguranje}
                    onChange={(e) => setOsiguranje(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={napomena}
                    onChange={(e) => setNapomena(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={id_vozilo}
                    onChange={(e) => setId_vozilo(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={id_korisnik}
                    onChange={(e) => setId_korisnik(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={id_zaposlenik}
                    onChange={(e) => setId_zaposlenik(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Button variant="btn btn-outline-dark btn-lg" type="submit">
                  Uredi podatke
                </Button>
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