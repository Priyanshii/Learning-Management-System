import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { createSearchParams, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(searchParams.get("search") || '');

  const handleSearch = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    if (location.pathname !== '/search') {
      setSearchValue('');
    }
  }, [location.pathname])

  const handleEnterKey = (e) => {
    if (e.key === 'Enter') {
      searchValue !== ''
        ?
        navigate({
          pathname: '/search',
          search: createSearchParams({ search: searchValue }).toString(),
        })
        :
        navigate('/');
    }
  }

  return (
    <div className='relative h-auto w-full px-3 py-2 bg-white border-[1px] border-solid border-[#C0C3CE] rounded-sm'>
      <BiSearch className='absolute w-6 h-6 text-[#9b9999] top-[50%] left-0 translate-y-[-50%] translate-x-[50%]' />
      <input
        className="pl-8 bg-white outline-none text-sm w-[96%]"
        type="text"
        placeholder="Search"
        onKeyDown={handleEnterKey}
        onChange={(e) => handleSearch(e)}
        value={searchValue} />
    </div>
  )
}

export default SearchBar;