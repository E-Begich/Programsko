import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";
import './Stil.css';


const Prijava = () => {
    const navigate = useNavigate()
    //ovdje se preuzimaju podaci iz forme a to su email i lozinka
    const [email, setEmail] = useState('');
    const [lozinka, setLozinka] = useState('');


    useEffect(() => {
        sessionStorage.clear();
    }, []);

    //unutar fukcije poziva se api koji je napravljen za pretraživanje emailova unutar relacije klijent_profil
    //ovdje se događa to da funkcija preuzima podatke iz forme i uspoređuje ih sa podacima u relaciji 
    //i sukladno tome daje pristup ostatku aplikacije, ili ne
    async function handleLogin(e) {
        e.preventDefault();

        if (validate()) {
            fetch("/api/aplikacija/getKlijentEmail/" + email).then((res) => {
                return res.json();

            }).then((resp) => {
                // console.log(resp);
                if (Object.keys(resp).length === 0) {
                    toast.error('Molimo unesite ispravan e-mail');
                } else {
                    if (resp.Lozinka === lozinka) {
                        toast.success('Uspješna prijava!')
                        sessionStorage.setItem('email', email)
                        sessionStorage.setItem('userId', resp.id);
                        console.log(resp.id)
                        navigate("/pocetna")
                    } else {
                        toast.error('Lozinka nije ispravna');
                    }
                }
            }).catch((err) => {
                toast.error('Upisani korisnik još nije registriran');
            });

        }

    }
    //const ProceedLoginusingAPI = (e) => {
    //   e.preventDefault();
    //  if (validate()) {
    ///implentation
    // console.log('proceed');
    // let inputobj={"email": email,
    //  "lozinka": lozinka};
    //  fetch("/api/aplikacija/Authenticate",{
    //   method:'POST',
    //   headers:{'content-type':'application/json'},
    //   body:JSON.stringify(inputobj)
    // }).then((res) => {
    //     return res.json();
    //  }).then((resp) => {
    //      console.log(resp)
    //  if (Object.keys(resp).length === 0) {
    //     toast.error('Prijava neuspješna, pogršni podaci');
    //   }else{
    //      toast.success('Uspješna prijava');
    //      sessionStorage.setItem('email',email);
    //      sessionStorage.setItem('jwttoken',resp.jwtToken);
    //   usenavigate('/')
    // }
    // }).catch((err) => {
    //    toast.error('Pogreška pri prijavi :' + err.message);
    // });
    // }
    //}

    //provjerava jesu li polja za upis korisnickog imena i lozinke prazna ili ne
    const validate = () => {
        let result = true;

        if (email === '' || email === null) {
            result = false;
            toast.warning('Unesi e-mail adresu')
        }
        if (lozinka === '' || lozinka === null) {
            result = false;
            toast.warning('Unesi lozinku')
        }
        return result;
    }


    return (
        <>
            <Header />
            <section class="text-center text-lg-start">
                <div class="container py-4">
                    <div class="row g-0 align-items-center">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <div class="card cascading-right bg-body-tertiary">
                                <div class="card-body p-5 shadow-5 text-center">
                                    <h2 class="fw-bold mb-5">Prijavi se</h2>
                                    <form onSubmit={handleLogin}>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <div className="form-group">
                                                <label>E-mail: <span className="errmsg">*</span> </label>
                                                <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                                            </div>
                                        </div>
                                        <div data-mdb-input-init class="form-outline mb-4">
                                            <div className="form-group">
                                                <label>Lozinka: <span className="errmsg">*</span> </label>
                                                <input type="password" value={lozinka} onChange={e => setLozinka(e.target.value)} className="form-control" autoComplete="on" />
                                            </div>
                                        </div>
                                        <div className="d-grid gap-2 col-6 mx-auto">
                                            <button className="btn btn-outline-dark ms-2" type="submit">
                                                Prijavi se
                                            </button>
                                            <Link to={`/registracija`} className="btn btn-primary ms-2">Novi korisnik? Registriraj se ovdje</Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <img src="https://shorturl.at/GaefW" class="w-100 rounded-4 shadow-4" alt="" />
                        </div>
                    </div>
                </div>

            </section>



        </>
    )
}
export default Prijava;