import SliderDestination from "../components/SliderDestination"

function Body() {
  
  return (
    <section className="w-full mt-24 lg:mt-48 lg:px-48 ">
        <article className="px-2 py-2">
            <h2 className="text-2xl lg:text-3xl lg:pl-48"><span className="text-gray-500">01</span> <span className="text-white">PICK YOUR DESTINATION</span></h2>
        </article>                
       <article className="w-full">
        <SliderDestination />
       </article>
    </section>
  )
}

export default Body