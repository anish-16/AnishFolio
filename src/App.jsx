
import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'
import ParticlesBackground from './ParticlesBackground'

function App() {

  return (
    
      <div>
        <Navbar /> 
        <Home />
        <About />
        <Service />
        <Projects />
       <Contacts />
       <Footer />
       <ParticlesBackground /> {/* Add the particles background*/}
      </div>
  )
}

export default App
