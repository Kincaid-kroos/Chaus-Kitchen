import './App.css'
import Navbar from './Components/Hocs/Navbar.jsx';
import Footer from './Components/Hocs/Footer.jsx';


import Home from './Components/Pages/Home.jsx';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About.jsx';
import Testimonials from './Components/Pages/Testimonials.jsx';
import Menu from './Components/Pages/Menus.jsx';




const App = () => {


  return (
  
        <div>
        <Navbar />
        
        
        <Home />

        <About />
        <Menu />
        <Testimonials />
        <Contact />
        <Footer />
        </div>
       
        
        
        
       
    
  
  )
}

export default App
