import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Hotels from "../Pages/Hotels";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/hotels" element={<Hotels />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
