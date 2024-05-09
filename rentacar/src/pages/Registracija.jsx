import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";

const Registracija = () => {
    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [adresa, setAdresa] = useState('');
    const [post_broj, setPost_broj] = useState('');
    const [mjesto, setMjesto] = useState('');
    const [kontakt, setKontakt] = useState('');
    const [email, setEmail] = useState('');
    const [kor_ime, setKor_ime] = useState('');
    const [lozinka, setLozinka] = useState('');

    const addKlijentProHandler = async () => {
        const data = {
            ime: ime,
            prezime: prezime,
            adresa: adresa,
            post_broj: post_broj,
            mjesto: mjesto,
            kontakt: kontakt,
            email: email,
            kor_ime: kor_ime,
            lozinka: lozinka
        }
        await axios.post('/api/aplikacija/addKlijentProfil', data)
    }

    return (
        <>
            <Container className="d-grid gap-2 col-6 mx-auto">
                <h1 className="d-grid gap-2 col-6 mx-auto">Registracija</h1>
                <hr />

                <Form onSubmit={addKlijentProHandler}>
                    <Form.Group className="mb3" controlId="ime">
                        <Form.Label>Ime: </Form.Label>
                        <Form.Control
                            value={ime}
                            onChange={(e) => setIme(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="prezime">
                        <Form.Label>Prezime: </Form.Label>
                        <Form.Control
                            value={prezime}
                            onChange={(e) => setPrezime(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="adresa">
                        <Form.Label>Adresa: </Form.Label>
                        <Form.Control
                            value={adresa}
                            onChange={(e) => setAdresa(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="post_broj">
                        <Form.Label>Poštanski broj: </Form.Label>
                        <Form.Control
                            value={post_broj}
                            onChange={(e) => setPost_broj(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="mjesto">
                        <Form.Label>Mjesto: </Form.Label>
                        <Form.Control
                            value={mjesto}
                            onChange={(e) => setMjesto(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="kontakt">
                        <Form.Label>Kontakt: </Form.Label>
                        <Form.Control
                            value={kontakt}
                            onChange={(e) => setKontakt(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="email">
                        <Form.Label>E-mail: </Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="kor_ime">
                        <Form.Label>Željeno korisničko ime: </Form.Label>
                        <Form.Control
                            value={kor_ime}
                            onChange={(e) => setKor_ime(e.target.value)}
                            type="text " />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="lozinka">
                        <Form.Label>Lozinka: </Form.Label>
                        <Form.Control
                            value={lozinka}
                            onChange={(e) => setLozinka(e.target.value)}
                            type="password" />
                    </Form.Group>
                    <br/>
                    <div class="d-grid gap-2 col-6 mx-auto">
                    <Button variant="btn btn-primary" type="submit">
                        Registriraj se
                    </Button>
                    </div>
                </Form>
            </Container>


        </>
    )
}
export default Registracija;