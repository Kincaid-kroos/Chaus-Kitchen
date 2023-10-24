import './App.css'
import Navbar from './Components/Hocs/Navbar.jsx';
import Home from './Components/Pages/Home.jsx';

const App = () => {


  return (
   <div>
        
        <Navbar />
        
        <div id="home"> 
        <Home />
        </div>
       
        
        
        
       
    </div>
  
  )
}

export default App
