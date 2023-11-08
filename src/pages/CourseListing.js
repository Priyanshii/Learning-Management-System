import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import SearchBarContainer from '../components/SearchBarContainer';
import { fetchCourses } from '../redux/slices/coursesSlice';

const CourseListing = () => {

  const dispatch = useDispatch();
  const coursesList = useSelector((store) => store.courses.coursesList);

  useEffect(() => {
    dispatch(fetchCourses());
  }, [])

  return (
    <div>
      <SearchBarContainer />
      <section className='bg-white mt-12 mx-12'>
        <section className='flex flex-col items-start justify-start gap-6'>
          <span className='font-medium text-base text-[#262626]'>All Courses</span>
          <section className='w-full flex flex-row flex-wrap items-center justify-start gap-10'>
            {
              coursesList.map((course, index) => {
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

export default CourseListing;