import tool from '../../assets/images/room.png';

const Tools = () => {
  return (
    <div className='py-5 px-2 md:px-10'>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="bg-white rounded-xl p-3 flex items-center gap-2">
          <img className='w-10' src={tool} alt="" />
          <h3 className='font-medium'>Office</h3>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center gap-2">
          <img className='w-10' src={tool} alt="" />
          <h3 className='font-medium'>School</h3>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center gap-2">
          <img className='w-10' src={tool} alt="" />
          <h3 className='font-medium'>Business</h3>
        </div>
        <div className="bg-white rounded-xl p-3 flex items-center gap-2">
          <img className='w-10' src={tool} alt="" />
          <h3 className='font-medium'>Industrial</h3>
        </div>
      </div>
    </div>
  );
};

export default Tools;