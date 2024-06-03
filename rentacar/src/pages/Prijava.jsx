import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Header";


const Prijava = () => {
    const navigate = useNavigate()
 //ovdje se preuzimaju podaci iz forme a to su email i lozinka
    const [email, setEmail] = useState('');
    const [lozinka, setLozinka] = useState('');
    

    useEffect(()=>{
        sessionStorage.clear();
            },[]);

//unutar fukcije poziva se api koji je napravljen za pretraživanje emailova unutar relacije klijent_profil
//ovdje se događa to da funkcija preuzima podatke iz forme i uspoređuje ih sa podacima u relaciji 
//i sukladno tome daje pristup ostatku aplikacije, ili ne
    async function handleLogin (e) {
        e.preventDefault();

        if (validate()) {
            fetch("/api/aplikacija/getKlijentEmail/" + email).then((res) => {
                return res.json();

                }).then((resp)=>{
                   // console.log(resp);
                    if(Object.keys(resp).length === 0) {
                        toast.error('Molimo unesite ispravan e-mail');
                    }else {
                        if(resp.Lozinka === lozinka){
                            toast.success('Uspješna prijava!')
                            sessionStorage.setItem('email', email)
                            sessionStorage.setItem('userId', resp.id);
                            console.log(resp.id)
                            navigate("/pocetna")
                        }else {
                            toast.error('Lozinka nije ispravna');
                        }
                    }
                }).catch((err)=>{
                    toast.error('Upisani korisnik još nije registriran');
                });
            
            } 
        
    }

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
        <Header/>
            <div className="d-grid gap-2 col-6 mx-auto">
                <h1 className="d-grid gap-2 col-6 mx-auto">Prijava</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>E-mail: <span className="errmsg">*</span> </label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Lozinka: <span className="errmsg">*</span> </label>
                        <input type="password" value={lozinka} onChange={e => setLozinka(e.target.value)} className="form-control" autoComplete="on" />
                    </div>
                    <br />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button className="btn btn-outline-dark ms-2" type="submit">
                            Prijavi se
                        </button>
                        <Link to={`/registracija`} className="btn btn-primary ms-2">Novi korisnik? Registriraj se ovdje</Link>
                    </div>
                </form>
            </div>



        </>
    )
}
export default Prijava;