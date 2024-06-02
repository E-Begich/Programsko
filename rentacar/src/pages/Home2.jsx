import React, { useState, useEffect } from 'react';
import Vozila from './Vozila';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import Header2 from '../components/Header2';


function Home2() {
  const navigate = useNavigate();

  useEffect(() => {
    let email = sessionStorage.getItem('email');
    if (email === '' || email === null) {
      navigate('/');
    }
  }, []);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <Header2 />
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/images/background1.jpg"} className='d-block w-100' alt='background1' height='700px' />
          <Carousel.Caption>
            <h3>Rent a Car</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/images/background2.jpg"} className='d-block w-100' alt='background1' height='700px' />
          <Carousel.Caption>
            <h3>Rent a Car</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={process.env.PUBLIC_URL + "/images/background3.png"} className='d-block w-100' alt='background1' height='700px' />
          <Carousel.Caption>
            <h3>Rent a Car</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <p className='lead text-center py-4 my-6'>This is test site. Please do not order for now.</p>
      < Vozila />
    </div>
  );
}
export default Home2;