import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div className="container">
  <footer className="py-2 my-5">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/">Početna</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/Vozila">Vozila</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/Onama">O nama</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link px-2 text-muted" to="/adminPrijava">Zaposlenik </NavLink></li>
    </ul>
    <p className="text-center text-muted">copyright @  2024 made by DariaiEmina</p>
  </footer>
</div></>
  )
}

export default Footer;