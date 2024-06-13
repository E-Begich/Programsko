import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router';
import { Container, Row, Col, Card, CardText } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import HeaderAdmin from "../../components/HeaderAdmin";
import "./../../App.css";



const AdminPocetna = () => {
    const { id } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        let userId = sessionStorage.getItem('userId');
        if (userId && userId !== '') {
            navigate(`/adminpocetna/${userId}`);
        }
    }, []);

    const [vozila, setVozila] = useState([])

    useEffect(() => {
        const getVoziloData = async () => {
            const { data } = await axios.get('/api/aplikacija/getAllVozilo')
            //za testiranje, da li se ispisuju ispravo podaci iz baze
            console.log(data)
            //spremanje ispisa vozila iz baze pomoću setVozilo
            setVozila(data)
        }
        getVoziloData();
    }, []);

    return (
        <div>
            <HeaderAdmin />
            <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
                <div className="row">
                    <div className="col"></div>
                    <div className="col">
                        <h1>Popis automobila</h1>
                    </div>
                    <div className="col">
                        <NavLink className="nav-link">
                            <Link to={`/addvozilo`} className="btn btn-outline-dark btn-lg">Dodaj novo vozilo</Link>
                        </NavLink>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <nav className="nav flex-column">
                            <NavLink className="nav-link">
                                <Link to={`/showzahtjeva`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
                            </NavLink>
                            <br/>
                            <br/>
                            <NavLink className="nav-link">
                                <Link to={`/addkorisnik`} className="btn btn-outline-dark btn-lg">Dodaj novog klijenta</Link>
                            </NavLink>
                            <br/>
                            <br/>
                            <NavLink className="nav-link">
                                <Link to={`/addugovor`} className="btn btn-outline-dark btn-lg">Izradi novi ugovor</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/showugovor`} className="btn btn-outline-dark btn-lg">Pregledaj sve ugovore</Link>
                            </NavLink>
                            <br/>
                            <br/>
                            <NavLink className="nav-link">
                                <Link to={`/addpracenje`} className="btn btn-outline-dark btn-lg">Dodaj praćenje automobila</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/showpracenje`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
                            </NavLink>
                            <br/>
                            <br/>
                            <NavLink className="nav-link">
                                <Link to={`/addracun`} className="btn btn-outline-dark btn-lg">Izradi račun</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/showracuni`} className="btn btn-outline-dark btn-lg">Pregled svih računa</Link>
                            </NavLink>
                        </nav>
                    </div>
                    <div className="col-8">
                                    {vozila.length > 0 ? (
                                        vozila.map(Vozilo => {
                                            return <Col  key={Vozilo.id}>
                                                <div class="container mt-5">
                                                    <div class="card custom-card">
                                                        <div class="custom-card-text">
                                                            <CardText><img src={Vozilo.Fotografija} alt="" /></CardText>
                                                            <Card.Text><b>Marka:</b> {Vozilo.Marka} || Model: {Vozilo.Model}</Card.Text>
                                                        </div>
                                                        <div class="card-buttons">
                                                            <NavLink className="nav-link">
                                                                <Link to={`/editvozilo/${id}`} className="btn btn-outline-dark btn-lg">Uredi vozilo</Link>
                                                            </NavLink>
                                                            <br />
                                                            <NavLink className="nav-link">
                                                                <Link to={`/`} className="btn btn-outline-dark btn-lg">Obriši vozilo</Link>
                                                            </NavLink>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                        })

                                    ) : (
                                        <p> Nema unesenih vozila!</p>)}

                                </div>
                            </div>
                        </div>
                    </div>


    )
}

export default AdminPocetna
