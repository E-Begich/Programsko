import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HeaderAdmin from "../../components/HeaderAdmin";

const AddRacun = () => {


    const [cijena, setCijena] = useState('');
    const [porez, setPorez] = useState('');
    const [ukupna_cijena, setUkupna_cijena] = useState('');
    const [id_ugovor, setId_ugovor] = useState('');

    const addRacunHandler = async () => {


      const data = {

        Cijena: cijena,
        Porez: porez,
        Ukupna_cijena: ukupna_cijena,
        Id_ugovor: id_ugovor,
    }

    await axios.post('/api/aplikacija/addRacun', data)


}

return (
  <>
  <HeaderAdmin/>
      <Container className='mt-5 p-2'>
      <h1>Dodaj racun</h1>
      <hr />

    <Form>
    <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Ugovor
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Ime i prezime</a></li>
    <li><a class="dropdown-item" href="#">Cijena</a></li>
  </ul>
</div>


    <form className="container" onSubmit={addRacunHandler}/>

      <Form.Group className="mb-3" controlId="cijena">
          <Form.Label>Cijena</Form.Label>
          <Form.Control 
          value={cijena}
          onChange={(e) => setCijena(e.target.value)}
          type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="porez">
          <Form.Label>Porez</Form.Label>
          <Form.Control
          value={porez}
          onChange={(e) => setPorez(e.target.value)}
          type="number" />
      </Form.Group>
       
      <Button variant="btn btn-outline-dark btn-lg" type="potvrdi">
            Dodaj račun
            </Button>

            <Button variant="btn btn-outline-dark btn-lg" type="potvrdi">
            Uredi račun
            </Button>

            <Button variant="btn btn-outline-dark btn-lg" type="potvrdi">
            Izbriši račun
            </Button>

        </Form>
      </Container>
      </>
    )
  }


export default AddRacun