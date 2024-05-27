import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Container, Card, Row, Col } from "react-bootstrap";

const AboutVozilo = () => {
    const { id } = useParams()

    //za preuzimanje podataka iz tablice Vozilo
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
                                <NavLink to={`/klijentZahtjev/${id}`} className="btn btn-outline-dark"><span className="fa-regular fa-magnifying-glass " ></span>Pošalji zahtjev</NavLink>
                                <br />
                                <br />
                                <NavLink to={`/`} className="btn btn-outline-dark"><span className="fa-regular fa-magnifying-glass " ></span>Vrati se na početnu stranicu</NavLink>
                            </Card.Body>
                            <br />
                            <br />
                            <br />
                            <br />
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default AboutVozilo