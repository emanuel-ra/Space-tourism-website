import {data} from "../data/data"

function SliderDestination() {
    let destinations = data.destinations;


  return (    
    <>
        <section className="bg-white">
            {destinations.map( (item,index) => (( 
                
                
               
                <article className="" key={index}>
                    <img src={new URL(item.images.png, import.meta.url).href} alt={item.name} />
                </article>
            )))}
        </section>
    </>
  )
}

export default SliderDestination