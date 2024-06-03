import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HeaderAdmin from "../../components/HeaderAdmin";

const AddUgovor = () => {

    const [datum_pocetka, setDatum_pocetka] = useState('');
    const [datum_zavrsetka, setDatum_zavrsetka] = useState('');
    const [status, setStatus] = useState('');
    const [osiguranje, setOsiguranje] = useState('');
    const [napomena, setNapomena] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');
    const [id_korisnik, setId_korisnik] = useState('');
    const [id_zaposlenik, setId_zaposlenik] = useState('');

    const addUgovorHandler = async () => {

  const data = {

      Datum_pocetka: datum_pocetka,
      Datum_zavrsetka: datum_zavrsetka,
      Status: status,
      Osiguranje: osiguranje,
      Napomena: napomena,
      Id_vozilo: id_vozilo,
      Id_korisnik: id_korisnik,
      Id_zaposlenik: id_zaposlenik,
  }

    await axios.post('/api/aplikacija/addUgovor', data)

}

return (
      <>
      <HeaderAdmin/>
      <Container className='mt-5 p-2'>
      <h1>Dodaj ugovor</h1>
      <hr />

    <Form>

    <form className="container" onSubmit={addUgovorHandler}/>

      <Form.Group className="mb-3" controlId="datum pocetka">
          <Form.Label>Datum_pocetka</Form.Label>
          <Form.Control 
          value={datum_pocetka}
          onChange={(e) => setDatum_pocetka(e.target.value)}
          type="date" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="datum zavrsetka">
          <Form.Label>Datum_zavrsetka</Form.Label>
          <Form.Control
          value={datum_zavrsetka}
          onChange={(e) => setDatum_zavrsetka(e.target.value)}
          type="date" />
      </Form.Group>

      <Form.Group className="demo-radio-buttons-group-label" controlId="datum zavrsetka">
                        <Form.Label>Status:</Form.Label><br />
                        <input type="radio" checked={status === 'U tijeku'} onChange={e => setStatus(e.target.value)} name="status" value="U tijeku" className="app-check"></input>
                        <label>U tijeku</label>
                        <br />
                        <br />
                        <input type="radio" checked={status === 'Zavrsen'} onChange={e => setStatus(e.target.value)} name="status" value="Zavrsen" className="app-check"></input>
                        <label>Završen</label>
                        <br />
                        <br />
                    </Form.Group>

      <Form.Group className="mb-3" controlId="osiguranje">
          <Form.Label>Osiguranje</Form.Label>
          <Form.Control 
          value={osiguranje}
          onChange={(e) => setOsiguranje(e.target.value)}
          type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="napomena">
          <Form.Label>Napomena</Form.Label>
          <Form.Control 
          value={napomena}
          onChange={(e) => setNapomena(e.target.value)}
          type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id vozilo">
          <Form.Label>Id_vozilo</Form.Label>
          <Form.Control 
          value={id_vozilo}
          onChange={(e) => setId_vozilo(e.target.value)}
          type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id korisnik">
          <Form.Label>Id_korisnik</Form.Label>
          <Form.Control 
          value={id_korisnik}
          onChange={(e) => setId_korisnik(e.target.value)}
          type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id zaposlenik">
          <Form.Label>Id_zaposlenik</Form.Label>
          <Form.Control 
          value={id_zaposlenik}
          onChange={(e) => setId_zaposlenik(e.target.value)}
          type="number" />
      </Form.Group>


      <Button variant="primary" type="potvrdi">
            Dodaj ugovor
            </Button>
        </Form>
      </Container>
      </>
    )
  }
  export default AddUgovor