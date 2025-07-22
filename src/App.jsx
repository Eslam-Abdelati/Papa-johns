import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./views/MainLayout";
import Home from "./pages/Home/Home";
import Branches from "./pages/Branches/Branches";
import CustomerService from "./pages/Customer service/CustomerService";
import PizzaMenu from "./pages/Menu/PizzaMenu";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="branches" element={<Branches />} />
            <Route path="Customer-service" element={<CustomerService />} />
            <Route path="pizzaMenu" element={<PizzaMenu />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
