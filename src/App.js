import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import Header from "./components/header.component";

import Home from "./pages/home.component";
import Projects from "./pages/projects.component";
import Contact from "./pages/contact.component";
import About from './pages/about.component';

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const location = useLocation();

  useEffect(() => {
      setCurrentLocation(location.pathname);
  }, [location]);
  return (
    <div className="container max-w-[1248px]">
      <Header />
      {currentLocation !== "/contact" && 
        <nav className="bg-neutral-100 px-6 sm:mx-auto sm:w-2/3 flex justify-around sm:justify-between py-8 uppercase tracking-widest z-10">
          <Link to="/" className={`${(currentLocation === "/" && "border-[#E2C67F]") || "border-b-transparent"} location`}>home</Link>
          <Link to="/projects" className={`${(currentLocation === "/projects" && "border-[#E2C67F]") || "border-b-transparent"} location`}>projects</Link>
          <Link to="/about" className={`${(currentLocation === "/about" && "border-[#E2C67F]") || "border-b-transparent"} location`}>about</Link>
          <a className="border-b-transparent location" href="https://drive.google.com/file/d/1CNsIKkyuUJZ_tZFAfcQ-jJ9HF0qqOY7G/view?usp=sharing">resume</a>
        </nav>}

      <Routes>
        <Route exact path="/" element={<Home /> } />
        <Route path="/projects" element={<Projects /> } />
        <Route path="/contact" element={<Contact /> } />
        <Route path="/about" element={<About /> } />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
