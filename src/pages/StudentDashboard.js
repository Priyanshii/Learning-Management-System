import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import StudentEnrolledCourseCard from '../components/StudentEnrolledCourseCard';
import { fetchStudentDetails, fetchStudentEnrolledCourses } from '../redux/slices/studentSlice';

const StudentDashboard = () => {

  const dispatch = useDispatch();
  const {studentDetails, enrolledCourses} = useSelector((store) => store.student) ;
  const id = '102'

  useEffect(() => {
    dispatch(fetchStudentDetails(id));
    dispatch(fetchStudentEnrolledCourses(id));
  },[])

  console.log(enrolledCourses);
  return (
    <div className='w-full'>
    <section className='bg-white mt-12 mx-12 flex flex-col items-start gap-6'>
      <section className='flex flex-col items-start justify-center'>
        <span className='text-lg text-[#414141]'>{studentDetails.name}</span>
        <span className='text-sm text-[#595959]'>{studentDetails.email}</span>
      </section>
      <section className='flex flex-col items-start justify-start gap-6'>
        <span className='font-medium text-base text-[#262626]'>Your Courses</span>
        <section className='w-full flex flex-row flex-wrap items-center justify-start gap-10'>
          {
            enrolledCourses.map((course, index) => {
              return (
                <StudentEnrolledCourseCard key={index} courseData={course} studentId={id}/>
              )
            })
          }
        </section>
      </section>
    </section>
  </div>
  )
}

export default StudentDashboard;