
import { FaStar } from 'react-icons/fa';
 import  { useState } from 'react';
 import data from "../Hocs/Data.jsx"; 
 
 const Menu = () => {
  
   const [foods, setFoods] = useState(data);
 
   //   Filtering by category
   const filterCategory = (category) => {
     setFoods(
       data.filter((item) => {
         return item.category === category;
       })
     );
   };
 
   //   Filter by price
   const filterPrice = (price) => {
     setFoods(
       data.filter((item) => {
         return item.price === price;
       })
     );
   };
 
   return (
     <div id= "menu" className='md:mx-20 px-12 py-16'>
       <h1 className='text-[#7ab916] font-bold text-4xl text-center'>
         Popular Menus
       </h1>
      
       {/* Filter Row */}
       <div className='flex flex-col lg:flex-row justify-between'>
         {/* Fliter Type */}
         <div className='pb-4'>
           <p className='font-bold text-gray-700 text-3xl mt-4'>Filter by Category</p>
           <div className='flex justfiy-between flex-wrap gap-2'>
             <button
               onClick={() => setFoods(data)}
               className='m-1 border-blue-900 text-white bg-[#7c2525] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               All
             </button>
             <button
               onClick={() => filterCategory('burger')}
               className='m-1 border-blue-900 text-white bg-[#367c25] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               Burgers
             </button>
             <button
               onClick={() => filterCategory('pizza')}
               className='m-1 border-blue-600 text-white bg-[#45a9d8] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               Pizza
             </button>
             <button
               onClick={() => filterCategory('salad')}
               className='m-1 border-blue-600 text-white bg-[#d1aa3f] rounded-full py-1 px-4 hover:bg-[#16B97A] '
             >
               Salads
             </button>
             <button
               onClick={() => filterCategory('chicken')}
               className='m-1 border-blue-600 text-white bg-[#6a38c7] rounded-full py-1 px-4 hover:bg-[#16B97A] '
             >
               Chicken
             </button>
           </div>
         </div>
 
         {/* Filter Price */}
         <div className='pb-4'> 
           <p className='font-bold text-gray-700 text-3xl mt-4'>Filter by Price</p>
           <div className='flex justify-between'>
             <button
               onClick={() => filterPrice('ksh 200')}
               className='m-1 border-orange-600 text-white bg-[#6a38c7] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               ksh 200
             </button>
             <button
               onClick={() => filterPrice('ksh 450')}
               className='m-1 border-orange-600 text-white bg-[#d1aa3f] rounded-full py-1 px-4 hover:bg-[#16B97A]  '
             >
              ksh 450
             </button>
             <button
               onClick={() => filterPrice('ksh 750')}
               className='m-1 border-orange-600 text-white bg-[#45a9d8] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               ksh 750
             </button>
             <button
               onClick={() => filterPrice('Ksh 960')}
               className='m-1 border-orange-600 text-white bg-[#7c2525] rounded-full py-1 px-4 hover:bg-[#16B97A]'
             >
               ksh 960
             </button>
           </div>
         </div>
       </div>
 
       {/* Display food menus */}
       <div className='grid grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
         {foods.map((item, index) => (
           <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
             <img
               src={item.image}
               alt={item.name}
               className='w-full h-[200px] object-cover rounded-tl-3xl rounded-br-3xl'
             />
             <div className='pb-4 pt-2 ml-2'>

             <div className="flex gap-2">
                  {/* React Icons for stars */}
                <div className='flex  '>
                 <FaStar className='text-[#7eec52] size={20}' />
                 <FaStar className='text-[#7eec52] size={20}' />
                 <FaStar className='text-[#7eec52] size={20}' />
                 <FaStar className='text-[#7eec52] size={20}' />
                 <FaStar className='text-[#c5b2b2] size={20}' />
                 </div>
                 <h1>4.5</h1>
              </div>
               <p className='font-bold text-left'>{item.name}</p>
               <p>
                 <span className='bg-[#7c2525] hover:bg-[#16B97A]  text-white p-1 rounded-full text-left pt-1'>
                   {item.price}
                 </span>
               </p>

             </div>
          </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Menu;