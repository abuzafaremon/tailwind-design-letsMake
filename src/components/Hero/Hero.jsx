import room from '../../assets/images/room.png'
const Hero = () => {
  return (
    <section className='py-5 px-2 md:px-10'>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5">
        <div className='w-full'>
          <img className='md:w-full mx-auto' src={room} alt="Room" />
        </div>
        <div className='text-white w-full'>
          <h1 className='text-6xl font-bold mb-5'>Build your dream office</h1>
          <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium, nisi sint beatae voluptas earum eaque optio dignissimos temporibus harum?</p>
          <a href="https://" className='bg-white inline-block p-2 px-8 rounded-xl text-black font-medium'>Pick up now</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;