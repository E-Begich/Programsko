import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router';
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import Header2 from '../../components/Header2'

const KlijentPocetna = () => {
  const { id } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    let userId = sessionStorage.getItem('userId');
    if (userId && userId !== '') {
      navigate(`/klijentPocetna/${userId}`);
    }
  }, []);

  const [ime, setIme] = useState('')
  const [prezime, setPrezime] = useState('')
  const [adresa, setAdresa] = useState('')
  const [post_broj, setPost_broj] = useState('')
  const [mjesto, setMjesto] = useState('')
  const [kontakt, setKontakt] = useState('')
  const [email, setEmail] = useState('')
  const [kor_ime, setKor_ime] = useState('')

  useEffect(() => {

    const getOneKlijentPro = async () => {
      const { data } = await axios.get(`/api/aplikacija/getOneKlijentPro/${id}`)
      console.log(data)

      setIme(data.Ime)
      setPrezime(data.Prezime)
      setAdresa(data.Adresa)
      setPost_broj(data.Post_broj)
      setMjesto(data.Mjesto)
      setKontakt(data.Kontakt)
      setEmail(data.Email)
      setKor_ime(data.Kor_ime)

    }
    getOneKlijentPro()

  }, [id])


  return (
    <div>
      <Header2/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Osobni podaci</h1>
          </div>
          <div className="col">
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <nav className="nav flex-column">
              <NavLink className="nav-link">
                <Link to={`/showZahtjevi/`} className="btn btn-outline-dark btn-lg">Pregled zahtjeva</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/ActiveUgovor/${id}`} className="btn btn-outline-dark btn-lg">Trenutni ugovor</Link>
              </NavLink>
              <NavLink className="nav-link">
                <Link to={`/klijentAllUgovori/${id}`} className="btn btn-outline-dark btn-lg">Prijašnji ugovori</Link>
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
                <Col md={8} lg={8} sm={8}>
                  <Card className=' m-3 p-2 rounded card text-left'>
                    <Card.Body>
                      <Card.Text>
                        Ime: {ime}
                      </Card.Text>
                      <Card.Text>
                        Prezime: {prezime}
                      </Card.Text>
                      <Card.Text>
                        Adresa: {adresa}
                      </Card.Text>
                      <Card.Text>
                        Poštanski broj: {post_broj}
                      </Card.Text>
                      <Card.Text>
                        Mjesto: {mjesto}
                      </Card.Text>
                      <Card.Text>
                        Kontakt: {kontakt}
                      </Card.Text>
                      <Card.Text>
                        Email: {email}
                      </Card.Text>
                      <Card.Text>
                        Korisničko ime: {kor_ime}
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

export default KlijentPocetna