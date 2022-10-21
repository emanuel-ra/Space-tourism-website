import React from "react";

function Body() {
  return (
    <article className="w-full grid grid-cols-1 lg:grid-cols-2 p-24 h-[70vh] font-barlow">
      <article className="text-white pl-36 space-y-5">
        <h1 className="text-5xl font-light">So, you want to travel to</h1>
        <h2 className="text-[9.5rem] font-semibold">Space</h2>
        <blockquote className="text-lg">
          Let’s face it; if you want to go to space, you might as <br />
          well genuinely go to outer space and not hover kind of <br />
          on the edge of it. Well sit back, and relax because we’ll <br />
          give you a truly out of this world experience!
        </blockquote>
      </article>
      <article className="flex items-center justify-center">
        <div className="flex items-center rounded-full justify-center w-[40%] h-[70%] p-10 hover:bg-white/25 hover:backdrop-blur-sm">
            <button className="bg-white h-full w-full  rounded-full text-4xl shadow-lg">Explore</button>
        </div>
      </article>
    </article>
  );
}

export default Body;
