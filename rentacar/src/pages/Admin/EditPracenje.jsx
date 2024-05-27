import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditPracenje = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');
    const [id_ugovor, setId_ugovor] = useState('');


  useEffect(() => {
    const getOnePracenje = async () => {
      const { data } = await axios.get(`/api/aplikacija/getOnePracenje/${id}`)
      console.log(data)

      setLatitude(data.Latitude)
      setLongitude(data.Longitude)
      setId_vozilo(data.Id_vozilo)
      setId_ugovor(data.Id_ugovor)

    }
    getOnePracenje()

  }, [id])

  const updateHandler = async (e) => {

    e.preventDefault()


    const data = {
      Latitude: latitude,
        Longitude: longitude,
        Id_vozilo: id_vozilo,
        Id_ugovor: id_ugovor
    }

    await axios.put(`/api/aplikacija/getOnePracenje/${id}`, data)

    toast.success('Pracenje je uspjesno izmijenjeno!')
    navigate(`/adminPocetna/${id}`)

  }
  return (
    <>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Izmijeni pracenje</h1>
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
              <Link to={`/addUgovor/${id}`} className="btn btn-outline-dark btn-lg">Kreiraj ugovor</Link>
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
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
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
                    value={id_ugovor}
                    onChange={(e) => setId_ugovor(e.target.value)}
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

export default EditPracenje