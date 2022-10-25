import { useState, useEffect } from "react";
import { data } from "../data/data";

function SliderDestination() {
  let destinations = data.destinations;
  const [destination, setDestination] = new useState(0);

  return (
    <>
      <section className={`lg:p-10 flex flex-col lg:flex-row items-center`}>

        {destinations.map((item, index) => (
          <article
            className={`flex flex-col lg:flex-row lg:justify-around lg:items-center card-destination ${
              destination != index && "hidden"
            } ${destination}`}
            key={index}
          >
            <img src={new URL(item.images.img, import.meta.url).href} alt={item.name}
              className="animate-brightness cursor-pointer shadow-[0_0px_100px_10px_rgba(255,255,255,0.5)] rounded-full"
            />

            <div className="w-full lg:w-1/4 flex flex-col text-white space-y-5">

              <ul className="flex space-x-4">
                {destinations.map((option, i) => (
                  <li key={i} className={`${destination === i && "active"}`}>
                    <button id={`btn_${option.name} destinations_options`}  onClick={(e) => { setDestination(i); }} >
                      {option.name}
                    </button>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-8xl">{item.name}</h3>

              <blockquote className="w-full">{item.description}</blockquote>

              <span className="w-full border-b-[0.1rem] border-gray-500 py-5"></span>

              <section className="w-full flex justify-between py-4">

                <article className="flex flex-col">
                  <span className="uppercase text-white/50">AVG. DISTANCE</span>
                  <span className="text-xl">{item.distance}</span>
                </article>

                <article className="flex flex-col">
                  <span className="uppercase text-white/50">EST. TRAVEL TIME</span>
                  <span className="text-xl">{item.travel}</span>
                </article>

              </section>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default SliderDestination;
