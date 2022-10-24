import SliderDestination from "../components/SliderDestination"

function Body() {
  
  return (
    <section className="w-full mt-48 px-48">
        <article className="">
            <h2 className="text-3xl"><span className="text-gray-500">01</span> <span className="text-white">PICK YOUR DESTINATION</span></h2>
        </article>                
       <article className="w-[90%]">
        <SliderDestination />
       </article>
    </section>
  )
}

export default Body