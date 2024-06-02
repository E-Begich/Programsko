import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from 'react-router';
import { Container, Button, Form } from "react-bootstrap";
import { Link, NavLink } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header2 from '../../components/Header2'

const KlijentEdit = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const [ime, setIme] = useState('')
  const [prezime, setPrezime] = useState('')
  const [adresa, setAdresa] = useState('')
  const [post_broj, setPost_broj] = useState('')
  const [mjesto, setMjesto] = useState('')
  const [kontakt, setKontakt] = useState('')
  const [email, setEmail] = useState('')
  const [kor_ime, setKor_ime] = useState('')

  useEffect(() => {
    //preuzimanje podataka
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

  const updateHandler = async (e) => {

    e.preventDefault()

    // ažuriranje podataka
    //prvo ide naziv atributa iz tablice u bazi a zatim naziv ovdje u formi

    const data = {
      Ime: ime,
      Prezime: prezime,
      Adresa: adresa,
      Post_broj: post_broj,
      Mjesto: mjesto,
      Kontakt: kontakt,
      Email: email,
      Kor_ime: kor_ime
    }

    await axios.put(`/api/aplikacija/updateKlijentPro/${id}`, data)

    toast.success('Podaci korisnika su uspješno promijenjeni!')
    navigate(`/klijentPocetna/${id}`)

  }
  return (
    <>
    <Header2/>
      <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
        <div className="row">
          <div className="col"></div>
          <div className="col">
            <h1>Promijeni podatke</h1>
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
                <Link to={`/klijentAllUgovori/${id}`} className="btn btn-outline-dark btn-lg">Svi ugovori</Link>
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
              <Form onSubmit={updateHandler}>
                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={prezime}
                    onChange={(e) => setPrezime(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={adresa}
                    onChange={(e) => setAdresa(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={post_broj}
                    onChange={(e) => setPost_broj(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={mjesto}
                    onChange={(e) => setMjesto(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={kontakt}
                    onChange={(e) => setKontakt(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="title">
                  <Form.Control
                    value={kor_ime}
                    onChange={(e) => setKor_ime(e.target.value)}
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

export default KlijentEdit