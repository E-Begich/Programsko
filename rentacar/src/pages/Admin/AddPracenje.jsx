import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPracenje = ({navigate}) => {

    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');
    const [id_ugovor, setId_ugovor] = useState('');


    const addVoziloHandler = async ({useNavigate}) => {
      

      const data = {
        Latitude: latitude,
        Longitude: longitude,
        Id_vozilo: id_vozilo,
        Id_ugovor: id_ugovor,
    }


    await axios.post('/api/aplikacija/addPracenje', data)

    navigate.push('/getAllPracenje')

  }

  return (
    <>
        <Container className='mt-5 p-2'>
        <h1>Dodaj pracenje</h1>
        <hr />

      <Form>
      

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

        <Form.Group className="mb-3" controlId="id vozilo">
            <Form.Label>Id_vozilo</Form.Label>
            <Form.Control 
            value={id_vozilo}
            onChange={(e) => setId_vozilo(e.target.value)}
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
            Dodaj pracenje
            </Button>
        </Form>
      </Container>
      </>
    )
  }
  export default AddPracenje

