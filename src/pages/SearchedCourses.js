import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import SearchBarContainer from '../components/SearchBarContainer';
import { getSearchedCourses } from '../redux/slices/coursesSlice';

const SearchedCourses = () => {

  const dispatch = useDispatch();
  const searchedCourses = useSelector((store) => store.courses.searchedCourses);
  const coursesList = useSelector((store) => store.courses.coursesList);

  const [searchParams, setSearchParams] = useSearchParams();

  const searchInput = searchParams.get('search');

  useEffect(() => {
    dispatch(getSearchedCourses({ coursesList, searchInput }));
  }, [searchParams])

  return (
    <div>
      <SearchBarContainer />
      <section className='bg-white mt-12 mx-12'>
        <section className='flex flex-col items-start justify-start gap-6'>
          <span className='font-medium text-base text-[#262626]'>Searched Courses</span>
          <section className='w-full flex flex-row flex-wrap items-center justify-start gap-10'>
            {
              searchedCourses.map((course, index) => {
                return (
                  <CourseCard key={index} courseData={course} />
                )
              })
            }
          </section>
        </section>
      </section>
    </div>
  )
}

export default SearchedCourses;