import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Navbar from "./Header/Navbar";
import BlogDetail from "./pages/BlogDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="compose" element={<ProtectedRoute />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
