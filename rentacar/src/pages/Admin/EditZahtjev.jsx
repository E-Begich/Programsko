import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from "../../components/HeaderAdmin";

const EditZahtjev = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [datum_pocetka, setDatum_pocetka] = useState('');
    const [datum_zavrsetka, setDatum_zavrsetka] = useState('');
    const [napomena, setNapomena] = useState('');
    const [id_klijenta, setId_klijenta] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');


  useEffect(() => {
    const getOneZahtjev = async () => {
      const { data } = await axios.get(`/api/aplikacija/getOneZahtjev/${id}`)
      console.log(data)

      setDatum_pocetka(data.Datum_pocetka)
      setDatum_zavrsetka(data.Datum_zavrsetka)
      setNapomena(data.Napomena)
      setId_klijenta(data.Id_klijenta)
      setId_vozilo(data.Id_vozilo)

    }
    getOneZahtjev()

  }, [id])

  const updateHandler = async (e) => {

    e.preventDefault()


    const data = {
        Datum_pocetka: datum_pocetka,
        Datum_zavrsetka: datum_zavrsetka,
        Napomena: napomena,
        Id_klijenta: id_klijenta,
        Id_vozilo: id_vozilo,
    }

    await axios.put(`/api/aplikacija/getOneZahtjev/${id}`, data)

    toast.success('Zahtjev je uspjesno promijenjen!')
    navigate(`/adminPocetna/${id}`)

  }
  return (
    <>
    <HeaderAdmin/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Izmijeni zahtjev</h1>
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
              <Link to={`/showZahtjevi/`} className="btn btn-outline-dark btn-lg">Pregled ugovora</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/addPracenje/`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
              </NavLink>
              <br />
              <br />
              <NavLink className="nav-link">
                <Link to={`/klijentEdit/`} className="btn btn-outline-dark btn-lg">Promijeni podatke</Link>
              </NavLink>


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

                <Form>Napomena</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={napomena}
                    onChange={(e) => setNapomena(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Id klijenta</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={id_klijenta}
                    onChange={(e) => setId_klijenta(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Id vozilo</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={id_vozilo}
                    onChange={(e) => setId_vozilo(e.target.value)}
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

export default EditZahtjev