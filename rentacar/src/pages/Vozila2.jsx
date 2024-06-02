import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import Header from '../components/Header';

const Vozila2 = () => {
    const [vozila, setVozila] = useState([])

    useEffect(() => {
      const getVoziloData = async () => {
        const {data} = await axios.get('/api/aplikacija/getAllVozilo')
        //za testiranje, da li se ispisuju ispravo podaci iz baze
        console.log(data)
        //spremanje ispisa vozila iz baze pomoću setVozilo
        setVozila(data)
      }
      getVoziloData();
    }, []);


  return (
    <div>
        <Header/>
        <Container>   
          <div className="container py-5">
      <div className="row">
        <div className="col-12 text-center">
          <h1>Dostupna vozila</h1>
          <hr />
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row justify-content-around">
            <Row>
            {
              vozila.map(Vozilo => {
                return <Col md={6} lg={4} sm={12} key={Vozilo.id}>
                        <div className="card my-5 py-4" key={Vozilo.id} style={{width: "18rem"}}>
          <img src={Vozilo.Fotografija} alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title">{Vozilo.Marka} {Vozilo.Model}</h5>
                    <p className="lead">Cijena po danu: {Vozilo.Cijena_dan}€</p>
                    <p className="lead"><b>Godina:</b> {Vozilo.Godina} </p>
                    <p className="lead"><b>Kilometri:</b> {Vozilo.Kilometri}</p>
                    <p className="lead"><b>Radni obujam:</b> {Vozilo.Radni_obujam}</p>
                    <p className="lead"><b>Vrsta motora:</b> {Vozilo.Vrsta_motora}</p>
                    <p className="lead"><b>Broj sjedala:</b> {Vozilo.Broj_sjedala}</p>
                </div>
</div>
                </Col>
              })
            }
            </Row>
    </div>
    </div>

        </Container>
    </div>
  );
 
}

export default Vozila2