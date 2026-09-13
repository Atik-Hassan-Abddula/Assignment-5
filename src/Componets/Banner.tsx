// import React from "react";
import Herologo from "../assets/banner-stack.png"

const Banner = () => {
  return (
    <div className="flex justify-between mt-10 container mx-auto px-8">
      <div>
        <h1 className="text-4xl font-bold ">Build Your Ideal <br />
             <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">Development Stack</span></h1>
        <p className="pt-4">
          Explore frontend, backend, database, and tooling options, <br /> compare them
          side by side, and put together the stack that fits your next project.
        </p>
       <div className="mt-9">
         <button className="bg-[#F35E58] p-3 mr-2.5">Explore Technologies</button>
        <button>Learn More</button>
       </div>

      </div>

      <div className="w-[350px] ">
      <img src={Herologo} alt="" />
      </div>
    </div>
  );
};

export default Banner;