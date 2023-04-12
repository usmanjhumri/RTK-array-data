import { useState } from "react";

import "./App.css";
import Navbars from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import MianHome from "./components/MainHomePage/MianHome";

import LoginRoutes from "./routes/LoginRoutes";
import Login from "./components/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbars />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<MianHome />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;






 // if (data.Confirmpassword === data.password) {

    //   dispatch(
    //     signUpHandle({
    //       firstname: data.firstName,
    //       lastname: data.lastName,
    //       email: data.email,
    //       phonenumber: data.phoneNumber,
    //       address: data.address,
    //       password: data.password,
    //       confirmpassword: data.Confirmpassword,
    //     })
    //   ).push(...signUpHandle)
    // } else {
    //   toast.error("password not matched", {
    //     position: "top-right",
    //     autoClose: 3000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //   });
    // }