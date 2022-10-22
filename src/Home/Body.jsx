import React from "react";

function Body() {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-2 px-10 py-5 lg:p-24 lg:h-[70vh] font-barlow text-center lg:text-left mt-24 lg:mt-0">
     
      <article className="flex flex-col text-white space-y-3 md:mt-24 lg:pl-36 lg:space-y-5 lg:justify-start ">
        <h1 className="text-1xl md:text-4xl lg:text-5xl font-light uppercase">So, you want to travel to</h1>
        <h2 className="text-6xl md:text-[9.5rem] uppercase">Space</h2>
        
        <blockquote className="text-lg  md:w-1/2 md:mx-auto lg:mx-0 lg:w-[60%]">
          Let’s face it; if you want to go to space, you might as 
          well genuinely go to outer space and not hover kind of 
          on the edge of it. Well sit back, and relax because we’ll 
          give you a truly out of this world experience!
        </blockquote>
      </article>

      <article className="flex items-center justify-center">
        <div className="flex items-center rounded-full w-[55%] h-[100%] md:w-[40%] md:h-[90%] lg:w-[40%] lg:h-[70%] lg:p-10 hover:bg-white/25 hover:backdrop-blur-sm ">
            <button className="bg-white h-full w-full  rounded-full text-2xl  md:text-4xl shadow-lg uppercase">Explore</button>
        </div>
      </article>

    </article>
  );
}

export default Body;
