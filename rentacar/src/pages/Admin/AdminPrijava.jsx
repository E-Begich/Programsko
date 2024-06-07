import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header"


const AdminPrijava = () => {
    const navigate = useNavigate()
    //ovdje se preuzimaju podaci iz forme a to su email i lozinka
    const [sifraZaposlenika, setSifraZaposlenika] = useState('');
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
            fetch("/api/aplikacija/getZaposlenikSifra/" + sifraZaposlenika).then((res) => {
                return res.json();

            }).then((resp) => {
                // console.log(resp);
                if (Object.keys(resp).length === 0) {
                    toast.error('Molimo unesite ispravnu šifru');
                } else {
                    if (resp.Lozinka === lozinka) {
                        toast.success('Uspješna prijava!')
                        sessionStorage.setItem('sifra', sifraZaposlenika)
                        sessionStorage.setItem('userId', resp.id);
                        console.log(resp.id)
                        navigate(`/adminpocetna/${resp.id}`)
                    } else {
                        toast.error('Lozinka nije ispravna');
                    }
                }
            }).catch((err) => {
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
            <Header />
            <br />
            <br />
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card cascading-right bg-body-tertiary">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Prijavi se</h2>
                                    <form onSubmit={handleLogin}>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <div className="form-group">
                                                <label>Šifra zaposlenika: <span className="errmsg">*</span> </label>
                                                <input value={sifraZaposlenika} onChange={e => setSifraZaposlenika(e.target.value)} className="form-control" />
                                            </div>
                                        </div>
                                        <div data-mdb-input-init className="form-outline mb-4">
                                            <div className="form-group">
                                                <label>Lozinka: <span className="errmsg">*</span> </label>
                                                <input type="password" value={lozinka} onChange={e => setLozinka(e.target.value)} className="form-control" autoComplete="on" />
                                            </div>
                                        </div>
                                        <div className="d-grid gap-2 col-6 mx-auto">
                                            <button className="btn btn-outline-dark ms-2" type="submit">
                                                Prijavi se
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="https://images.pexels.com/photos/5673502/pexels-photo-5673502.jpeg" className="w-100 rounded-4 shadow-4" alt="" />
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}
export default AdminPrijava;