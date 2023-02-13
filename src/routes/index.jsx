import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "./services/api.js";

export function AppRoutes() {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  async function submitsLogin(data) {
    try {
      const response = await api.post("/sessions", data);
      localStorage.setItem("@kenzie-hub-token", response.data.token);
      setUser(response.data.user);
      toast.success("Login feito!");
      navigate("/home");
    } catch (err) {
      console.error(err);
      toast.error("Dados (e-mail ou senha) incorretos");
    }
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Login toast={toast} submitsLogin={submitsLogin} />}
        />
        <Route path="/cadastro" element={<Register toast={toast} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="*" element={<h1>404 - Página não encontrada ://</h1>} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
