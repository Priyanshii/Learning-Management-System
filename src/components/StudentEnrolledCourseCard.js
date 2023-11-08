import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { AiFillCheckCircle } from 'react-icons/ai';
import { setCourseStatusComplete } from '../redux/slices/studentSlice';

function StudentEnrolledCourseCard({ courseData, studentId }) {

  const dispatch = useDispatch();

  const { id, name, instructor, thumbnail, description, duration, schedule, progress_status, level } = courseData;

  const handleCompleteCourseButton = () => {
    dispatch(setCourseStatusComplete({ studentId, courseId: id }));
  }

  return (
    <div className='w-[48%] min-w-[400px] h-[300px] border-[1px] border-solid border-[#E8E8E8] rounded-bl-2xl relative'>
      <button onClick={handleCompleteCourseButton} className='group p-2 absolute bottom-0 right-0'>
        <AiFillCheckCircle className={`${progress_status === '100%' ? "fill-green-700" : "fill-[#a39f9f]"} w-8 h-8`} />
      </button>
      <Link to={"/course-details/" + id} className='w-full'>
        <div className='flex flex-row items-start justify-start gap-6 h-full w-full'>
          <div className='flex items-center justify-center h-full w-[30%]'>
            <img src={thumbnail} alt={name} className=' h-full w-full pl-4 object-contain' />
          </div>
          <div className='flex flex-col items-start justify-center gap-1 p-6'>
            <span className='text-sm text-[#8C8C8C] font-normal'>
              {instructor}
            </span>
            <span className='text0base font-medium text-[#262626]'>
              {name}
            </span>
            <p className='text-base text-[#595959] font-normal mt-4' >
              {description}
            </p>
            <section className='w-full flex flex-col items-start justify-start gap-2 mt-8 text-[#8C8C8C]'>
              <section className='w-full flex flex-row items-center justify-start text-[#8C8C8C'>
                <span className=' border-r-[1px] border-solid border-[#aaa8a8] pr-2'>
                  Duration: {duration}
                </span>
                <span className='pl-2'>
                  {level}
                </span>
              </section>
              <span>{schedule}</span>
              <div className='flex flex-row items-center gap-2 w-full'>
                <div className='h-[10px] w-[80%] border-[1px] border-solid border-[#2c9e15] rounded-md'>
                  <div style={{ width: progress_status }} className='bg-green-500 h-full'></div>
                </div>
                <span className='text-sm font-medium text-[#8C8C8C]'>
                  {progress_status}
                </span>
              </div>
            </section>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default StudentEnrolledCourseCard;