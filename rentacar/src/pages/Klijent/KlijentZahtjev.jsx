import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form, Card, Row, Col } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';

const KlijentZahtjev = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [marka, setMarka] = useState('')
    const [model, setModel] = useState('')
    const [godina, setGodina] = useState('')
    const [radniObujam, setRadniObujam] = useState('')
    const [vrstaMotora, setVrstaMotora] = useState('')
    const [kilometri, setKilometri] = useState('')
    const [brojSjedala, setBrojSjedala] = useState('')
    const [cijenaDan, setCijenaDan] = useState('')
    const [fotografija, setFotografija] = useState('')


    useEffect(() => {

        const getOneVozilo = async () => {
            const { data } = await axios.get(`/api/aplikacija/getOneVozilo/${id}`)
            console.log(data)

            setMarka(data.Marka)
            setModel(data.Model)
            setGodina(data.Godina)
            setRadniObujam(data.Radni_obujam)
            setVrstaMotora(data.Vrsta_motora)
            setKilometri(data.Kilometri)
            setBrojSjedala(data.Broj_sjedala)
            setCijenaDan(data.Cijena_dan)
            setFotografija(data.Fotografija)
        }
        getOneVozilo()

    }, [id])



    return (
        <>
            <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
                <Container>
                    <Row>

                        <Col></Col>
                        <Col xs={6}>
                            <Card.Body>
                                <Card.Img src={`http://localhost:3000/${fotografija}`} fluid />
                                <Card.Text><b>Marka:</b> {marka} || <b>Model:</b> {model}</Card.Text>
                                <Card.Text><b>Godina:</b> {godina} || <b>Kilometri:</b> {kilometri} </Card.Text>
                                <Card.Text><b>Radni obujam:</b> {radniObujam} || <b>Vrsta motora:</b> {vrstaMotora} </Card.Text>
                                <Card.Text><b>Broj sjedala:</b> {brojSjedala} || <b>Cijena dan:</b> {cijenaDan}</Card.Text>
                            </Card.Body>
                            <br />
                            <br />
                            <br />
                            <br />
                            <form className="container">
                                <h1 className="d-grid gap-2 col-6 mx-auto">Pošalji upit.</h1>
                                <hr />
                                <div className="form-group">
                                    <label>Id vozila: <span className="errmsg">*</span></label>
                                    <input type="text" className="form-control" disabled value={id}/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Id korisnika: <span className="errmsg">*</span></label>
                                    <input type="text" className="form-control" disabled value={id}/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Datum početka: <span className="errmsg">*</span></label>
                                    <input type="date" className="form-control" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Datum završetka: <span className="errmsg">*</span></label>
                                    <input type="date" className="form-control" />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Napomena: <span className="errmsg">*</span></label>
                                    <input type="text" className="form-control" />
                                </div>
                                <br />
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" className="btn btn-outline-dark ms-2">Pošalji upit</button>
                                </div>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default KlijentZahtjev