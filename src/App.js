import React from "react";
import Login from "./Login";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Forgot-password";
import Index2 from "./pages/Index2";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/index" element={<Index2 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
