import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <div className='sticky top-0 z-10 bg-white w-full h-auto px-8 py-2 shadow-md border-b-[1px] border-solid border-[#f0eeee]'>
      <div className='flex items-center justify-start'>
        <section className='m-1 text-xl'>
          Alemeno.LMS
        </section>
        <section className='flex flex-row items-center justify-center gap-6 ml-14'>
          <Link to={"/dashboard"} className="text-[#262626] text-sm font-medium text-center hover:text-[#7d37be]">
            My learning
          </Link>
          <Link to={"/"} className="text-[#262626] text-sm font-medium text-center hover:text-[#7d37be]">
            All courses
          </Link>
        </section>
      </div>
    </div>
  )
}

export default Header;
