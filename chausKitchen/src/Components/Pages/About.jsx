import about from '../Images/about.jpg';
import { BiPhoneCall } from "react-icons/bi";


const About = () => {
  return (
    <div id="about" className='mt-10 py-6 px-16'>
      {/*flex items*/}
      <div className="flex flex-col md:flex-row items-center mx-auto mt-0 md:mt-10  md:space-x-16 space-x-10 space-y-2 md:space-y-0 ">
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
          This is a meal planning app that allows users to plan their meals for the week. 
          They can also add recipes and ingredients to their shopping list.
          I make amazing food ranging from African to American and everything in between. 
          I have been cooking for over 10 years and I love to share my passion with others.

I have services ranging from meal prep, in house and outdoor catering and cooking classes.
 I am also available for private events and parties.

          </p>
          <button className=" bg-[#ffa300] flex gap-2 font-normal md:font-bold cursor-pointer 
          rounded-tr-3xl rounded-bl-3xl hover:bg-[#16B97A] transition-all duration-300 text-white
           md:text-md text-sm py-6  px-4 md:px-8 md:py-4 w-[50%] ">
              <p>Call Us</p> 
              <BiPhoneCall className="text-white text-xl" />
            </button>
          
          </div>



      </div>

    </div>
  )
}

export default About