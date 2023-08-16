import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComposeBlog from "./pages/ComposeBlog";
import Home from "./pages/Home";
import Navbar from "./Header/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="compose" element={<ComposeBlog />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
