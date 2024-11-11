
import './App.css'
import About from './components/About'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Service from './components/Service'

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
      </div>
  )
}

export default App
