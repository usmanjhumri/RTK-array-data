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


