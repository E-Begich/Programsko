import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const Onama = () => {
  return (
    <div>
      <Header/>
    <div className="container py-5 my-5">
      <div className="row">
        <div className="col-md-6">
          <h1 className='text-dark fw-bold mb-4'>O nama</h1>
          <p className="lead mb-4">
          Najam automobila u Hrvatskoj i preko 100 ostalih zemalja i područja. Bez obzira kakve su vaše želje i potrebe te na koliki period trebate teretno vozilo - tu smo za vas. Rent-a-car nudi usluge poslovnih najmova čije trajanje možete prilagoditi svojim potrebama. U potpunosti smo predani pružanju čistih i dobro održavanih vozila.
          </p>
          <NavLink to="/" className="btn btn-outline-dark px-3">Kontaktiraj nas</NavLink>
        </div>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={process.env.PUBLIC_URL+ "/images/Onama.jpg"}  alt="about us" height="600px" width="500px" />
        </div>
      </div>
    </div>
  </div>
  )
}

export default Onama;