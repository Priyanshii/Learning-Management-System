import React from 'react'
import SearchBar from '../components/SearchBar';

const SearchBarContainer = () => {
  return (
    <>
      <section className='bg-[#F8F9FA] w-full h-[180px] relative'>
        <div className='w-full h-full flex flex-col items-center justify-center'>
          <h1 className=' font-normal text-3xl text-center text-[#262626]'>Explore Alemeno.LMS</h1>
          <span className='font-normal text-sm text-center text-[#595959]'>Search for Courses</span>
          <div className='absolute bottom-[-24px] left-[50%] z-[3] translate-x-[-50%] w-[40%]'><SearchBar /></div>
        </div>
      </section>
    </>
  )
}

export default SearchBarContainer;