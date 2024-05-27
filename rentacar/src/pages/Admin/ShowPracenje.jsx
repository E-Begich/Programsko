import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const ShowPracenje = () => {
  const { id } = useParams()

  const [pracenje, setPracenje] = useState([]); 

  useEffect(() => {

    const getAllPracenje = async () => {
      const { data } = await axios.get('/api/aplikacija/getAllPracenje')
      console.log(data)
      setPracenje(data)

    }
    getAllPracenje()

  }, []) 


  return (
    <div>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Popis pracenja</h1>
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
              <Link to={`/showZahtjevi/${id}`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
              <Link to={`/addUgovor/${id}`} className="btn btn-outline-dark btn-lg">Kreiraj ugovor</Link>
              </NavLink>
              <br />
              <br />

            </nav>
          </div>
          <div className="col-8">
            <Container>
              <Row>
                {pracenje.length > 0 ? ( 

                  pracenje.map(Pracenje => {
                    return <Col md={6} lg={4} sm={12} key={Pracenje.id}>
                      <Card.Text><b>Latitude:</b> {Pracenje.Latitude}</Card.Text> 
                      <Card.Text><b>Longitude:</b> {Pracenje.Longitude} </Card.Text>
                    </Col>


                  })
                ) : (
                  <p> Nema unesenih pracenja!</p>)}
                
                    
              </Row>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </div>
  )
}

export default ShowPracenje