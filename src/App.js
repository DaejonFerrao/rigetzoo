import './App.css';
import { Navigate, Routes, Route } from "react-router-dom";


import NavBar from "./Components/Navbar/NavBar.js";
import Home from "./Pages/Home/Home.js";
import Register from './Pages/Register/Register.js';
import HeroImage from "./Components/HeroImage/HeroImage.js";
import Login from './Pages/Login/Login.js';
import Footer from "./Components/Footer/Footer.js"
import Carousel from './Pages/Carousel/Carousel.js';
import AboutUs from './Pages/AboutUs/AboutUs.js';



function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Home" element={<HeroImage />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/AboutUs" element={<AboutUs />} />
       </Routes>
       <Footer />

    </div>
  );
}

export default App;
