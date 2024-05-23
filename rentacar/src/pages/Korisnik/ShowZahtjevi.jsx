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
    const [vozila, setVozilo] = useState([])

    useEffect(() => {

        const getProfilZahtjev = async () => {
            const { data } = await axios.get(`/api/aplikacija/${id}`)
            console.log(data)

            setIme(data.Ime)
            setPrezime(data.Prezime)
            setKor_ime(data.Kor_ime)

            // podaci iz tablice Zahtjev
            setZahtjev(data.Zahtjev) //ovdje ide naziv tablice u ovom slučaju Zahtjev

            //podaci iz tablice Vozilo
            setVozilo(data.Vozilo)

        }
        getProfilZahtjev()

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
                                <Link to={`/korisnikEdit/${id}`} className="btn btn-outline-dark btn-lg">Promijeni podatke</Link>
                            </NavLink>
                            <a className="nav-link">
                                <Link to={`/korisnikEdit/${id}`} className="btn btn-outline-dark btn-lg">Promijeni lozinku</Link>
                            </a>

                        </nav>
                    </div>
                    <div className="col-8">
                        <Container>
                            <Row>
                            <Card className=' m-3 p-2 rounded card text-left'>
                            <Card.Body>


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