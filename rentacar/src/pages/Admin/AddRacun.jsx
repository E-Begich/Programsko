import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddRacun = ({navigate}) => {


    const [cijena, setCijena] = useState('');
    const [porez, setPorez] = useState('');
    const [ukupna_cijena, setUkupna_cijena] = useState('');
    const [id_ugovor, setId_ugovor] = useState('');

    const addRacunHandler = async ({useNavigate}) => {


      const data = {

        Cijena: cijena,
        Porez: porez,
        Ukupna_cijena: ukupna_cijena,
        Id_ugovor: id_ugovor,
    }

    await axios.post('/api/aplikacija/addRacun', data)

    navigate.push('/getAllRacun')

}

return (
  <>
      <Container className='mt-5 p-2'>
      <h1>Dodaj racun</h1>
      <hr />

    <Form>

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

      <Form.Group className="mb-3" controlId="id ugovor">
          <Form.Label>Id_ugovor</Form.Label>
          <Form.Control 
          value={id_ugovor}
          onChange={(e) => setId_ugovor(e.target.value)}
          type="number" />  
      </Form.Group>
       
      <Button variant="primary" type="potvrdi">
            Dodaj racun
            </Button>
        </Form>
      </Container>
      </>
    )
  }


export default AddRacun