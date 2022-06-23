import Header from "./components/header.component";

import Home from "./pages/home.component";
import Projects from "./pages/projects.component";
import Contact from "./pages/contact.component";
import About from './pages/about.component';

function App() {
  
  return (
    <div className="w-full h-screen pt-10 flex flex-col max-w-[1248px] sm:mx-auto">
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
