import React, { useState, useEffect } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';

import Home from "../pages/home.component";
import Projects from "../pages/projects.component";

import Contact from "../pages/contact.component";
import About from '../pages/about.component';

const Main = () => {
    const [currentLocation, setCurrentLocation] = useState("");
    const location = useLocation();

    useEffect(() => {
        setCurrentLocation(location.pathname);
    }, [location]);
    
    return (
        <main className={`content min-h-[550px]`}>
            <nav className="px-6 sm:mx-auto sm:w-2/3 flex justify-around sm:justify-between py-8 uppercase tracking-widest">
            <Link to="/" className={`${(currentLocation === "/" && "border-[#E2C67F]") || "border-b-transparent"} location`}>home</Link>
            <Link to="/projects" className={`${(currentLocation === "/projects" && "border-[#E2C67F]") || "border-b-transparent"} location`}>projects</Link>
            <Link to="/about" className={`${(currentLocation === "/about" && "border-[#E2C67F]") || "border-b-transparent"} location`}>about</Link>
            </nav>
            
            <Routes>
              <Route path="/" element={<Home /> } />
              <Route path="/projects" element={<Projects /> } />
              <Route path="/contact" element={<Contact /> } />
              <Route path="/about" element={<About /> } />
              <Route path="/*" element={<Home />} />
            </Routes>
        </main>
    );
};

export default Main;