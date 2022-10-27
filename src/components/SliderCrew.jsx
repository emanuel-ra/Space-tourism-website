import { useState, useEffect } from "react";
import { data } from "../data/data";

function SliderCrew() {

  let crews = data.crew;
  const [item, setItem] = new useState(0);

  return (
    <section className={`flex flex-col`}>
        {
            crews.map( (crew,index) => (
                <article className={`w-full flex justify-center ${item != index && "hidden"} `}>
                    <article className="w-1/2">
                        <h3 className="text-white/50 uppercase">{ crew.role }</h3>
                        <h4 className="text-white">{ crew.name }</h4>
                        <blockquote className="text-white">{crew.bio}</blockquote>

                        <ul className="flex justify-center lg:justify-start space-x-4 my-7">
                            {crews.map((dot, i) => (
                            <li key={i} className={`${item === i && "active"}`}>
                                <button className="w-4 h-4 rounded-full bg-white/50" id={`btn_${dot.name} destinations_options`}  onClick={(e) => { setItem(i); }} >
                               
                                </button>
                            </li>
                            ))}
                        </ul>
                        
                    </article>
                    <img src={crew.images.img} alt={crew.name}  className="w-1/4" />
                </article>
            ))
        }
    </section>
  );
}

export default SliderCrew;
