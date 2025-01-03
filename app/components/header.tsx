import React from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div className="banner w-auto h-auto">
   
    <div className=" bg-gray-200 w-auto h-[100px]">
      
      <div  className=" grid justify-center mobile:w-screen w-screen h-[100px] ">
      
        <div className=" flex justify-center  place-items-center mobile:w-auto   w-screen h-[100px] top-[29px] left-[54] "> 
      
        <div className=" grid mobile:w-auto  grid-cols-2 w-[1286px]  h-[48px] top-[29px] left-[54] ">
      
        
         <div  className="frame168 mobile:w-auto  mobile:place-items-center mobile:justify-between flex place-items-center text-center w-auto h-[48px] top-[29px] left-[54]  ">
     
          <p className="font-mones text-[34px]  text-center font-bold">Store.AR</p> 
          

          </div>    
    
         <div className=" flex gap-5 grid-cols-4  justify-items-end mobile:grid-cols-2 place-items-center mt-3 w-auto h-6 ">
      
         <Link href="/"> <p className=" left-[505px] top-[38]  font-medium text-base">
            Home
          </p>
         </Link>
         <Link href="/shop"><p className=" left-[628px] top-[38] font-medium text-base">
            Shop
          </p></Link>
          <Link href={"/blog"}>
          <p className=" left-[754px] top-[38] font-medium text-base">
            Blog
          </p>       </Link>  
         <Link href={"/contact"}> <p className=" left-[869px] top-[38] font-medium text-base">
            Contact
          </p></Link>

          </div>

           </div> 
        </div>
      </div>        
    </div>
  </div>

  );
}

export default Header;