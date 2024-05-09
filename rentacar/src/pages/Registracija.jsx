import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
//1. prvo se napravi forma za upis podataka koje želimo upisati u tablicu u bazi to je html
//2. zatim se kreira useState gdje ćemo napraviti naziv, setNaziv za svako polje iz kojeg uzimamo upisanu vrijendost
//3. kreiramo button koje ima u sebi submit
//4. u formu dodajemo <Form onSubmit={addKlijentProHandler}> kako bi nakon klika gumba se preuzeli podaci i ubacili u bazu
//5. kreiramo handler gdje je prvi naziv naziv tocnog polja u bazi drugi naziv polja tu u formi
//6. na kraju handlera dodajemo await axios.post('/api/aplikacija/addKlijentProfil', data), koji preuzima podatke iz polja i ubacuje u API koji smo mu zadali u routes
const AddKlijentProfil = () => {
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
            Ime: ime,
            Prezime: prezime,
            Adresa: adresa,
            Post_broj: post_broj,
            Mjesto: mjesto,
            Kontakt: kontakt,
            Email: email,
            Kor_ime: kor_ime,
            Lozinka: lozinka
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
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="prezime">
                        <Form.Label>Prezime: </Form.Label>
                        <Form.Control
                            value={prezime}
                            onChange={(e) => setPrezime(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="adresa">
                        <Form.Label>Adresa: </Form.Label>
                        <Form.Control
                            value={adresa}
                            onChange={(e) => setAdresa(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="post_broj">
                        <Form.Label>Poštanski broj: </Form.Label>
                        <Form.Control
                            value={post_broj}
                            onChange={(e) => setPost_broj(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="mjesto">
                        <Form.Label>Mjesto: </Form.Label>
                        <Form.Control
                            value={mjesto}
                            onChange={(e) => setMjesto(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="kontakt">
                        <Form.Label>Kontakt: </Form.Label>
                        <Form.Control
                            value={kontakt}
                            onChange={(e) => setKontakt(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="email">
                        <Form.Label>E-mail: </Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br/>
                    <Form.Group className="mb3" controlId="kor_ime">
                        <Form.Label>Željeno korisničko ime: </Form.Label>
                        <Form.Control
                            value={kor_ime}
                            onChange={(e) => setKor_ime(e.target.value)}
                            type="text" />
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
                    <div className="d-grid gap-2 col-6 mx-auto">
                    <Button variant="btn btn-primary" type="submit">
                        Registriraj se
                    </Button>
                    </div>
                </Form>
            </Container>


        </>
    )
}
export default AddKlijentProfil;