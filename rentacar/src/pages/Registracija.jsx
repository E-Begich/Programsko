import React, { useState, useRef, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";


const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const MAIL_REGEX = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
const REGISTER_URL = '/api/aplikacija/addKlijentProfil';

function Registracija() {
    const userRef = useRef();
    const errRef = useRef();

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [adresa, setAdresa] = useState('');
    const [post_broj, setPost_broj] = useState('');
    const [mjesto, setMjesto] = useState('');
    const [kontakt, setKontakt] = useState('');

    const [email, setEmail] = useState('');
    const [validMail, setValidMail] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);

    const [kor_ime, setKor_ime] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [lozinka, setLozinka] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])
    //ovdje se provjerava ispravnost podataka za korisničko ime, email i lozinku
    useEffect(() => {
        setValidMail(MAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setValidName(USER_REGEX.test(kor_ime));
    }, [kor_ime])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(lozinka));
    }, [lozinka])

    useEffect(() => {
        setErrMsg('');
    }, [kor_ime, lozinka, email])

    const addKlijentProHandler = async () => {

        const v1 = USER_REGEX.test(kor_ime);
        const v2 = PWD_REGEX.test(lozinka);
        const v3 = MAIL_REGEX.test(email);

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
        if (!v1 || !v2 || !v3) {
            setErrMsg("Greška");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL, data,
                JSON.stringify({ data }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            //console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //briše polja nakon registracije
            //potrebno je ponovno popuniti polja sa novim podacima
            // setIme('');
            // setPrezime('');
            // setAdresa('');
            //setPost_broj('');
            // setMjesto('');
            //setKontakt('');
            // setEmail('');
            //  setKor_ime('');
            //  setLozinka('');

        } catch (err) {
            if (!err?.response) {
                setErrMsg('Server ne daje odgovor');
            } else if (err.response?.status === 409) {
                setErrMsg('Korisničko ime je zauzeto');
            } else {
                setErrMsg('Greška kod registracije')
            }
            errRef.current.focus();

        }


    }
    return (
        <>

            {success ? (
                <div className="d-grid gap-2 col-6 mx-auto">
                    <p>Uspješno si se registrirao/la!</p>
                    <Link to={`/prijava`} className="btn btn-primary ms-2">Prijavi se</Link>
                </div>
            ) : (
                <Container className="d-grid gap-2 col-6 mx-auto">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className="d-grid gap-2 col-6 mx-auto">Registracija</h1>
                    <hr />
                    <Form onSubmit={addKlijentProHandler}>

                        <Form.Group className="mb3" controlId="ime">
                            <Form.Label>Ime: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                ref={userRef}
                                value={ime}
                                onChange={(e) => setIme(e.target.value)}
                                required
                                type="text"
                            />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="prezime">
                            <Form.Label>Prezime: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={prezime}
                                onChange={(e) => setPrezime(e.target.value)}
                                required
                                type="text" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="adresa">
                            <Form.Label>Adresa: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={adresa}
                                onChange={(e) => setAdresa(e.target.value)}
                                required
                                type="text" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="post_broj">
                            <Form.Label>Poštanski broj: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={post_broj}
                                onChange={(e) => setPost_broj(e.target.value)}
                                required
                                type="text" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="mjesto">
                            <Form.Label>Mjesto: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={mjesto}
                                onChange={(e) => setMjesto(e.target.value)}
                                required
                                type="text" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="kontakt">
                            <Form.Label>Kontakt: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={kontakt}
                                onChange={(e) => setKontakt(e.target.value)}
                                required
                                type="text" />
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="email">
                            <Form.Label>E-mail: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                type="text"
                                aria-invalid={validMail ? "false" : "true"}
                                aria-describedby="mailnote"
                                onFocus={() => setMailFocus(true)}
                                onBlur={() => setMailFocus(false)} />
                        </Form.Group>
                        <p id="mailnote" className={mailFocus && email && !validMail ? "instructions" : "offscreen"}>
                            Upiši ispravnu E-mail adresu: primjer@domena.nastavak
                        </p>
                        <br />
                        <Form.Group className="mb3" controlId="kor_ime">
                            <Form.Label>Željeno korisničko ime: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                autoComplete="off"
                                value={kor_ime}
                                onChange={(e) => setKor_ime(e.target.value)}
                                type="text"
                                required
                                aria-invalid={validName ? "false" : "true"}
                                aria-describedby="uidnote"
                                onFocus={() => setUserFocus(true)}
                                onBlur={() => setUserFocus(false)}
                            />
                            <p id="uidnote" className={userFocus && kor_ime && !validName ? "instructions" : "offscreen"}>
                                4 to 24 characters.<br />
                                Must begin with a letter.<br />
                                Letters, numbers, underscores, hyphens allowed.
                            </p>
                        </Form.Group>
                        <br />
                        <Form.Group className="mb3" controlId="lozinka">
                            <Form.Label>Lozinka: <span className="errmsg">*</span></Form.Label>
                            <Form.Control
                                autoComplete="off"
                                value={lozinka}
                                onChange={(e) => setLozinka(e.target.value)}
                                type="password"
                                required
                                aria-invalid={validPwd ? "false" : "true"}
                                aria-describedby="pwdnote"
                                onFocus={() => setPwdFocus(true)}
                                onBlur={() => setPwdFocus(false)}
                            />
                        </Form.Group>
                        <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br />
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>
                        <br />
                        <div className="d-grid gap-2 col-6 mx-auto">
                            <Button variant="btn btn-outline-dark ms-2" type="submit" disabled={!validName || !validPwd ? true : false}>
                                Registriraj se
                            </Button>
                            <Link to={`/prijava`} className="btn btn-primary ms-2">Već imaš račun? Prijavi se ovdje</Link>
                        </div>
                    </Form>
                </Container>
            )}
        </>
    )
}
export default Registracija;