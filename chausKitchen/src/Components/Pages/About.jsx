import about from '../Images/about.jpg';
const About = () => {
  return (
    <div id="about" className='mt-16 py-6 px-16 bg-slate-300'>
      {/*flex items*/}
      <div className="flex flex-col md:flex-row items-center mx-auto mt-0 md:mt-10  md:space-x-16 space-x-10 space-y-2 md:space-y-0 ">
        {/*item a*/}
        <div className="md:w-1/2"> 
        <img  src={about} alt="about img" className="md:h-[400px] md:w-[400px] md:rounded-full rounded-tr-3xl rounded-bl-3xl"/>

        </div>
         {/*item b*/}
         <div className='flex flex-col md:w-1/2 mt-0'>
         <h2 className="font-bold text-md text-center md:text-left  md:text-7xl">
            About Us
          </h2>
          
          <p className='text-center md:text-left'>
          This is a meal planning app that allows users to plan their meals for the week. <br/>
          They can also add recipes and ingredients to their shopping list.
          </p>
          
          </div>



      </div>

    </div>
  )
}

export default About