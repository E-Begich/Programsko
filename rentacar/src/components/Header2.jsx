import React, { useState, useEffect } from 'react';
import { NavLink, useParams} from 'react-router-dom';

const Header2 = () => {
    const { id } = useParams()



  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid py-3">
        <NavLink className="navbar-brand fw-bold fs-4" to="/pocetna">Rent A Car</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <NavLink className="nav-link fw-bold" aria-current="page" to="/pocetna">Početna</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link fw-bold" to="/vozila">Vozila</NavLink>
                </li>
            </ul>
            <NavLink to={`/klijentPocetna/${id}`} className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#loginModal"> Profil</NavLink>
            <NavLink to={`/`} className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#loginModal"> Odjava</NavLink>

        </div>
    </div>
</nav>
  )
}

export default Header2