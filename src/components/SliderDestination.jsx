import {useState} from 'react'
import { data } from "../data/data";



function SliderDestination() {
  let destinations = data.destinations;
  const [destination, setDestination] = new useState(0);
  return (
    <>
      <section className={`flex flex-wrap p-12`}>
        {destinations.map((item, index) => (
            
          <article className={`${destination!=index && 'hidden'} ${destination}`} key={index}>
            <img
              src={new URL(item.images.img, import.meta.url).href}
              alt={item.name}
            />

            <div className="flex flex-col text-white">
              <ul className="flex space-x-2">
                {destinations.map((option, i) => (
                  <li key={i}>
                    <button onClick={()=>{setDestination(i)}}>{option.name}</button>
                  </li>
                ))}
              </ul>
              <blockquote>{item.description}</blockquote>
              <span className="w-full border-b-[0.1rem] border-gray-500"></span>

              <section className="flex">
                <article>
                  <span className="uppercase">AVG. DISTANCE</span>
                  <span>{item.distance}</span>
                </article>

                <article>
                  <span className="uppercase">EST. TRAVEL TIME</span>
                  <span>{item.travel}</span>
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
