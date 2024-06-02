import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header2 from '../../components/Header2'

const KlijentEditLozinka = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [lozinka, setLozinka] = useState(''); //ispis stare lozinke

  const [novaLozinka, setNovaLozinka] = useState(''); //unos nove lozinke

  const [potvrdaL, setPotvrdaL] = useState(''); //za provjeru točnosti




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
      Lozinka: novaLozinka,

    }
    if( novaLozinka === potvrdaL){

    await axios.put(`/api/aplikacija/updateKlijentPro/${id}`, data)

    toast.success('Lozinka korisnika je uspješno promijenjena!')
    navigate(`/klijentPocetna/${id}`)
    } else {
      toast.warning('Nove unesene lozinke se ne podudaraju!')
    }
   }
  return (
    <>
    <Header2/>
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
            <Container className='mt-2 p-3'>
              <Form onSubmit={updateHandlerEditLozinka}>
                <Form.Group className="mb-3" controlId="OldPass">
                  <Form.Control
                    value={lozinka}
                    onChange={(e) => setLozinka(e.target.value)}
                    disabled
                    type="hidden"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="NewPass">
                  <Form.Label>Unesi novu lozinku:</Form.Label>
                  <Form.Control
                    value={novaLozinka}
                    onChange={(e) => setNovaLozinka(e.target.value)}
                    type="password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="NewPass2">
                  <Form.Label>Ponovno unesi novu lozinku:</Form.Label>
                  <Form.Control
                    value={potvrdaL}
                    onChange={(e) => setPotvrdaL(e.target.value)}
                    type="password"
                  />
                </Form.Group>

                <Button variant="btn btn-outline-dark btn-lg" type="submit">
                  Promijeni lozinku
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

export default KlijentEditLozinka