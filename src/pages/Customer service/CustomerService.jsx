import React, { useState } from "react";
import "./CustomerService.css"

const CustomerService = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    complaintType: "",
    orderType: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/Customer service", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("تم إرسال الرسالة بنجاح!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          complaintType: "",
          orderType: "",
          message: ""
        });
      } else {
        alert("حدث خطأ، حاول مرة أخرى.");
      }
    } catch (error) {
      alert("خطأ في الاتصال بالسيرفر.", error);
    }
  };

  return (
    <div className="container py-4">
      {/* العنوان في أقصى اليمين */}
      <div className="text-end mb-4">
        <h2>خدمة العملاء</h2>
      </div>

      {/* الفورم في المنتصف */}
      <form
        className="row g-3 col-lg-8 col-md-10 mx-auto"
        onSubmit={handleSubmit}
      >
        <div className="col-md-6">
          <label className="form-label">الاسم</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">البريد الإلكتروني</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">رقم الهاتف</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">العنوان</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">نوع الشكوى</label>
          <select
            className="form-select"
            name="complaintType"
            value={formData.complaintType}
            onChange={handleChange}
            required
          >
            <option value="">اختر نوع الشكوى</option>
            <option value="تأخر التوصيل">تأخر التوصيل</option>
            <option value="مشكلة في الطلب">مشكلة في الطلب</option>
            <option value="أخرى">أخرى</option>
          </select>
        </div>

        <div className="col-md-6">
          <label className="form-label">نوع الطلب</label>
          <select
            className="form-select"
            name="orderType"
            value={formData.orderType}
            onChange={handleChange}
            required
          >
            <option value="">اختر نوع الطلب</option>
            <option value="توصيل للمنزل">توصيل للمنزل</option>
            <option value="في المطعم">في المطعم</option>
          </select>
        </div>

        <div className="col-12">
          <label className="form-label">الرسالة</label>
          <textarea
            className="form-control"
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary px-4">
            إرسال
          </button>
        </div>
      </form>
    </div>
  );
};

export default CustomerService;
