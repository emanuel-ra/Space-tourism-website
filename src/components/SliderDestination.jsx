import {data} from "../data/data"

function SliderDestination() {
    let destinations = data.destinations;
  return (
    <>
        <section className="bg-white">
            {destinations.map( item => ((
                <h1>a</h1>
            )))}
        </section>
    </>
  )
}

export default SliderDestination