import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const ShowVozila = () => {
  const { id } = useParams()

    const [marka, setMarka] = useState('');
    const [model, setModel] = useState('');
    const [godina, setGodina] = useState('');
    const [radni_obujam, setRadni_obujam] = useState('');
    const [vrsta_motora, setVrsta_motora] = useState('');
    const [kilometri, setKilometri] = useState('');
    const [broj_sjedala, setBroj_sjedala] = useState('');
    const [cijena_dan, setCijena_dan] = useState('');
    const [fotografija, setFotografija] = useState('');

  useEffect(() => {

    const getAllVozilo = async () => {
      const { data } = await axios.get(`/api/aplikacija/getAllVozilo/${id}`)
      console.log(data)


      setMarka(data.Marka)
      setModel(data.Model)
      setGodina(data.Godina)
      setRadni_obujam(data.Radni_obujam)
      setVrsta_motora(data.Vrsta_motora)
      setKilometri(data.Kilometri)
      setBroj_sjedala(data.Broj_sjedala)
      setCijena_dan(data.Cijena_dan)
      setFotografija(data.Fotografija)

    }
    getAllVozilo()

  }, [id])


  return (
    <div>
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
                <Col md={8} lg={8} sm={8}>
                  <Card className=' m-3 p-2 rounded card text-left'>
                    <Card.Body>
                      <Card.Text>
                        Marka: {marka}
                      </Card.Text>
                      <Card.Text>
                        Model: {model}
                      </Card.Text>
                      <Card.Text>
                        Godina: {godina}
                      </Card.Text>
                      <Card.Text>
                        Radni obujam: {radni_obujam}
                      </Card.Text>
                      <Card.Text>
                        Vrsta motora: {vrsta_motora}
                      </Card.Text>
                      <Card.Text>
                        Kilometri: {kilometri}
                      </Card.Text>
                      <Card.Text>
                        Broj sjedala: {broj_sjedala}
                      </Card.Text>
                      <Card.Text>
                        Cijena dan: {cijena_dan}
                      </Card.Text>
                      <Card.Text>
                        Fotografija: {fotografija}
                      </Card.Text>
                      <br />
                    </Card.Body>
                  </Card>
                </Col>
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