import Logo from '../Images/Logo.jpg'
const Navbar = () => {
  




  return (
  <div>
    <nav className="relative  mx-auto p-6 ">
        {/*Logo and haading*/}
      <div className='flex items-center justify-between'> 
         {/*Item 1*/}
        <a className="flex items-center gap-1 italic"  href="/">
          <img src={Logo} alt="logo" className='h-[50px]'></img>
          <h1 className='text-[#16B97A] md:text-4xl text-xl font-bold font-delicious'>Chau`s 
          <span className='text-[#ff7b00] md:text-4xl text-xl  font-bold font-delicious ml-2'>Barbeque</span></h1> 
        </a>
        
     
           {/*Item 2*/}
         <div className='hidden md:flex space-x-6 '>
          <a href='#' className="hover:text-[#16B97A] font-semibold  text-black/70">HOME</a>
          <a href='#' className="hover:text-[#16B97A] font-semibold text-black/70">ABOUT US</a>
          <a href='#' className="hover:text-[#16B97A] font-semibold text-black/70" >POPULAR MENU`S</a>
          <a href='#' className="hover:text-[#16B97A] font-semibold text-black/70">CONTACT US</a>
          </div>
             {/*Item 3*/}
          <input type='text' placeholder='Search' 
          className='hidden md:block p-3 rounded-br-3xl rounded-tl-3xl  text-white baseline'/>
      </div>

    </nav>
  






    </div>
  )
}

export default Navbar