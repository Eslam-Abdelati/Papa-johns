import React from "react";
import "./Footer.css";
import ins from "../../assets/ins-icon.png"
import fac from "../../assets/fbicon.png"

export default function Footer() {
  return (
    <footer className="text-white text-center py-2 mt-3">
      <div className="container">
        {/* القسم الأول */}
        <div className="mb-1">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" className="text-white text-decoration-none">
              العروض
            </a>
            <a href="#" className="text-white text-decoration-none">
              البيتزا
            </a>
            <a href="#" className="text-white text-decoration-none">
              المقبلات
            </a>
            <a href="#" className="text-white text-decoration-none">
              الحلويات
            </a>
            <a href="#" className="text-white text-decoration-none">
              المشروبات
            </a>
          </div>
        </div>

        {/* القسم الثاني */}
        <div className="mb-3">
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="#" className="text-white text-decoration-none">
              الرئيسية
            </a>
            <a href="#" className="text-white text-decoration-none">
              الجودة
            </a>
            <a href="#" className="text-white text-decoration-none">
              الفروع
            </a>
            <a href="#" className="text-white text-decoration-none">
              وظائف
            </a>
            <a href="#" className="text-white text-decoration-none">
              خدمة العملاء
            </a>
            <a href="#" className="text-white text-decoration-none">
              اتصل بنا
            </a>
            <a href="#" className="text-white text-decoration-none">
              سياسة الخصوصية
            </a>
          </div>
        </div>

        {/* القسم الثالث */}
        <div className="mb-3 footer-links-rounded">
          <div className="d-flex justify-content-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <img
                src={fac}
                alt="Facebook"
              />
              
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-decoration-none d-flex align-items-center"
            >
              <img
                src={ins}
                alt="Instagram"
              />
              
            </a>
          </div>
        </div>

        {/* القسم الرابع */}
        <div className="mb-3">
          <div className="d-flex justify-content-center gap-3">
            © 2025 بابا جونز مصر
          </div>
        </div>

        {/* القسم الخامس */}
        <div className="developer">
         
            تطوير الموقع 
            <a
              href="http://www.webandart.com"
              className="text-white text-decoration-none m-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              webandart.com
            </a>
          
        </div>
      </div>
    </footer>
  );
}
