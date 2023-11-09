import { useState } from 'react';
import Logo from '../Images/Logo.jpg'
import { FaBars,FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false);
  

  const hamburgerClick = () => {
    setIsOpen(!isOpen)
  }
  




  return (
  <div>
    <nav className="relative  mx-auto p-6">
        {/*Logo and haading*/}
      <div className='flex items-center justify-between'> 
         {/*Item 1*/}
        <a className="flex items-center gap-1 italic"  href="/">
          <img src={Logo} alt="logo" className='h-[50px]'></img>
          <h1 className='text-[#16B97A] md:text-4xl text-xl font-bold font-delicious'>Tassie`s 
          <span className='text-[#ff7b00] md:text-4xl text-xl  font-bold font-delicious ml-2'>Barbeque</span></h1> 
        </a>
        
     
           {/*Item 2*/}
         <div className='hidden md:flex space-x-6 '>
          <a href='#home' className="hover:text-[#16B97A] font-semibold  text-black/70">HOME</a>
          <a href='#about' className="hover:text-[#16B97A] font-semibold text-black/70">ABOUT US</a>
          <a href='#menu' className="hover:text-[#16B97A] font-semibold text-black/70" >POPULAR MENU`S</a>
          <a href='#contact' className="hover:text-[#16B97A] font-semibold text-black/70">CONTACT US</a>
          </div>
             {/*Item 3*/}
          <input type='text' placeholder='Search' 
          className='hidden md:block p-3 rounded-br-3xl rounded-tl-3xl  text-white baseline'/>
               {/*Item 4 which the hamburger btn*/}
               <button className="block md:hidden focus:outline-none hamburger" onClick={hamburgerClick}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
         

    
      </div>
      {isOpen && <div className="flex flex-col  items-center self-end py-8  mt-10 space-y-4 font-bold bg-white
      sm:self-center sm:w-auto left-6 right-6 drop-shadow-md ">
          <a href='#home' className="hover:text-[#16B97A]   text-black/70">Home</a>
          <a href='#about' className="hover:text-[#16B97A]  text-black/70">About Us</a>
          <a href='#menu' className="hover:text-[#16B97A]  text-black/70" >Popular menu`s</a>
          <a href='#contact' className="hover:text-[#16B97A]  text-black/70">Contact Us</a>
          </div> }
    

      

    </nav>
  






    </div>
  )
}

export default Navbar