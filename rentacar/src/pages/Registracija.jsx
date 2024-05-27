import React, { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from "react-router-dom";


function Registracija() {

    const [ime, setIme] = useState("");
    const [prezime, setPrezime] = useState("");
    const [adresa, setAdresa] = useState("");
    const [postBroj, setPostBroj] = useState("");
    const [mjesto, setMjesto] = useState("");
    const [kontakt, setKontakt] = useState("");
    const [email, setEmail] = useState("");
    const [korIme, setKorIme] = useState("");
    const [lozinka, setLozinka] = useState("");

    const navigate = useNavigate();

    const IsValidate = () => {
        let isproceed = true;
        let isproceedPass = true;
        let errormessage = 'Molimo te da upišeš ispravne podatke u: ';
        if (ime === null || ime === '') {
            isproceed = false;
            errormessage += ' Ime';
        }
        if (prezime === null || prezime === '') {
            isproceed = false;
            errormessage += ' Prezime';
        }
        if (adresa === null || adresa === '') {
            isproceed = false;
            errormessage += ' Adresa';
        }
        if (postBroj === null || postBroj === '') {
            isproceed = false;
            errormessage += ' Poštanski broj';
        }
        if (mjesto === null || mjesto === '') {
            isproceed = false;
            errormessage += ' Mjesto';
        }
        if (kontakt === null || kontakt === '') {
            isproceed = false;
            errormessage += ' Poštanski broj';
        }
        if (email === null || email === '') {
            isproceed = false;
            errormessage += ' E-mail';
        }
        if (korIme === null || korIme === '') {
            isproceed = false;
            errormessage += ' Korisničko ime';
        }
        if (lozinka === null || lozinka === '') {
            isproceed = false;
            errormessage += ' Lozinka';
        }

        if(!isproceed){
            toast.warning(errormessage)
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                isproceed = false;
                toast.warning('Molimo upišite ispravnu email adresu.')
            }
        }
        if(!isproceedPass){
            toast.warning(errormessage)
        }else{
            if(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/.test(lozinka)){

            }else{
                isproceedPass = false;
                toast.warning('Lozinka mora imati 8-24 znaka, veliko slovo, broj i posebni znak.')
            }
            return isproceedPass;
        }
        return isproceed;    
    }

    const handlesubmit = (e) => {
        e.preventDefault();

       // axios
       // .get('http://localhost:8080/api/aplikacija/getAllKlijentPro')
       // .then((res)=> checkEmail(res.data));
  //  };

  //  const checkEmail =(getdata) => {
    //    console.log(getdata);

        const data = {
            Ime: ime,
            Prezime: prezime,
            Adresa: adresa,
            Post_broj: postBroj,
            Mjesto: mjesto,
            Kontakt: kontakt,
            Email: email,
            Kor_ime: korIme,
            Lozinka: lozinka
        }
      //  if(getdata.includes(email)){
       //     alert("Cannot post because of duplicate Email")
      //  }
        //console.log(data);
        //else 
        if (IsValidate()) {
        fetch("/api/aplikacija/addKlijentProfil", {
                method: "POST",
                headers: { 'content-type': 'application/json' },
                body: JSON.stringify(data)
            }).then((res) => {
                toast.success('Uspješna registracija!')
                navigate('/prijava');
            }).catch((err) => {
                toast.error('Greška :' + err.message);
            });
        
        } 
}

    return (
        <>
            <div className="d-grid gap-2 col-6 mx-auto">
                <form className="container" onSubmit={handlesubmit}>
                    <h1 className="d-grid gap-2 col-6 mx-auto">Registracija</h1>
                    <hr />
                    <div className="form-group">
                        <label>Ime: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={ime} onChange={e => setIme(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Prezime: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={prezime} onChange={e => setPrezime(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Adresa: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={adresa} onChange={e => setAdresa(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Poštanski broj: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={postBroj} onChange={e => setPostBroj(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Mjesto: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={mjesto} onChange={e => setMjesto(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Kontakt: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={kontakt} onChange={e => setKontakt(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>E-mail: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Korisničko ime: <span className="errmsg">*</span></label>
                        <input type="text" className="form-control" value={korIme} onChange={e => setKorIme(e.target.value)} />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Lozinka: <span className="errmsg">*</span></label>
                        <input type="password" className="form-control" value={lozinka} onChange={e => setLozinka(e.target.value)} />
                    </div>
                    <br />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="submit" className="btn btn-outline-dark ms-2">Registriraj se</button>
                        <Link to={'/prijava'} className="btn btn-primary">Već imaš račun? Prijavi se</Link>

                    </div>
                </form>
            </div>

        </>
    )
}
export default Registracija;