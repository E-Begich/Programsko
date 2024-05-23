import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';

const KorisnikEditLozinka = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [lozinka, setLozinka] = useState('')

  useEffect(() => {
    //preuzimanje podataka
      const getOneKlijentPro = async () => {
        const { data } = await axios.get(`/api/aplikacija/getOneKlijentPro/${id}`)
        console.log(data)
  
        setLozinka(data.Lozinka)
  
      }
      getOneKlijentPro()
  
    }, [id])

    const updateHandlerEditLozinka = async (e) => {

      e.preventDefault()
     
      // ažuriranje podataka
      //prvo ide naziv atributa iz tablice u bazi a zatim naziv ovdje u formi

      const data = {
          Lozinka: lozinka,

      }

      await axios.put(`/api/aplikacija/updateKlijentPro/${id}`, data)

      navigate(`/KorisnikPocetna/${id}`)

 }
  return (
    <>
    <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Promijeni lozinku</h1>
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
                                <Link to={`/ActiveUgovor/${id}`} className="btn btn-outline-dark btn-lg">Trenutni ugovor</Link>
                            </NavLink>
                            <NavLink className="nav-link">
                                <Link to={`/ActiveUgovor/${id}`} className="btn btn-outline-dark btn-lg">Prijašnji ugovori</Link>
                            </NavLink>
                            <br />
                            <br />
                            <NavLink className="nav-link">
                                <Link to={`/korisnikEdit/${id}`} className="btn btn-outline-dark btn-lg ">Promijeni podatke</Link>
                            </NavLink>
                            <a className="nav-link">
                                <Link to={`/korisnikEdit/${id}`} className="btn btn-outline-dark btn-lg active">Promijeni lozinku</Link>
                            </a>

                        </nav>
          </div>
          <div className="col-8">
          <Container className='mt-2 p-3'>
                <Form onSubmit={updateHandlerEditLozinka}>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Control
                            value={lozinka}
                            onChange={(e) => setLozinka(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Button variant="btn btn-outline-dark btn-lg" type="submit">
                        Uredi podatke
                    </Button>
                </Form>
            </Container>
          </div>
        </div>
        <div />
      </div>
    </>
  )
}

export default KorisnikEditLozinka