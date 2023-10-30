import './App.css'
import Navbar from './Components/Hocs/Navbar.jsx';
import Home from './Components/Pages/Home.jsx';
import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About.jsx';



const App = () => {


  return (
   <div>
        
        <Navbar />
        
        <div id="home"> 
        <Home />
        </div>
        <About />
        <Contact />
       
        
        
        
       
    </div>
  
  )
}

export default App
