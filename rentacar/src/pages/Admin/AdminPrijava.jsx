import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header"


const AdminPrijava = () => {
    const navigate = useNavigate()
 //ovdje se preuzimaju podaci iz forme a to su email i lozinka
    const [sifraZaposlenika, setSifraZaposlenika] = useState('');
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
            fetch("/api/aplikacija/getZaposlenikSifra/" + sifraZaposlenika).then((res) => {
                return res.json();

                }).then((resp)=>{
                   // console.log(resp);
                    if(Object.keys(resp).length === 0) {
                        toast.error('Molimo unesite ispravnu šifru');
                    }else {
                        if(resp.Lozinka === lozinka){
                            toast.success('Uspješna prijava!')
                            sessionStorage.setItem('sifra', sifraZaposlenika)
                            sessionStorage.setItem('userId', resp.id);
                            console.log(resp.id)
                            navigate(`/adminpocetna/${resp.id}`)
                        }else {
                            toast.error('Lozinka nije ispravna');
                        }
                    }
                }).catch((err)=>{
                    toast.error('Ovaj zaposlenik ne postoji u tvrtci');
                });
            
            } 
        
    }

    //provjerava jesu li polja za upis korisnickog imena i lozinke prazna ili ne
    const validate = () => {
        let result = true;

        if (sifraZaposlenika === '' || sifraZaposlenika === null) {
            result = false;
            toast.warning('Unesi šifru')
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
                        <label>Šifra zaposlenika: <span className="errmsg">*</span> </label>
                        <input value={sifraZaposlenika} onChange={e => setSifraZaposlenika(e.target.value)} className="form-control" />
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
                    </div>
                </form>
            </div>



        </>
    )
}
export default AdminPrijava;