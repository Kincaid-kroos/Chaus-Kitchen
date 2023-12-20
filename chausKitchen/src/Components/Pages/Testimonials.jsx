

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
        <h5 className="text-lg font-bold text-[#ff7b00]">Ali Mohammed</h5>
        <p className="text-md text-[#7e6b6b] pb-8 font-semibold">
        “Chaus BBQ is a hidden treasure in Mombasa! The beef ribs are succulent,
         and the secret sauce adds a unique kick.
         The friendly staff and cozy atmosphere make it the perfect spot to enjoy mouthwatering BBQ”
        </p>
      </div>

       {/*Testimonial a*/}
       <div className="flex flex-col items-center justify-center md:pt-0 p-6 space-y-6 rounded-lg  md:w-1/3">
        <img src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
        <h5 className="text-lg font-bold text-[#ff7b00]">Anna Brenda</h5>
        <p className="text-md  text-[#7e6b6b] pb-12 font-semibold">
        “I stumbled upon Chaus BBQ during my visit to Mombasa, and I&apos;m so glad I did! The ambiance is relaxed, the service is excellent,
         and the lamb chops are a taste of heaven cpmpletely. An absolute gem in the heart of Mombasa City”
         
        </p> 
      </div>

       {/*Testimonial c*/}
      <div className="flex flex-col items-center pt-0 p-6 space-y-6 rounded-lg  md:flex md:w-1/3">
        <img src="https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg" className="-mt-14 w-20 h-20 rounded-full object-cover" alt="" />
        <h5 className="text-lg font-bold text-[#ff7b00]">Lloyd Austin</h5>
        <p className="text-md text-[#7e6b6b] pb-8 font-semibold">
        “Chaus BBQ delivers the authentic taste of BBQ with a coastal twist. The chicken skewers are a flavor explosion, and the samak roasts bring
         out the best of local seafood. Five stars for a memorable dining experience!”
         
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