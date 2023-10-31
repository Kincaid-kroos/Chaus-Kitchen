import { AiTwotoneMail,AiFillLinkedin } from "react-icons/ai";

import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";






const Footer = () => {
  const timeline = new Date().getFullYear();

  return (
    <div>
    <div className=" mx-auto flex flex-col md:flex-row items-center sm:items-start px-10 mt-0 md:mt-10  md:space-x-48 space-x-15 space-y-2 md:space-y-0 ">
        {/*item a*/}
      <div className="flex flex-col md:mt-0 space-y-5  md:w-1/3">
        <h2 className="font-bold text-[#ca7f42]">Chaus Barbaque</h2>
        <p>The best place to have your meals with family and friends</p>
        
        <div className="flex mx-auto gap-8 items-center" >
          <a href='https://www.facebook.com/kinc.kroos' >< BsFacebook className="text-[#db4141] hover:text-white" /></a>
          <a href='https://twitter.com/Kincaid_Kroos'><FaXTwitter  className="icon-color"/></a>
          <a href='https://www.linkedin.com/in/kiprotich-kincaid-b50664203/'><AiFillLinkedin  className="icon-color"/></a>
         
        </div>
        

      </div>
              {/*item b*/}
      <div className="flex flex-col md:mt-0 space-y-5 md:w-1/3">
              <h2 className="font-bold text-[#ca7f42]">Quick Links</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Products</li>
        </ul>


</div>
        {/*item c*/}
        <div className="flex flex-col md:mt-0 space-y-5 md:gap-2 md:w-1/3">
          <div>
        <h2 className="font-bold text-[#ca7f42]">Contact</h2>
        <div className="flex items-center gap-4">
        <BiPhoneCall />
        <p>Darlene Rono - 0701218138</p>
        </div>
        </div>
        <div>
        <h2 className="font-bold text-[#ca7f42]">Customer Support</h2>
        <div className="flex items-center gap-4">
        <BiPhoneCall />
        <p>Kincaid Boen - 0746940003</p>
        </div>
        <div className="flex items-center gap-4">
        <AiTwotoneMail  />
        <p>Chausbarb@gmail.com</p>
        </div>
        </div>
      
       

</div>
</div>
<footer className='items-center text-[#5c9feb] mt-5'>
          Copyright©{timeline}: || All rights reserved
        </footer>
    </div>
  )
}

export default Footer