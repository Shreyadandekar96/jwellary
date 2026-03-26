import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {Navbar} from "./Components/Navbar";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Shop from "./Pages/Shop";
import Signup from "./Pages/Signup";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />

<Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;