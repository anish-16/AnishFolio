import './App.css';
import About from './components/About';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Service from './components/Service';
import ParticlesBackground from './ParticlesBackground';
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';

function App() {
  const particleInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);
  
  const load = useCallback(async () => {
    console.log("loading");
  }, []);
  
  return (
    <>
    <ParticlesBackground
        id="tsparticles"
        init={particleInit}
        loaded={load}
      />
    <div>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contacts />
      <Footer />
      
    </div>
    </>
  );
}

export default App;