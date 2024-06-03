import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router';
import { Container, Card, Row, Col } from "react-bootstrap";
import { toast } from 'react-toastify';
import Header2 from '../../components/Header2'

const KlijentZahtjev = () => {
    const { id } = useParams()

    const [userId, setUserId] = useState('');
  
    useEffect(() => {
      let userId = sessionStorage.getItem('userId');
      if (userId) {
        setUserId(userId)
      }
    }, []);

    const navigate = useNavigate();

    useEffect(() => {
      let email = sessionStorage.getItem('email');
      if (email === '' || email === null) {
        navigate('/');
      }
    }, []);

    //za preuzimanje podataka iz tablice Vozilo
    const [marka, setMarka] = useState('')
    const [model, setModel] = useState('')
    const [godina, setGodina] = useState('')
    const [radniObujam, setRadniObujam] = useState('')
    const [vrstaMotora, setVrstaMotora] = useState('')
    const [kilometri, setKilometri] = useState('')
    const [brojSjedala, setBrojSjedala] = useState('')
    const [cijenaDan, setCijenaDan] = useState('')
    const [fotografija, setFotografija] = useState('')

    //ovdje se uzimaju parametri iz forme a vezani su za id automobila i klijenta kako bi se poslao upit
    const [idVozilo, setIdVozilo] = useState('')
    const [idKlijent, setIdKlijent] = useState('')

    //za uzimanje podataka iz forme
    const [datumPocetka, setDatumPocetka] = useState('')
    const [datumZavrsetka, setDatumZavrsetka] = useState('')
    const [napomena, setNapomena] = useState('')

    useEffect(() => {

        const getOneVozilo = async () => {
            const { data } = await axios.get(`/api/aplikacija/getOneVozilo/${id}`)
            console.log(data)

            setMarka(data.Marka)
            setModel(data.Model)
            setGodina(data.Godina)
            setRadniObujam(data.Radni_obujam)
            setVrstaMotora(data.Vrsta_motora)
            setKilometri(data.Kilometri)
            setBrojSjedala(data.Broj_sjedala)
            setCijenaDan(data.Cijena_dan)
            setFotografija(data.Fotografija)
        }
        getOneVozilo()

    }, [id])

    const sendHandler = async (e) => {

        e.preventDefault()

        const data = {
            ID_klijenta: userId,
            ID_vozilo: id,
            Datum_pocetka: datumPocetka,
            Datum_zavrsetka: datumZavrsetka,
            Napomena: napomena,
          }

          await axios.post(`/api/aplikacija/addZahtjev`, data)
          toast.success('Zahtjev uspješno poslan!')
          setDatumPocetka("")
          setDatumZavrsetka("")
          setNapomena("")
    }
    return (
        <>
        <Header2/>
            <div className="container text-center d-grid gap-2 col-8 mx-auto py-3 m-5">
                <Container>
                    <Row>

                        <Col></Col>
                        <Col xs={6}>
                            <Card.Body>
                                <Card.Img src={`http://localhost:3000/${fotografija}`} fluid />
                                <Card.Text><b>Marka:</b> {marka} || <b>Model:</b> {model}</Card.Text>
                                <Card.Text><b>Godina:</b> {godina} || <b>Kilometri:</b> {kilometri} </Card.Text>
                                <Card.Text><b>Radni obujam:</b> {radniObujam} || <b>Vrsta motora:</b> {vrstaMotora} </Card.Text>
                                <Card.Text><b>Broj sjedala:</b> {brojSjedala} || <b>Cijena dan:</b> {cijenaDan}</Card.Text>
                            </Card.Body>
                            <br />
                            <br />
                            <br />
                            <br />
                            <form className="container" onSubmit={sendHandler}>
                                <h1 className="d-grid gap-2 col-6 mx-auto">Pošalji upit.</h1>
                                <hr />
                                <div className="form-group">
                                    <input type="hidden" className="form-control" disabled value={id}  onChange={(e) => setIdVozilo(e.target.value)}/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <input type="hidden" className="form-control" disabled value={userId}  onChange={(e) => setIdKlijent(e.target.value)}/>
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Datum početka: <span className="errmsg">*</span></label>
                                    <input type="date" className="form-control" value={datumPocetka} onChange={(e)=> setDatumPocetka(e.target.value)} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Datum završetka: <span className="errmsg">*</span></label>
                                    <input type="date" className="form-control" value={datumZavrsetka} onChange={(e)=> setDatumZavrsetka(e.target.value)} />
                                </div>
                                <br />
                                <div className="form-group">
                                    <label>Napomena: <span className="errmsg">*</span></label>
                                    <input type="text" className="form-control" value={napomena} onChange={(e)=> setNapomena(e.target.value)}/>
                                </div>
                                <br />
                                <div className="d-grid gap-2 col-6 mx-auto">
                                    <button type="submit" className="btn btn-outline-dark ms-2">Pošalji upit</button>
                                </div>
                            </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>

            </div>
        </>
    )
}

export default KlijentZahtjev