import React from 'react';
import { NavLink } from 'react-router-dom';

const VoziloCard = ( { Vozilo }) => {
  return (
    <>
        <div className="card my-5 py-4" key={Vozilo.ID_vozilo} style={{width: "18rem"}}>
                <div className="card-body text-center">
                    <h5 className="card-title">{Vozilo.Marka} {Vozilo.Model}</h5>
                    <p className="lead">Cijena po danu: {Vozilo.Cijena_dan}€</p>
                    <NavLink to={`/getOneVozilo/${Vozilo.ID_vozilo}`} className="btn btn-outline-dark"><span className="fa-regular fa-magnifying-glass " ></span>Pogledaj vozilo</NavLink>
                </div>
</div>
    </>
  )
}

export default VoziloCard