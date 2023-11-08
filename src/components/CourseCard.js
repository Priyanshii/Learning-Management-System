import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import socketIOClient from 'socket.io-client';
import { AiFillLike } from 'react-icons/ai';

function CourseCard({ courseData }) {

  const { id, name, instructor, thumbnail, description, duration, likes_count, level } = courseData;

  return (
    <div className='w-[48%] lg:w-[66%] min-w-[300px] min-h-[260px] border-[1px] border-solid border-[#E8E8E8] rounded-bl-2xl'>
      <Link to={"/course-details/" + id} className='w-full'>
        <div className='flex flex-row items-start justify-start lg:flex-col lg:items-center lg:justify-normal gap-6 h-full w-full'>
          <div className='flex place-self-center items-center justify-center h-full w-[30%] lg:w-full py-4 lg:h-[100px] lg:border-b-[1px] lg:border-solid lg:border-[#E8E8E8]'>
            <img src={thumbnail} alt={name} className=' h-full w-full pl-4 object-contain' />
          </div>
          <div className='flex flex-col items-start justify-center gap-1 p-6'>
            <span className='text-sm text-[#8C8C8C] font-normal'>{instructor}</span>
            <span className='text0base font-medium text-[#262626]'>{name}</span>
            <p className='text-base text-[#595959] font-normal mt-4' >
              {description}
            </p>
            <section className='w-full flex flex-row items-center justify-start mt-8 text-[#8C8C8C]'>
              <span className=' border-r-[1px] border-solid border-[#aaa8a8] pr-2'>Duration: {duration}</span>
              <span className='pl-2'>{level}</span>
            </section>
            <section className='text-gray-500 flex flex-row items-center justify-start gap-3 mt-4'>
              <AiFillLike className='w-7 h-7'/>
              {likes_count}
            </section>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CourseCard;