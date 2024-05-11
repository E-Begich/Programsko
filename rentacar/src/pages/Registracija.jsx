import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

function Registracija() {

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [adresa, setAdresa] = useState('');
    const [post_broj, setPost_broj] = useState('');
    const [mjesto, setMjesto] = useState('');
    const [kontakt, setKontakt] = useState('');
    const [email, setEmail] = useState('');
    const [kor_ime, setKor_ime] = useState('');
    const [lozinka, setLozinka] = useState('');

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let errormessage = 'Molimo da uneseš vrijednost';
        if (ime === null || ime === '') {
            isproceed = false;
            errormessage += ' Ime';
        }
        if (prezime === null || prezime === '') {
            isproceed = false;
            errormessage += ' Prezime';
        }
        if (adresa === null || adresa === '') {
            isproceed = false;
            errormessage += ' Adresa';
        }
        if (post_broj === null || post_broj === '') {
            isproceed = false;
            errormessage += ' Poštanski broj';
        }
        if (mjesto === null || mjesto === '') {
            isproceed = false;
            errormessage += ' Mjesto';
        }
        if (kontakt === null || kontakt === '') {
            isproceed = false;
            errormessage += ' Kontakt';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' E-mail';
        }
        if (lozinka === null || lozinka === '') {
            isproceed = false;
            errormessage += ' Lozinka';
        }

        if (!isproceed) {
            toast.warning(errormessage)
        } else {
            if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {

            } else {
                isproceed = false;
                toast.warning('Molimo unesite ispravnu e-mail adresu')
            }
        }
        return isproceed;

    }

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
        if (IsValidate()) {
        await axios.post('/api/aplikacija/addKlijentProfil', data, {
            method: "POST",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        }).then((res) => {
            toast.success('Registracija je uspješna.')
            navigate('/prijava');
        }).catch((err) => {
            toast.error('Registracija neuspješna :' + err.message);
        });

    }
}


    return (
        <>
            <Container className="d-grid gap-2 col-6 mx-auto">
                <h1 className="d-grid gap-2 col-6 mx-auto">Registracija</h1>
                <hr />

                <Form onSubmit={addKlijentProHandler}>

                    <Form.Group className="mb3" controlId="ime">
                        <Form.Label>Ime: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={ime}
                            onChange={(e) => setIme(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="prezime">
                        <Form.Label>Prezime: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={prezime}
                            onChange={(e) => setPrezime(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="adresa">
                        <Form.Label>Adresa: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={adresa}
                            onChange={(e) => setAdresa(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="post_broj">
                        <Form.Label>Poštanski broj: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={post_broj}
                            onChange={(e) => setPost_broj(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="mjesto">
                        <Form.Label>Mjesto: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={mjesto}
                            onChange={(e) => setMjesto(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="kontakt">
                        <Form.Label>Kontakt: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={kontakt}
                            onChange={(e) => setKontakt(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="email">
                        <Form.Label>E-mail: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="kor_ime">
                        <Form.Label>Željeno korisničko ime: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={kor_ime}
                            onChange={(e) => setKor_ime(e.target.value)}
                            type="text" />
                    </Form.Group>
                    <br />
                    <Form.Group className="mb3" controlId="lozinka">
                        <Form.Label>Lozinka: <span className="errmsg">*</span></Form.Label>
                        <Form.Control
                            value={lozinka}
                            onChange={(e) => setLozinka(e.target.value)}
                            type="password"
                        />
                    </Form.Group>
                    <br />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Button variant="btn btn-outline-dark ms-2" type="submit">
                            Registriraj se
                        </Button>
                        <Link to={`/prijava`} className="btn btn-primary ms-2">Već imaš račun? Prijavi se ovdje</Link>
                    </div>
                </Form>
            </Container>


        </>
    )
}
export default Registracija;