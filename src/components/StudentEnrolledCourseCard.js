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
    <div className='w-[48%] lg:w-[66%] min-w-[300px] min-h-[300px] border-[1px] border-solid border-[#E8E8E8] rounded-bl-2xl relative flex flex-col items-start'>
      <Link to={"/course-details/" + id} className='w-full'>
        <div className='flex flex-row items-start justify-start lg:flex-col lg:items-center lg:justify-normal gap-6 h-full w-full'>
          <div className='flex place-self-center items-center justify-center h-full w-[30%] lg:w-full py-4 lg:h-[100px] lg:border-b-[1px] lg:border-solid lg:border-[#E8E8E8]'>
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
                <div className='h-[10px] w-[70%] border-[1px] border-solid border-[#2c9e15] rounded-md'>
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
      <button onClick={handleCompleteCourseButton} className='p-1 m-1 place-self-end justify-end flex flex-col items-center'>
        <AiFillCheckCircle className={`${progress_status === '100%' ? "fill-green-600" : "fill-[#9b9797]"} w-8 h-8`} />
        <span className={`text-[12px] ${progress_status === '100%' ? "text-green-600" : "text-[#9b9797]"}`}>
          {progress_status === '100%' ? "Completed" : "Mark as Complete"}
        </span>
      </button>
    </div>
  )
}

export default StudentEnrolledCourseCard;