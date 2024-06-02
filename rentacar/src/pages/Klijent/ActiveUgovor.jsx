import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'
import Header2 from '../../components/Header2'

const ActiveUgovor = () => {
    const { id } = useParams()

    //podaci iz tablice Korisnik
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')

    //podaci ugovor
    const [ugovor, setUgovor] = useState([])
    //podaci vozilo
    const [vozila, setVozilo] = useState([])

    //podaci iz tablice vozilo
    const [model, setModel] = useState('')
    const [marka, setMarka] = useState('')

    useEffect(() => {

        const getKorisnikUgovor = async () => {
            const { data } = await axios.get(`/api/aplikacija/getKorisnikUgovor/${id}`)
            console.log(data)

            setIme(data.Ime)
            setPrezime(data.Prezime)

            // podaci iz tablice Zahtjev
            setUgovor(data.Ugovor) //ovdje ide naziv tablice u ovom slučaju Zahtjev
        }
        getKorisnikUgovor()

    }, [id])

    useEffect(() => {

        const getVoziloUgovor = async () => {
            const { data } = await axios.get(`/api/aplikacija/getVoziloUgovor/${id}`)
            console.log(data)

            setMarka(data.Marka)
            setModel(data.Model)

            // podaci iz tablice Zahtjev
            setVozilo(data.Vozilo) //ovdje ide naziv tablice u ovom slučaju Zahtjev
        }
        getVoziloUgovor()

    }, [id])

    return (
        <>
        <Header2/>
            <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Aktivni ugovori</h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <nav className="nav flex-column">
                            <NavLink className="nav-link">
                                <Link to={`/showZahtjevi/${id}`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/activeUgovor/${id}`} className="btn btn-outline-dark btn-lg active">Trenutni ugovor</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/klijentAllUgovori/${id}`} className="btn btn-outline-dark btn-lg">Svi ugovori</Link>
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="nav-link">
                                <Link to={`/klijentEdit/${id}`} className="btn btn-outline-dark btn-lg">Promijeni podatke</Link>
                            </NavLink>
                            <div className="nav-link">
                                <Link to={`/klijentEditLozinka/${id}`} className="btn btn-outline-dark btn-lg">Promijeni lozinku</Link>
                            </div>


                        </nav>
                    </div>
                    <div className="col-8">
                        <Container>
                            <Row>
                                <Card className=' m-3 p-2 rounded card text-left'>
                                    <Card.Body>
                                        {ugovor.length > 0  || ugovor.Status == 'U tijeku'? (
                                            ugovor.map(Ugovor => {
                                                //ovdje se preuzimaju ugovori iz gore napravljenog const [ugovor, setUgovor] = useState([])
                                                //zatim vozilo iz setVozilo(data.Vozilo) gdje je Vozilo naziv tablice
                                                //nakon toga uzimaju se polja iz tablice Vozilo a to su marka i model
                                                return <p key={Ugovor.id}>

                                                    <Card.Text><b>Ugovor broj:</b> {Ugovor.id} || <b>Ime:</b> {ime} || <b>Prezime:</b> {prezime} </Card.Text>
                                                    <Card.Text><b>Marka:</b> {marka} || <b>Model:</b> {model} </Card.Text>
                                                    <Card.Text><b>Status ugovora:</b> {Ugovor.Status} || <b>Ugovor završava:</b> {Ugovor.Datum_zavrsetka} </Card.Text>
                                                    <div className="nav-link">
                                                        <Link to={`/detailUgovor/${id}`} className="btn btn-outline-dark btn-lg">Pogledaj ugovor</Link>
                                                    </div>
                                                    <hr />
                                                    <hr />
                                                </p>
                                                
                                            })
                                        

                                        ) : (<p> Ovaj korisnik još uvijek nema ugovora!</p>)}

                                    </Card.Body>
                                </Card>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div />
            </div>
        </>
    )
}

export default ActiveUgovor