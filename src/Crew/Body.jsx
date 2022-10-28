import SliderCrew from '../components/SliderCrew'

function Body() {
  return (
    <section className='w-full mt-24 lg:px-48 lg:relative'>     
        <article className="px-2 py-4 lg:absolute lg:top-10">
          <h2 className="text-center lg:text-left text-2xl lg:text-3xl"><span className="text-gray-500">02</span> <span className="text-white uppercase">Meet your crew</span></h2>
        </article>
        <SliderCrew />
    </section>
  )
}

export default Body