import React from "react";
import "./Navbar.css";
import hotLine from "../../assets/hotLine_english.png";
import langEn from "../../assets/english.png";
import logo from "../../assets/papalogo-ar.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      {/* ✅ الجزء العلوي من الهيدر */}
      <div className="py-2 heder" dir="ltr">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <ul className="navbar-nav d-flex flex-row align-items-center mb-0">
            <li className="nav-item me-2">
              <a className="nav-link p-0" href="#">
                <img src={langEn} alt="Ar" style={{ height: "24px" }} />
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link p-0" href="#">
                اتصل بنا
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link p-0" href="#">
                وظائف
              </a>
            </li>
            <li className="nav-item me-3">
              <a className="nav-link p-0" href="#">
                <img src={hotLine} alt="Hotline" style={{ height: "40px" }} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* ✅ النافبار الرئيسي */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            <img
              src={logo}
              alt="logo"
              style={{ height: "50px", objectFit: "contain" }}
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li className="nav-item dropdown custom-hover-dropdown">
                <a
                  className="nav-link"
                  href="#"
                  id="menuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  القائمة
                </a>

                <ul
                  className="dropdown-menu custom-red-dropdown"
                  aria-labelledby="menuDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      العروض
                    </a>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/pizzaMenu">
                      بيتزا
                    </Link>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      المقبلات
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      الحلويات والمشروبات
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                       كرانشي بابادياس الجديدة
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link d-flex align-items-center h-100"
                  href="#"
                >
                  الجودة
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/branches">
                  الفروع
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/customer-service">
                  خدمة العملاء
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
