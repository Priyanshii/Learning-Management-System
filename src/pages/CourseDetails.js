import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CourseCurriculum from '../components/CourseCurriculum';
import { fetchCourseDetails } from '../redux/slices/coursesSlice';
import { BsChevronDown } from 'react-icons/bs';

const CourseDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [showCurriculum, setShowCurriculum] = useState(false);

  const { id, name, instructor, thumbnail, enrollmentStatus, description, duration, schedule, likes_count, location, level, prerequisites, syllabus } = useSelector((store) => store.courses.courseDetails);

  useEffect(() => {
    console.log(params.id);
    dispatch(fetchCourseDetails(params.id))
  }, [params.id]);

  return (
    <article className='block m-auto max-w-[1336px] my-12'>
      <div className='w-full flex flex-col gap-12 px-12'>
        <section className='w-full flex flex-row md:flex-col items-center justify-start gap-20'>
          <section className='flex flex-col items-center justify-start gap-6 '>
            <section className='w-full flex flex-col items-start justify-start gap-2'>
              <span className='font-medium text-4xl text-center'>
                {name}
              </span>
              <span className='font-normal text-lg '>
                {description}
              </span>
            </section>
            <section className='w-full'>
              <span className='text-[#595959]'>
                By: {instructor}
              </span>
              <section className='w-full flex flex-row md:flex-col md:items-start items-center justify-start mt-8 text-[#8C8C8C]'>
                <span className='md:border-none border-r-[1px] border-solid border-[#aaa8a8] pr-2'>Duration: {duration}
                </span> 
                <span className='md:border-none border-r-[1px] border-solid border-[#aaa8a8] pr-2 pl-2 md:p-0'>
                  {level}
                </span>
                <span className='pl-2 md:p-0'>
                  {location}
                </span>
                <span className='ml-auto border-[1px] border-solid border-[#aaa8a8] rounded-2xl px-3 py-2'>
                  {enrollmentStatus}
                </span>
              </section>
              <section>
                <span className='text-[#8C8C8C] text-sm '>
                  {schedule}
                </span>
              </section>
            </section>
          </section>
          <section className='h-[300px] md:order-first'>
            <img src={thumbnail} alt={name} className='h-full object-contain' />
          </section>
        </section>
        <section className='w-full flex flex-col items-start justify-center gap-14'>
          <section className='flex flex-col items-start justify-normal gap-6'>
            <span className='text-3xl font-medium text-[#313131]'>
              Prerequisites
            </span>
            <section className='flex flex-col items-start justify-normal gap-3 pl-2'>
              {
                prerequisites?.map((item, index) => {
                  return (
                    <span className='text-base text-[#414141]'>{index + 1}. {item}</span>
                  )
                })
              }
            </section>
          </section>
          <section className='mt-4 w-[80%] flex flex-col items-start justify-normal gap-6'>
            <button className='text-3xl w-full px-4 py-2 rounded-md bg-[#f1efef] font-medium text-[#313131] flex flex-row items-center justify-between' onClick={() => { setShowCurriculum(!showCurriculum) }}>
              Course Content
              <BsChevronDown className={`${!showCurriculum && "rotate-180"}`} />
            </button>
            <section className='flex flex-col items-start justify-normal gap-1 w-full p-5'>
              {
                showCurriculum
                &&
                <div className='w-[100%] flex flex-col items-start justify-normal gap-10'>
                  {
                    syllabus?.map((item, index) => {
                      const lecture = { ...item, index };
                      return (
                        <CourseCurriculum lecture={lecture} />
                      )
                    })
                  }
                </div>
              }
            </section>
          </section>
        </section>
      </div>
    </article>
  )
}

export default CourseDetails