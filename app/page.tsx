import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import Link from "next/link";
import React from "react";

interface Iproduct {
  id: number
  title: string
  price: number
  description: string
  category: string
  image:  string;
  rating: { rate: number; count: number }
}

const Page = async () => {
  const response = await fetch("https://fakestoreapi.com/products/");
  const parsedResponse: Iproduct[] = await response.json();
   
  console.log("products >>>", parsedResponse);

  return (
      <div className="gap-12 w-screen h-screen place-items-center">
       
        <Header/>
        <div className=" w-screen h-12 bg-blue-200 flex">
          <input type="search" className="border border-black rounded-[5px] m-2" />
        <button className="hover:bg-slate-800"><Image src={"/search.webp"}
        alt="icon"
        width={40}
        height={38}/></button>
        </div>
         <br />
    <div className="grid bg-white grid-cols-3 w-screen gap-12">
      
      {parsedResponse.map((pro) => (
        <div key={pro.id} className="hello bg-gray-300 gap-5 border p-2 text-left hover:shadow-md hover:shadow-red-400 hover:font-semibold hover:h-auto hover:w-[450px] hover:relative  text-base hover:bg-blue-100 cursor-pointer border-black w-[350px] h-[600px] ml-2 ">
         
          <Image className="w-screen h-[400px] p-4 "
            src={pro.image} 
            alt="all" 
            width={200}
            height={200}
          />
          <p className="display hidden">id: {pro.id}</p>
          <p>title: {pro.title}</p>
          <p>price: {`${pro.price}`}</p>
         <p className="description hidden hover:block text-wrap  ">description: {`${pro.description}`}</p>
          <p>category: {`${pro.category}`}</p>
          <p>rating: {`${pro.rating.rate} (${pro.rating.count} reviews)`}</p>
          </div >
          ))}
           
  
   

    <hr />
     
     
    <br />
    </div>
   
    <Footer/>
    
    </div>
  );
};

export default Page;



// 'use client'
// import { useState } from 'react';

// const HoverInfo = () => {
//     const [isHovered, setIsHovered] = useState(false);

//     return (
//         <div 
//             className="relative inline-block"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//         >
//             <div className="p-4 bg-blue-500 text-white rounded cursor-pointer">
//                 Hover over me!
//             </div>
//             {isHovered && (
//                 <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-gray-700 text-white text-center rounded p-2">
//                     This is the description that appears on hover.
//                 </div>
//             )}
//         </div>
//     );
// };

// export default HoverInfo;
