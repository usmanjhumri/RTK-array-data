import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
// import ForgotPaswrd from "../components/ForgotPaswrd/ForgotPaswrd";

const LoginRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/forgotpassword" element={<ForgotPaswrd />} /> */}
      </Routes>
    </>
  );
};

export default LoginRoutes;
