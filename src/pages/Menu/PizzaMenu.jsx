import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PizzaMenu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <h2 className="text-end mb-4 fw-bold text-success">البيتزا</h2>
      <div className="row g-2 text-center m-0">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="col-12 col-md-3">
            <div className="border border-success h-100 d-flex flex-column">
              {/* الصورة */}
              <img
                src={pizza.image}
                alt={pizza.name}
                style={{
                  height: "200px",
                  objectFit: "cover",
                  width: "100%",
                }}
              />

              {/* المحتوى */}
              <div className="p-2 text-center">
                <h5 className="fw-bold " style={{ color: "#ab131b" }}>
                  {pizza.name}
                </h5>
                <p className="text-muted" style={{ fontSize: "14px" }}>
                  {pizza.description}
                </p>
              </div>

              {/* الأنواع والأسعار */}
              <div className="px-2 pb-3" style={{ fontSize: "13px" }}>
                {pizza.types.map((type, index) => (
                  <div key={index} className="mb-2 text-center">
                    <span className="d-block fw-bold text-success">
                      {type.typeName}
                    </span>
                    <div className="d-flex justify-content-center flex-wrap mt-1">
                      {type.sizes.map((size, i) => (
                        <div
                          key={i}
                          className="border m-1 text-danger fw-bold"
                          style={{
                            minWidth: "60px",
                          }}
                        >
                          <div
                            className="text-white"
                            style={{
                              fontSize: "12px",
                              backgroundColor: "#ab131b",
                            }}
                          >
                            {size.sizeName}
                          </div>

                          <span style={{ color: "#ab131b" }}>
                            {size.price} LE
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PizzaMenu;
