import { useState, useEffect } from "react";
import { data } from "../data/data";

function SliderCrew() {

  let crews = data.crew;
  const [item, setItem] = new useState(0);

  return (
    <section className={`flex flex-col`}>
        {
            crews.map( (crew,index) => (
                <article className={`grid lg:grid-cols-2 md:min-h-[800px] lg:relative ${item != index && "hidden transition-all ease-in-out delay-100"} `}>

                    <article className="flex flex-col lg:justify-around  order-3 md:order-1 md:h-1/4 lg:h-full z-10 ">

                        <div className="h-1/2 md:h-full flex flex-col items-center lg:items-start lg:justify-center lg:space-y-3 order-2 lg:order-1">
                            <h3 className="text-white/50 uppercase text-2xl text-center lg:text-left lg:text-4xl">{ crew.role }</h3>
                            <h4 className="text-white text-4xl lg:text-6xl text-center lg:text-left">{ crew.name }</h4>
                            <blockquote className="text-white w-full text-center md:w-11/12 lg:text-left p-4 lg:p-0 lg:w-1/2">{crew.bio}</blockquote>
                        </div>

                        <ul className="flex justify-center space-x-4 order-1 lg:justify-start md:order-2 lg:order-2 lg:my-7 ">
                            {crews.map((dot, i) => (
                            <li key={i}>
                                <button className={`dots-crew ${item === i && "active"}`} id={`btn_${dot.name} destinations_options`}  onClick={(e) => { setItem(i); }} >
                                </button>
                            </li>
                            ))}
                        </ul>          
                                      
                    </article>

                    <img src={crew.images.img} alt={crew.name}  className="order-1 md:order-2 md:absolute md:left-0 md:right-0 lg:left-auto md:bottom-0 w-48 md:w-1/2 lg:w-1/3 m-auto" />
                    <span className="border-b-[1px] border-white/50 mb-3 order-2 w-[90vw] m-auto md:hidden"></span>
                </article>
            ))
        }
    </section>
  );
}

export default SliderCrew;
