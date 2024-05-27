import React from 'react';
import { NavLink } from 'react-router-dom';

const VoziloCard = ( { Vozilo }) => {
  return (
    <>
        <div className="card my-5 py-4" key={Vozilo.id} style={{width: "18rem"}}>
          <img src={Vozilo.Fotografija} alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title">{Vozilo.Marka} {Vozilo.Model}</h5>
                    <p className="lead">Cijena po danu: {Vozilo.Cijena_dan}€</p>
                    <NavLink to={`/aboutVozilo/${Vozilo.id}`} className="btn btn-outline-dark"><span className="fa-regular fa-magnifying-glass " ></span>Pogledaj detalje o vozilu</NavLink>
                    <br />
                    <br />
                    <NavLink to={`/klijentZahtjev/${Vozilo.id}`} className="btn btn-outline-dark"><span className="fa-regular fa-magnifying-glass " ></span>Pošalji zahtjev</NavLink>
                </div>
</div>
    </>
  )
}

export default VoziloCard