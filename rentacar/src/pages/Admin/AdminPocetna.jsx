import React from 'react';
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
import HeaderAdmin from "../../components/HeaderAdmin";



const AdminPocetna = ( ) => {
    const navigate = useNavigate()
    
    useEffect(() => {
        let userId = sessionStorage.getItem('userId');
        if (userId && userId !== '') {
          navigate(`/adminpocetna/${userId}`);
        }
      }, []);
      // ovo href="/addugovor" u liniji koda 26 ti je iz datoteke App.js linija koda 66 tu si sama nazvala tako rutu
    return (
        <div>
            <HeaderAdmin/>
            <div className="container text-center border border-warning">
                <div className="row">
                    <div className="col-sm-4">
                    <a className="btn btn-primary" href="" role="button">Pregled zahtjeva</a>
                    <br/>
                    <a className="btn btn-primary" href="/addugovor" role="button">Kreiraj ugovor</a>
                    <br/>
                    <a className="btn btn-primary" href="#" role="button">Praćenje automobila</a>
                    </div>
                    <div className="col-sm-8">
                        <h1>Popis vozila</h1>
                        <p>tablica ispisa vozila</p>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default AdminPocetna



