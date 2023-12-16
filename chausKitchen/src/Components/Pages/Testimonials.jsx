

const Testimonials = () => {
  return (
    <div>
    {/*Testimonials start*/}
  
    {/*  Container to heading */}
    <div className=" px-5 text-center">
    {/*Heading*/} 
    <h2 className="font-bold text-center 
     md:pt-8 pb-4  text-4xl   md:text-4xl text-[#7ab916]">
      Customer Reviews?
    </h2>
     {/*Testimonials Container*/} 
    <div className="flex flex-col mt-24 md:flex-row md:gap-12 md:pt-12">
     

       {/*Testimonial a*/}
      <div className="flex flex-col items-center pt-0 p-6 space-y-6 rounded-lg  md:flex md:w-1/3">
        <img src="https://images.pexels.com/photos/6311585/pexels-photo-6311585.jpeg" 
        className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
        <h5 className="text-lg font-bold text-[#ff7b00]">Ali Hussein</h5>
        <p className="text-md text-[#7e6b6b] pb-8 font-semibold">
          “We have been able to cancel so many other subscriptions since
          using CVV Shop. There is no more cross-channel confusion and
          everyone is much more focused.”
        </p>
      </div>

       {/*Testimonial a*/}
       <div className="flex flex-col items-center justify-center md:pt-0 p-6 space-y-6 rounded-lg  md:w-1/3">
        <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
        <h5 className="text-lg font-bold text-[#ff7b00]">Ann Kandie</h5>
        <p className="text-md  text-[#7e6b6b] pb-12 font-semibold">
        “CVV Shop is the ultimate high tech modern shop. The ability to make the world a little place
          in terms of the currency access status is what is the most amazing thing. Would recommend 
          anyone all day”
         
        </p> 
      </div>

       {/*Testimonial c*/}
      <div className="flex flex-col items-center pt-0 p-6 space-y-6 rounded-lg  md:flex md:w-1/3">
        <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
        <h5 className="text-lg font-bold text-[#ff7b00]">Richard Martin</h5>
        <p className="text-md text-[#7e6b6b] pb-8 font-semibold">
        “CVV Shop has supercharged my life. Right now i own a few businesses in town
          and i&apos;m driving my first car”
         
        </p>
      </div>
    </div>
    
    <div className="my-8 p-4 animate-bounce">
      <a
        href="#home"
        className="p-3 px-6 text-white bg-[#16B97A] rounded font-semibold
         no-underline hover:bg-[#b7db37]"
        >Get Started</a >
    </div>

  </div>
  </div>
  )
}

export default Testimonials