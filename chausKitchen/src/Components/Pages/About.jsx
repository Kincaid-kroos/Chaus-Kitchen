import about from '../Images/about.jpg';
import { BiPhoneCall } from "react-icons/bi";


const About = () => {
  return (
    <div id="about" className='mt-10 py-6 px-16'>
      {/*flex items*/}
      <div className="flex flex-col md:flex-row  items-center mt-0 md:mt-10  md:space-x-16 space-x-10 space-y-2 md:space-y-0 ">
        {/*item a*/}
        <div className=" flex flex-col md:w-1/2 "> 
        <img  src={about} alt="about img" className="md:h-[400px] md:w-[400px] rounded-full object-cover"/>

        </div>
         {/*item b*/}
         <div className='ml-2 flex flex-col md:w-1/2 mt-2 border shadow-lg'>
         <h2 className="font-bold text-4xl  text-left  md:text-7xl text-[#7ab916]">
            About Us
          </h2>
          
          <p className='text-gray-400 my-4 text-1xl md:text-xl font-semibold  md:w-[90%]  text-left'>
          This is our Mombasa based Barbaque web app that allows users to book their meals for the week. 
          They can also add recipes and ingredients to their dine list.
          We make amazing food ranging from African to American and everything in between. 
          We have been operating for over 10 years and we love to share our passion with others.

        We have services ranging from hospitality, in house and outdoor catering and cooking classes.
        We also do private events and parties.

          </p>
        

            <div className="flex  items-center gap-4 hover:bg-[#ffa300] font-bold 
            cursor-pointer animate-bounce rounded-tr-2xl rounded-bl-2xl bg-[#16B97A] 
            transition-all duration-300 text-white
            md:text-md text-sm py-1  px-12 md:px-12 md:py-1 mt-2">
              <button>
              <BiPhoneCall className="text-[#e4ded5] text-xl md:text-5xl cursor-pointer hover:text-[#282752] transition-all duration-300" />
              </button>
              <p>Call us Now</p>
            </div>
            
          
          </div>



      </div>

    </div>
  )
}

export default About