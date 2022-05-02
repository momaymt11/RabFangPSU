import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home_page from "./pages/home_page";
import Login_page from "./pages/login_page";
import Admin_page from "./pages/admin_page";
import User_page from "./pages/user_page";
import Doctor_page from "./pages/doctor_page";
import Mentalhealth_test_page from "./pages/mentalhealth_test_page";
import Satisfaction_form from "./pages/satisfaction_form";
import { config } from "./config";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const Firebase = initializeApp(config.firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home_page />} />
      <Route path="/login" element={<Login_page />} />
      <Route path="/user" element={<User_page />} />
      <Route path="/admin" element={<Admin_page />} />
      <Route path="/doctor" element={<Doctor_page />} />
      {/* satisfaction_form */}
      <Route path="/satisfaction_form" element={<Satisfaction_form/>} />
      <Route path="/mentalhealth_test" element={<Mentalhealth_test_page />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const db = getFirestore(Firebase);
