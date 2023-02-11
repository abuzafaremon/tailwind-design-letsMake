import search from '../../assets/images/search.png';
import user from '../../assets/images/user.png';
import all from '../../assets/images/all.png';
import cart from '../../assets/images/cart.png';

const Header = () => {
  return (
    <header className='py-5 px-2 md:px-10'>
      <div className="flex items-center justify-between gap-3">
        <div className='pr-5'>
          <h2 className='uppercase font-bold text-2xl text-white'>Office</h2>
        </div>
        <div className='flex items-center gap-2 flex-grow bg-[#30AEB8] text-white p-2 rounded-xl'>
          <img className='w-5 h-5' src={search} alt="search" />
          <input className='bg-transparent w-full border-none outline-none placeholder:text-white' type="search" name="search" id="search" placeholder='Search in the market' />
        </div>
        <a href='https://' className='bg-[#30AEB8] w-10 h-10 p-2 rounded-xl'>
          <img className='w-full' src={all} alt="All" />
        </a>
        <a href='https://' className='bg-[#30AEB8] w-10 h-10 p-2 rounded-xl'>
          <img className='w-full' src={cart} alt="Cart" />
        </a>
        <button className='flex items-center justify-between bg-white gap-2 min-w-[100px] h-10 p-2 px-6 rounded-xl'>
          <span className='uppercase font-medium text-sm'>Log in</span>
          <img className='w-4 h-w-4' src={user} alt="user" />
        </button>
      </div>
    </header>
  )
}

export default Header;