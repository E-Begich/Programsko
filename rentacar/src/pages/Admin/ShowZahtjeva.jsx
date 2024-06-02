import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const ShowZahtjeva = () => {
  const { id } = useParams()

  const [zahtjev, setZahtjev] = useState([]); 

  useEffect(() => {

    const getAllZahtjev = async () => {
      const { data } = await axios.get('/api/aplikacija/getAllZahtjev')
      console.log(data)
      setZahtjev(data)

    }
    getAllZahtjev()

  }, []) 


  return (
    <div>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Popis zahtjeva</h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
              <NavLink className="nav-link">
              <Link to={`/showVozilo/${id}`} className="btn btn-outline-dark btn-lg">Pregled vozila</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/addUgovor/${id}`} className="btn btn-outline-dark btn-lg">Kreiraj ugovor</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/addPracenje/${id}`} className="btn btn-outline-dark btn-lg">Praćenje automobila</Link>
              </NavLink>
              <br />
              <br />

            </nav>
          </div>
          <div className="col-8">
            <Container>
              <Row>
                {zahtjev.length > 0 ? ( 

                  zahtjev.map(Zahtjev => {
                    return <Col md={6} lg={4} sm={12} key={Zahtjev.id}>
                      <Card.Text><b>Datum_pocetka:</b> {Zahtjev.Datum_pocetka}</Card.Text> 
                      <Card.Text><b>Datum_zavrsetka:</b> {Zahtjev.Datum_zavrsetka} </Card.Text>
                      <Card.Text><b>Napomena:</b> {Zahtjev.Napomena} </Card.Text>
                      <Card.Text><b>Id_klijenta:</b> {Zahtjev.Id_klijenta} </Card.Text>
                      <Card.Text><b>Id_vozilo:</b> {Zahtjev.Id_vozilo} </Card.Text>
                    </Col>


                  })
                ) : (
                  <p> Nema unesenih zahtjeva!</p>)}
                
                    
              </Row>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default ShowZahtjeva