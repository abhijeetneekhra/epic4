import React from "react";
import Login from "./Login";
import Register from "./pages/Register";
import { HashRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Forgot-password";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
