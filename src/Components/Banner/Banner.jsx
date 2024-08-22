import React from "react";

const Banner = () => {
  return (
    <div className="mt-6">
        <img src="/image/Rectangle 4288.png" className="mx-auto opacity-10" alt=""  />
       <div className="lg:absolute  w-full mx-auto lg:-mt-96 ">
       <h1 className="lg:text-4xl sm:text-xl font-semibold text-center p-5">I Grow By Helping People In Need </h1>
        <div className="flex justify-center items-center">
            <input type="text" className="px-1 py-4 w-80 rounded-xl border-red-400" />
            <button className="px-4 text-white py-4 text-lg bg-red-500 rounded-xl">Search</button>
        </div> 
       </div>
    </div>
      
  );
};

export default Banner;
