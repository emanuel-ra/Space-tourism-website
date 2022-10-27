import SliderCrew from '../components/SliderCrew'

function Body() {
  return (
    <section className='w-full mt-24 lg:mt-48 lg:px-48'>
        <article className="px-2 py-2 mt-10">
            <h2 className="text-2xl lg:text-3xl lg:pl-48"><span className="text-gray-500">02</span> <span className="text-white uppercase">Meet your crew</span></h2>
        </article>  
        <SliderCrew />
    </section>
  )
}

export default Body