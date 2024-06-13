import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import HeaderAdmin from "../../components/HeaderAdmin";

const ShowRacuni = () => {
  const { id } = useParams()

  const [racun, setRacun] = useState([]); 

  useEffect(() => {

    const getAllRacun = async () => {
      const { data } = await axios.get('/api/aplikacija/getAllRacun')
      console.log(data)
      setRacun(data)

    }
    getAllRacun()

  }, []);
 


  return (
    <div>
      <HeaderAdmin/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Popis računa</h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
              <NavLink className="nav-link">
              <Link to={`/showVozilo`} className="btn btn-outline-dark btn-lg">Pregled vozila</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/showZahtjevi`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/showUgovor`} className="btn btn-outline-dark btn-lg">Pregled ugovora</Link>
              </NavLink>
              <br />
              <br />

            </nav>
          </div>
          <div className="col-8">
            <Container>
              <Row>
                {racun.length > 0 ? ( 

                  racun.map(Racun => {
                    return <Col md={6} lg={4} sm={12} key={Racun.id}>
                      <Card.Text><b>Cijena:</b> {Racun.Cijena}</Card.Text> 
                      <Card.Text><b>Porez:</b> {Racun.Porez} </Card.Text>
                      <Card.Text><b>Ukupno:</b> {Racun.Ukupno} </Card.Text>

                    </Col>


                  })
                ) : (
                  <p> Nema unesenih računa!</p>)}
                
                    
              </Row>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default ShowRacuni