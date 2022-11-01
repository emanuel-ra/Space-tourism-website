import SliderTechnology from "../components/SliderTechnology"
function Body() {
  return (
    <section className='w-full mt-24 flex flex-col justify-start'>
      <article className="px-2 py-4 lg:px-48">
        <h2 className="text-2xl lg:text-3xl text-center lg:text-left">
          <span className="text-gray-500">03</span>{" "}
          <span className="text-white">SPACE LAUNCH 101</span>
        </h2>
      </article>
      <SliderTechnology />
    </section>
  );
}

export default Body;
