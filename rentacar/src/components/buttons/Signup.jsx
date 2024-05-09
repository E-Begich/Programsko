import React from 'react';
import { NavLink } from 'react-router-dom';

export const Signup = () => {
  return (
    <>
    <NavLink to={`/registracija`} className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#loginModal"> Registracija</NavLink>
    </>
  )
}
