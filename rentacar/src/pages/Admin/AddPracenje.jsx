import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { useParams } from 'react-router';
import axios from "axios";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import HeaderAdmin from "../../components/HeaderAdmin";

const AddPracenje = () => {
  const { id } = useParams()

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');
    const [id_ugovor, setId_ugovor] = useState('');


    const addPracenjeHandler = async () => {
      

      const data = {
        Latitude: latitude,
        Longitude: longitude,
        Id_vozilo: id_vozilo,
        Id_ugovor: id_ugovor,
    }


    await axios.post('/api/aplikacija/addPracenje', data)
    toast.success('Praćenje je dodano!')

    
  }




  return (
    <>
    <HeaderAdmin/>
        <Container className='mt-5 p-2'>
        <h1>Dodaj pracenje</h1>
        <hr />

        <Form>


<div class="d-flex">
  <div class="dropdown me-1">
    <button type="button" class="btn btn-secondary dropdown-toggle" id="dropdownMenuOffset" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="10,20">
      Vozilo
    </button>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuOffset">
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




      <form className="container" onSubmit={addPracenjeHandler}/>

        <Form.Group className="mb-3" controlId="latitude">
            <Form.Label>Latitude</Form.Label>
            <Form.Control 
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            type="number" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="longitude">
            <Form.Label>Longitude</Form.Label>
            <Form.Control
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            type="number" />
        </Form.Group>

        <div className="d-grid gap-2 col-6 mx-auto">
                  <button type="submit" className="btn btn-outline-dark ms-2" id="button-test">Spremi podatke</button>
                  <Link to={`/adminpocetna/${id}`} className="btn btn-outline-dark ms-2">Vrati se na početnu</Link>

                </div>

        </Form>
      </Container>
      </>
    )
  }
  export default AddPracenje

