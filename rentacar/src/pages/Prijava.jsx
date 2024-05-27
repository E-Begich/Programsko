import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";


const Prijava = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [kor_ime, setKor_ime] = useState('');
    const [lozinka, setLozinka] = useState('');

    useEffect(() => {
        //preuzimanje podataka
        const getOneKlijentPro = async () => {
          const { data } = await axios.get(`/api/aplikacija/getOneKlijentPro/${id}`)
          console.log(data)

          setKor_ime(data.Kor_ime)
          setLozinka(data.Lozinka)
    
        }
        getOneKlijentPro()
    
      }, [id])

    async function handleLogin (e) {
        e.preventDefault();

        if (validate()) {
            fetch("/api/aplikacija/getOneKlijentPro/" + id, {
                    method: "GET",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify()
                }).then((resp)=>{
                    console.log(resp);
                    navigate(`/klijentPocetna/${id}`)
                }).catch((err)=>{
                    toast.error('Greška :' +err.message);
                });
            
            } 


        
    }

    //provjerava jesu li polja za upis korisnickog imena i lozinke prazna ili ne
    const validate = () => {
        let result = true;

        if (kor_ime === '' || kor_ime === null) {
            result = false;
            toast.warning('Unesi korisničko ime')
        }
        if (lozinka === '' || lozinka === null) {
            result = false;
            toast.warning('Unesi lozinku')
        }
        return result;
    }


    return (
        <>
            <div className="d-grid gap-2 col-6 mx-auto">
                <h1 className="d-grid gap-2 col-6 mx-auto">Prijava</h1>
                <hr />
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label>Korisničko ime: <span className="errmsg">*</span> </label>
                        <input value={kor_ime} onChange={e => setKor_ime(e.target.value)} className="form-control" />
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