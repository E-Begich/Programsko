import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container, Card, Row, Col } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";
import { toast } from "react-toastify";
import HeaderAdmin from "../../components/HeaderAdmin";

const AddKorisnik = () => {
    const { id } = useParams()

  const [ime, setIme] = useState('')
  const [prezime, setPrezime] = useState('')
  const [adresa, setAdresa] = useState('')
  const [post_broj, setPost_broj] = useState('')
  const [mjesto, setMjesto] = useState('')
  const [OIB, setOib] = useState('')
  const [br_iskaznice, setBr_iskaznice] = useState('')
  const [mjesto_izdavanja, setMjesto_izdavanja] = useState('')
  const [kontakt, setKontakt] = useState('')
  const [email, setEmail] = useState('')
  const [scan_vozacke, setScan_vozacke] = useState('')
  const [scan_osobne, setScan_osobne] = useState('')

  const addKorisnikHandler = async () => {


    const data = {

        Ime: ime,
        Prezime: prezime,
        Adresa: adresa,
        Post_broj: post_broj,
        Mjesto: mjesto,
        OIB: OIB,
        Br_iskaznice: br_iskaznice,
        Mjesto_izdavanja: mjesto_izdavanja,
        Kontakt: kontakt,
        Email: email,
        Scan_vozacke: scan_vozacke,
        Scan_osobne: scan_osobne,
        published: true
    }

    await axios.post('/api/aplikacija/addKorisnik', data)
    toast.success('Korisnik je uspješno dodan u bazu!')

}

return (
    <>
        <HeaderAdmin />
        <Container className='mt-5 p-2'>
            <h1>Dodaj korisnika</h1>
            <hr />

            <Form>

                <form className="container" onSubmit={addKorisnikHandler} />

                <Form.Group className="mb-3" controlId="ime">
                    <Form.Label>Ime</Form.Label>
                    <Form.Control
                        value={ime}
                        onChange={(e) => setIme(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="prezime">
                    <Form.Label>Prezime</Form.Label>
                    <Form.Control
                        value={prezime}
                        onChange={(e) => setPrezime(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="adresa">
                    <Form.Label>Adresa</Form.Label>
                    <Form.Control
                        value={adresa}
                        onChange={(e) => setAdresa(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="post broj">
                    <Form.Label>Poštanski broj</Form.Label>
                    <Form.Control
                        value={post_broj}
                        onChange={(e) => setPost_broj(e.target.value)}
                        type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mjesto">
                    <Form.Label>Mjesto</Form.Label>
                    <Form.Control
                        value={mjesto}
                        onChange={(e) => setMjesto(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="OIB">
                    <Form.Label>OIB</Form.Label>
                    <Form.Control
                        value={OIB}
                        onChange={(e) => setOib(e.target.value)}
                        type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="broj iskaznice">
                    <Form.Label>Broj iskaznice</Form.Label>
                    <Form.Control
                        value={br_iskaznice}
                        onChange={(e) => setBr_iskaznice(e.target.value)}
                        type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="mjesto izdavanja">
                    <Form.Label>Mjesto izdavanja</Form.Label>
                    <Form.Control
                        value={mjesto_izdavanja}
                        onChange={(e) => setMjesto_izdavanja(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="kontakt">
                    <Form.Label>Kontakt</Form.Label>
                    <Form.Control
                        value={kontakt}
                        onChange={(e) => setKontakt(e.target.value)}
                        type="number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="scan vozacke">
                    <Form.Label>Scan vozačke</Form.Label>
                    <Form.Control
                        value={scan_vozacke}
                        onChange={(e) => setScan_vozacke(e.target.value)}
                        type="file" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="scan osobne">
                    <Form.Label>Scan osobne</Form.Label>
                    <Form.Control
                        value={scan_osobne}
                        onChange={(e) => setScan_osobne(e.target.value)}
                        type="file" />
                </Form.Group>

                <div className="d-grid gap-2 col-6 mx-auto">
                    <button type="submit" className="btn btn-outline-dark ms-2" id="button-test">Dodaj korisnika</button>
                    <Link to={`/adminpocetna/${id}`} className="btn btn-outline-dark ms-2">Vrati se na početnu</Link>

                </div>

            </Form>
        </Container>
    </>
)
}
export default AddKorisnik