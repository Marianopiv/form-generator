import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailForm from "../components/detailForm/DetailForm";
import Home from "../components/home/Home";
import WithFooter from "./layout/WithFooter";
const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WithFooter />}>
          <Route path="/" element={<Home />} />
          <Route path="/form-creation" element={<DetailForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
