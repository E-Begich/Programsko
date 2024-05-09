import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap"
import VoziloCard from "../components/VoziloCard";

function Vozila(){

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


    return(
        <>
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
                return <Col key={Vozilo.ID_vozilo}>
                <VoziloCard Vozilo={Vozilo}/>
                </Col>
              })
            }
            </Row>
    </div>
    </div>

        </Container>
      </>
    )
}
export default Vozila;