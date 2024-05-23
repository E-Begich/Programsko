import React, { useState, useRef, useEffect, useContext } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router';
import AuthContext from "../context/AuthProvider";

const LOGIN_URL = '/auth';

const  Prijava = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [kor_ime, setKor_ime] = useState('');
    const [lozinka, setLozinka] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [kor_ime, lozinka])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL, 
                JSON.stringify({ kor_ime, lozinka }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(JSON.stringify(response?.data));
            console.log(JSON.stringify(response));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ kor_ime, lozinka, roles, accessToken });
            setKor_ime('');
            setLozinka('');
            setSuccess(true);
        }

        catch (err) {
            if (!err?.response) {
                setErrMsg('nema odgovora od strane servera');
            } else if (err.response?.status === 400) {
                setErrMsg('Nedostaje lozinka ili korisničko ime');
            } else if (err.response?.status === 401) {
                setErrMsg('Neautorizirano');
            } else {
                setErrMsg('Greška kod prijave');
            }
            errRef.current.focus();
        }
    

}


return (
    <div>
                    {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="#">Go to Home</a>
                    </p>
                </section>
            ) : (
        <Container className="d-grid gap-2 col-6 mx-auto">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 className="d-grid gap-2 col-6 mx-auto">Prijava</h1>
            <hr />
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb3" controlId="kor_ime">
                    <Form.Label >Korisničko ime: <span className="errmsg">*</span></Form.Label>
                    <Form.Control
                        ref={userRef}
                        autoComplete="off"
                        value={kor_ime}
                        onChange={(e) => setKor_ime(e.target.value)}
                        type="text"
                        required
                    />
                </Form.Group>
                <br />
                <Form.Group className="mb3" controlId="lozinka">
                    <Form.Label>Lozinka: <span className="errmsg">*</span></Form.Label>
                    <Form.Control
                        value={lozinka}
                        autoComplete="off"
                        onChange={(e) => setLozinka(e.target.value)}
                        type="password"
                        required
                    />
                </Form.Group>
                <br />
                <div className="d-grid gap-2 col-6 mx-auto">
                    <Button variant="btn btn-outline-dark ms-2" type="submit">
                        Prijavi se
                    </Button>
                    <Link to={`/registracija`} className="btn btn-primary ms-2">Nemaš račun? Registriraj se ovdje</Link>
                </div>
            </Form>
        </Container>
            )}
    </div>
)
}
export default Prijava;