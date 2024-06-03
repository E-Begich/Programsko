import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { Container, Form, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import HeaderAdmin from "../../components/HeaderAdmin";

const AddZahtjev= () => {

    
    const [datum_pocetka, setDatum_pocetka] = useState('');
    const [datum_zavrsetka, setDatum_zavrsetka] = useState('');
    const [napomena, setNapomena] = useState('');
    const [id_klijenta, setId_klijenta] = useState('');
    const [id_vozilo, setId_vozilo] = useState('');

    const addZahtjevHandler = async () => {


    const data = {

        Datum_pocetka: datum_pocetka,
        Datum_zavrsetka: datum_zavrsetka,
        Napomena: napomena,
        Id_klijenta: id_klijenta,
        Id_vozilo: id_vozilo,
    }

    await axios.post('/api/aplikacija/addZahtjev', data)

   
}

return (
  <>
  <HeaderAdmin/>
      <Container className='mt-5 p-2'>
      <h1>Dodaj zahtjev</h1>
      <hr />

    <Form>

    <form className="container" onSubmit={addZahtjevHandler}/>


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

      <Form.Group className="mb-3" controlId="napomena">
          <Form.Label>Napomena</Form.Label>
          <Form.Control 
          value={napomena}
          onChange={(e) => setNapomena(e.target.value)}
          type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id klijenta">
          <Form.Label>Id_klijenta </Form.Label>
          <Form.Control 
          value={id_klijenta}
          onChange={(e) => setId_klijenta(e.target.value)}
          type="number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="id vozilo">
          <Form.Label>Id_vozilo</Form.Label>
          <Form.Control 
          value={id_vozilo}
          onChange={(e) => setId_vozilo(e.target.value)}
          type="number" />
      </Form.Group>


      <Button variant="primary" type="potvrdi">
            Dodaj zahtjev
            </Button>
        </Form>
      </Container>
      </>
    )
  }
  export default AddZahtjev