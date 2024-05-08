import React from "react";

function Vozila(){

    const cardVozil0 = (item) => {
        return (
            <div className="card my-5 py-4">
                <img src="" className="card-img-top" alt=""/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Naslov</h5>
                        <p className="lead"> cijena u €</p>
    
                    </div>
    </div>
                );
    }


    return(
        <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>Prikaz svih dostupnih vozila</h1>
              <hr />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row justify-content-around">
          <div className="card my-5 py-4">
                <img src="" className="card-img-top" alt=""/>
                    <div className="card-body text-center">
                        <h5 className="card-title">Naslov</h5>
                        <p className="lead"> cijena u €</p>
    
                    </div>
    </div>
          </div>
        </div>
      </div>
    )
}
export default Vozila;