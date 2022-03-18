import { Routes, Route } from 'react-router-dom';

import Header from "./components/header.component";

import Home from "./pages/home.component";
import Projects from "./pages/projects.component";
import Contact from "./pages/contact.component";
import About from './pages/about.component';

function App() {
  
  return (
    <div className="container max-w-[1248px]">
      <Header />
      
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
