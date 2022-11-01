import { useState, useEffect } from "react";
import { data } from "../data/data";

function SliderTechnology() {
  let technologies = data.technology;
  const [current, setCurrent] = new useState(0);

  return (
    <section className={`w-full flex flex-col `}>
      {
        technologies.map( (item,index) => (
          <article key={index} className={`grid grid-cols-1 lg:grid-cols-2 ${current != index && "hidden"}`}>
              
              <article className="grid grid-cols-1 lg:grid-cols-2 order-2 lg:order-1">                
                
                <div className="flex justify-center items-center p-4">
                  <ul className="flex lg:flex-col space-x-3 lg:space-x-0 lg:space-y-10">
                    {technologies.map((option, i) => (
                      <li key={i} className={`${current === i && "active"}`}>
                        <button className={`technology-btn border-[1px] text-white tex-xl font-bold border-white/50 w-14 h-14 rounded-full ${current === i && "active"}`} onClick={(e) => { setCurrent(i); }} >
                          {(i+1)}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-center text-white text-center lg:text-left">
                  <h3 className="text-2xl text-white/50">THE TERMINOLOGY…</h3>
                  <h4 className="uppercase text-4xl lg:text-6xl mt-3">{item.name}</h4>
                  <blockquote className="lg:pr-16 lg:mt-3">{item.description}</blockquote>
                </div>
              </article>

              <article className="flex order-1 lg:order-2 lg:justify-end">
                <picture>
                  <source media="(max-width:768px)" srcSet={item.images.landscape} />
                  <img src={item.images.portrait} alt={item.name} />
                </picture>
              </article>

            </article>
        ))
      }
    </section>
  );
}

export default SliderTechnology;
