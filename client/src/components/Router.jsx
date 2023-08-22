import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ComposeBlog from "./pages/ComposeBlog";
import Home from "./pages/Home";
import Navbar from "./Header/Navbar";
import BlogDetail from "./pages/BlogDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="compose" element={<ComposeBlog />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
