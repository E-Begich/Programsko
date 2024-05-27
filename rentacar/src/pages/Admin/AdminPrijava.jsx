import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AdminPrijava = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [sifraZaposlenika, setSifraZaposlenika] = useState('');
    const [lozinka, setLozinka] = useState('');

    useEffect(() => {
        //preuzimanje podataka
        const getOneZaposlenikPro = async () => {
          const { data } = await axios.get(`/api/aplikacija/getOneZaposlenik/${id}`)
          console.log(data)

          setSifraZaposlenika(data.Sifra_zaposlenika)
          setLozinka(data.Lozinka)
    
        }
        getOneZaposlenikPro()
    
      }, [id])

      async function handleLogin (e) {
        e.preventDefault();

        if (validate()) {
            fetch("/api/aplikacija/getOneZaposlenik/" + id,{
                    method: "GET",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify()
                }).then((resp)=>{
                    console.log(resp);
                    navigate(`/adminpocetna/${id}`)
                }).catch((err)=>{
                    toast.error('Greška :' +err.message);
                });
            
            } 
        }

        //provjerava jesu li polja za upis korisnickog imena i lozinke prazna ili ne
    const validate = () => {
        let result = true;

        if (sifraZaposlenika === '' || sifraZaposlenika === null) {
            result = false;
            toast.warning('Unesi šifru zaposlenika')
        }
        if (lozinka === '' || lozinka === null) {
            result = false;
            toast.warning('Unesi lozinku')
        }
        return result;
    }
  return (
    <div>
        <div className="d-grid gap-2 col-6 mx-auto">
                <h1 className="d-grid gap-2 col-6 mx-auto">Prijava</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Korisničko ime: <span className="errmsg">*</span> </label>
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
    </div>
  )
}

export default AdminPrijava