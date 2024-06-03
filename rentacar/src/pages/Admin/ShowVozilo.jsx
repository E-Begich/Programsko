import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import HeaderAdmin from "../../components/HeaderAdmin";

const ShowVozila = () => {
  const { id } = useParams()

  const [vozilo, setVozilo] = useState([]); 

  useEffect(() => {

    const getAllVozilo = async () => {
      const { data } = await axios.get('/api/aplikacija/getAllVozilo')
      console.log(data)
      setVozilo(data)

    }
    getAllVozilo()

  }) 


  return (
    <div>
      <HeaderAdmin/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Popis vozila</h1>
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
                {vozilo.length > 0 ? ( 

                  vozilo.map(Vozilo => {
                    return <Col md={6} lg={4} sm={12} key={Vozilo.id}>
                      <Card.Text><b>Model:</b> {Vozilo.Model}</Card.Text> 
                      <Card.Text><b>Marka:</b> {Vozilo.Marka} </Card.Text>
                      <Card.Text><b>Godina:</b> {Vozilo.Godina} </Card.Text>
                      <Card.Text><b>Radni_obujam:</b> {Vozilo.Radni_obujam} </Card.Text>
                      <Card.Text><b>Vrsta_motora:</b> {Vozilo.Vrsta_motora} </Card.Text>
                      <Card.Text><b>Kilometri:</b> {Vozilo.Kilometri} </Card.Text>
                      <Card.Text><b>Broj_sjedala:</b> {Vozilo.Broj_sjedala} </Card.Text>
                      <Card.Text><b>Cijena_dan:</b> {Vozilo.Cijena_dan} </Card.Text>
                      <Card.Text><b>Fotografija:</b> {Vozilo.Fotografija} </Card.Text>
                    </Col>


                  })
                ) : (
                  <p> Nema unesenih vozila!</p>)}
                
                    
              </Row>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default ShowVozila