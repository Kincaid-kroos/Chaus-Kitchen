import { AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {
  const timeline = new Date().getFullYear();

  return (
    <footer className="bg-[#292727] text-[#ffffff] ">
      <div className="md:mx-20  flex flex-col md:flex-row sm:items-center items-start px-10 mt-0 md:mt-10 md:space-x-32 space-x-15 space-y-2 md:space-y-0">
        {/* item 1 */}
        <div className="flex flex-col md:mt-0 space-y-2 md:w-1/3">
          <h2 className="font-bold text-[#ca7f42] underline underline-offset-8">Chaus Barbaque</h2>
          <p>The best place to have your meals with family and friends</p>

          <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/kinc.kroos">
              <BsFacebook className="text-[#ace255] h-[30px] w-[30px] hover:text-[#FFA300]" />
            </a>
            <a href="https://twitter.com/Kincaid_Kroos">
              <FaXTwitter className="text-[#ace255] h-[30px] w-[30px] hover:text-[#FFA300]" />
            </a>
            <a href="https://www.linkedin.com/in/kiprotich-kincaid-b50664203/">
              <AiFillLinkedin className=" text-[#ace255] hover:text-[#FFA300] h-[30px] w-[30px]" />
            </a>
          </div>
        </div>

        {/* item b */}
        <div className="flex flex-col sm:ml-4  md:mt-0 sm:mt-5 space-y-2 md:w-1/3 sm:w-full">
          <h2 className="font-bold text-[#ca7f42] underline underline-offset-8">Quick Links</h2>
          <div className="flex flex-col ">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#products">Products</a>
            <a href="#testimonies">Testimonials</a>
          </div>
        </div>

        {/* item c */}
        <div className="flex flex-col md:mt-0 space-y-2 md:w-1/3">
          <div>
            <h2 className="font-bold text-[#ca7f42] underline underline-offset-8">Contact</h2>
            <div className="flex  items-center gap-4">
              <BiPhoneCall className="text-[#62a735]" />
              <p>Tassie Kabaya - +254701218138</p>
            </div>
          </div>
          <div>
            <h2 className="font-bold text-[#ca7f42] underline underline-offset-8">Customer Support</h2>
            <div className="flex items-center gap-4">
              <BiPhoneCall className="text-[#62a735]" />
              <p>Dahlia Rhys - +254746940003</p>
            </div>
            <div className="flex items-center gap-4">
              <AiTwotoneMail className="text-[#62a735]" />
              <p>Chausbarb@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="flex flex-col md:mx-20 items-center text-[#b19284] mt-10 ">
        Copyright©{timeline}: || All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
