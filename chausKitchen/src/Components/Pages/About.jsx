import about from '../Images/Logo.jpg';
import { BiPhoneCall } from "react-icons/bi";


const About = () => {
  return (
    <div id="about" className='mt-10 py-6 px-16'>
      {/*flex items*/}
      <div className="flex flex-col md:flex-row  items-center sm:items-start mx-auto mt-0 md:mt-10  md:space-x-16 space-x-10 space-y-2 md:space-y-0 ">
        {/*item a*/}
        <div className=" flex flex-col md:w-1/2"> 
        <img  src={about} alt="about img" className="md:h-[400px] md:w-[400px] md:rounded-full rounded-tr-3xl rounded-bl-3xl"/>

        </div>
         {/*item b*/}
         <div className='flex flex-col md:w-1/2 mt-0'>
         <h2 className="font-bold text-md text-center md:text-left  md:text-7xl text-[#7ab916]">
            About Us
          </h2>
          
          <p className='text-gray-400 my-4 text-sm md:text-xl font-semibold  w-[90%] text-center md:text-left'>
          This is our Mombasa based Barbaque web app that allows users to book their meals for the week. 
          They can also add recipes and ingredients to their dine list.
          We make amazing food ranging from African to American and everything in between. 
          We have been operating for over 10 years and we love to share our passion with others.

We have services ranging from hospitality, in house and outdoor catering and cooking classes.
 We also do private events and parties.

          </p>
          <button className=" bg-[#ffa300] flex gap-2 font-normal md:font-bold cursor-pointer 
          rounded-tr-3xl rounded-bl-3xl hover:bg-[#16B97A] transition-all duration-300 text-white
           md:text-md text-sm py-6  px-4 md:px-8 md:py-4 w-[50%] ">
              <p>Book Now</p> 
              <BiPhoneCall className="text-white text-xl" />
            </button>
          
          </div>



      </div>

    </div>
  )
}

export default About