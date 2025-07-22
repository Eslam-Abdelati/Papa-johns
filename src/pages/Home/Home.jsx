import React, { useEffect, useState } from "react";
import "./Home.css";

import img1 from "../../assets/Pepperoni-Stuffed-Crust-Home-Page-Banner-web.jpg";
import img2 from "../../assets/Buy-2-Get1-Free-web-2.jpg";
import img3 from "../../assets/Cookies-N-Cream-Rolls-WP.jpg";
import img4 from "../../assets/Jalapeno-Stuffed-Crust-Webpage-wb.jpg";
import img5 from "../../assets/Papa-Double-Large-Offer-Homepage-Banner-web.jpg";
import img6 from "../../assets/Papa-double-medium-web.jpg";
import img7 from "../../assets/Papadias-Cookies-Web.jpg";
import img8 from "../../assets/Papadias-Web-site-AR-web.jpg";
import { Link } from "react-router-dom";

export default function Home() {
const [menus, setMenus] = useState([]);
 useEffect(() => {
    fetch("http://localhost:5000/menus")
      .then((res) => res.json())
      .then((data) => setMenus(data));
      
  }, []);

  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2000"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img1} className="d-block w-100" alt="Pepperoni Pizza" />
          </div>
          <div className="carousel-item">
            <img src={img2} className="d-block w-100" alt="Banner 2" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={img4} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={img5} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={img6} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={img7} className="d-block w-100" alt="Banner 3" />
          </div>
          <div className="carousel-item">
            <img src={img8} className="d-block w-100" alt="Banner 3" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/*  */}
      <div className="row g-2 text-center m-0 pizza">
        {menus.map((card, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-3 bg-light text-dark p-0 d-flex flex-column align-items-center"
          >
            <img
              src={card.image}
              alt={`Card ${index + 1}`}
              className="img-fluid"
              style={{ objectFit: "cover", height: "200px", width: "100%" }}
            />
            <div className="w-100 p-2">
              <Link to={card.link} className="btn"> {card.name} </Link>
            </div>
          </div>
        ))}   
      </div>
    </>
  );
}
