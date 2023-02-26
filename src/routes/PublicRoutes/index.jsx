import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../../pages/Home";
import { Login } from "../../pages/Login";
import { Register } from "../../pages/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TechProvider } from "../../providers/TechContext.jsx";
import { ProtectedRoute } from "../ProtectedRoute";

export function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login toast={toast} />} />
        <Route path="/cadastro" element={<Register toast={toast} />} />

        <Route path="/home" element={<ProtectedRoute />}>
          <Route
            index
            element={
              <TechProvider>
                <Home />
              </TechProvider>
            }
          />
        </Route>

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
