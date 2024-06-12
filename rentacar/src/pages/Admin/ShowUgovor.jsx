import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import HeaderAdmin from "../../components/HeaderAdmin";

const ShowUgovor = () => {
  const { id } = useParams()

  const [ugovor, setUgovor] = useState([]); 

  useEffect(() => {

    const getAllUgovor = async () => {
      const { data } = await axios.get('/api/aplikacija/getAllUgovor')
      console.log(data)
      setUgovor(data)

    }
    getAllUgovor()

  }) 


  return (
    <div>
      <HeaderAdmin/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Popis ugovora</h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
              <NavLink className="nav-link">
              <Link to={`/showVozilo/`} className="btn btn-outline-dark btn-lg">Pregled vozila</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/showZahtjevi/`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/showPracenje/`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
              </NavLink>
              <br />
              <br />

            </nav>
          </div>
          <div className="col-8">
            <Container>
              <Row>
                {ugovor.length > 0 ? ( 

                  ugovor.map(Ugovor => {
                    return <Col md={6} lg={4} sm={12} key={Ugovor.id}>
                      <Card.Text><b>Datum_pocetka:</b> {Ugovor.Datum_pocetka}</Card.Text> 
                      <Card.Text><b>Status:</b> {Ugovor.Datum_zavrsetka} </Card.Text>
                      <Card.Text><b>Osiguranje:</b> {Ugovor.Osiguranje} </Card.Text>
                      <Card.Text><b>Id_vozilo:</b> {Ugovor.Id_vozilo} </Card.Text>
                      <Card.Text><b>Id_korisnik:</b> {Ugovor.Id_korisnik} </Card.Text>
                      <Card.Text><b>Id_zaposlenik:</b> {Ugovor.Id_zaposlenik} </Card.Text>

                    </Col>


                  })
                ) : (
                  <p> Nema unesenih ugovora!</p>)}
                
                    
              </Row>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default ShowUgovor