import React from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <>
    <NavLink to={`/prijava`} className="btn btn-outline-dark ms-2" data-bs-toggle="modal" data-bs-target="#loginModal"> Prijava</NavLink>


 </>
  )
}

export default Login