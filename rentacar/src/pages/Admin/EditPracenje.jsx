import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import HeaderAdmin from "../../components/HeaderAdmin";

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

    await axios.put(`/api/aplikacija/updatePracenje/${id}`, data)

    toast.success('Pracenje je uspjesno izmijenjeno!')
    navigate(`/adminPocetna/${id}`)

  }
  return (
    <>
    <HeaderAdmin/>

    
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Izmijeni praćenje</h1> 
            

<div class="d-flex">
  <div class="dropdown-center">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Vozilo
    </button>
    <ul class="dropdown-menu " aria-labelledby="dropdownMenuOffset">
      <li><a class="dropdown-item" href="#">Ime i prezime </a></li>
      <li><a class="dropdown-item" href="#">Marka i model</a></li>
    </ul>
  </div>
  <div class="btn-group">
    <button type="button" class="btn btn-secondary">Ugovor</button>
    <button type="button" class="btn btn-secondary dropdown-toggle dropdown-toggle-split" id="dropdownMenuReference" data-bs-toggle="dropdown" aria-expanded="false" data-bs-reference="parent">
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuReference">
      <li><a class="dropdown-item" href="#">Ime i prezime</a></li>
      <li><a class="dropdown-item" href="#">Datum i status</a></li>
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
              <Link to={`/addUgovor/`} className="btn btn-outline-dark btn-lg">Kreiraj ugovor</Link>
              </NavLink>
              <br />
              <br />
      


            </nav>
          </div>
          <div className="col-8">
            <Container className='mt-2 p-3'>
              <Form>Latitude</Form>
              <Form onSubmit={updateHandler}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={latitude}
                    onChange={(e) => setLatitude(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form>Longitude</Form>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={longitude}
                    onChange={(e) => setLongitude(e.target.value)}
                    type="text"
                    
                  />
                  
                </Form.Group>



                <Button variant="btn btn-outline-dark btn-lg" type="submit">
                  Spremi podatke
                </Button>

                <Button variant="btn btn-outline-dark btn-lg" type="potvrdi">
            Uredi podatke
            </Button>

            <Button variant="btn btn-outline-dark btn-lg" type="potvrdi">
            Izbriši podatke
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