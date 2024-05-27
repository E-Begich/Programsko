import React, { useEffect, useState } from 'react'
import { Card, Container, Row } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router'
import axios from 'axios'


const ShowZahtjevi = () => {

    const { id } = useParams()

    //podaci iz tablice Klijent_profil
    const [ime, setIme] = useState('')
    const [prezime, setPrezime] = useState('')
    const [kor_ime, setKor_ime] = useState('')

    //podaci iz tablice Zahtjev
    const [zahtjevi, setZahtjev] = useState([])

    //podaci iz tablice vozilo
    const [model, setModel] = useState('')
    const [marka, setMarka] = useState('')

    const [vozila, setVozilo] = useState([])

    useEffect(() => {

        const getProfilZahtjev = async () => {
            const { data } = await axios.get(`/api/aplikacija/getProfilZahtjev/${id}`)
            console.log(data)

            setIme(data.Ime)
            setPrezime(data.Prezime)
            setKor_ime(data.Kor_ime)

            // podaci iz tablice Zahtjev
            setZahtjev(data.Zahtjev) //ovdje ide naziv tablice u ovom slučaju Zahtjev
        }
        getProfilZahtjev()

    }, [id])

    //funkcija testVoziloZahtjev u voziloController gdje pretražuje id vozila (u tablici vozila) i id_vozila kao vanjski ključ u tablici zahtjev i ispisuje iste redove
    useEffect(() => {

        const testVoziloZahtjev = async () => {
            const { data } = await axios.get(`/api/aplikacija/testVoziloZahtjev/${id}`)
            console.log(data)

            setMarka(data.Marka)
            setModel(data.Model)

            // podaci iz tablice Zahtjev
            setVozilo(data.Vozilo) //ovdje ide naziv tablice u ovom slučaju Zahtjev
        }
        testVoziloZahtjev()

    }, [id])


    return (
        <>
            <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Svi zahtjevi</h1>
                    </div>
                    <div className="col">
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <nav className="nav flex-column">
                            <NavLink className="nav-link">
                                <Link to={`/showZahtjevi/${id}`} className="btn btn-outline-dark btn-lg active">Pregled zahtjeva</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/ActiveUgovor/${id}`} className="btn btn-outline-dark btn-lg">Trenutni ugovor</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/ActiveUgovor/${id}`} className="btn btn-outline-dark btn-lg">Prijašnji ugovori</Link>
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
                                    {zahtjevi.length > 0 ? (
                                    zahtjevi.map(Zahtjev => {
                                        //ovdje se preuzima zahtjevi iz gore napravljenog const [zahtjevi, setZahtjev] = useState([])
                                        //zatim Zahtjev iz setZahtjev(data.Zahtjev) gdje je Zahtjev naziv tablice
                                        //nakon toga uzimaju se polja iz tablice Zahtjev a to su Datum_pocetka, Datum_zavrsetka i Napomena
                                            return <p key={Zahtjev.id}>

                                                        <Card.Text><b>Ime:</b> {ime} || <b>Prezime:</b> {prezime} || <b>Korisničko ime:</b> {kor_ime}</Card.Text>
                                                        <Card.Text><b>Zahtjev broj:</b> {Zahtjev.id}</Card.Text>
                                                        <Card.Text><b>Datum početka:</b> {Zahtjev.Datum_pocetka} || <b>Datum završetka:</b> {Zahtjev.Datum_zavrsetka} </Card.Text>
                                                        <Card.Text><b>Napomena:</b> {Zahtjev.Napomena}</Card.Text>
                                                        <Card.Text><b>Marka:</b> {marka} || <b>Model:</b> {model}</Card.Text>
                                                        <hr/>
                                                        <hr/>
                                                        </p>         
                                    })
                                    
                                    
                                ) : (<p> Ovaj korisnik još uvijek nema zahtjeva!</p>)}

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

export default ShowZahtjevi