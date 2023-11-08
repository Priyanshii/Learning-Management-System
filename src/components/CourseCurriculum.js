import React from 'react'

const CourseCurriculum = ({ lecture }) => {
  const { index, duration, topic, content } = lecture;

  return (
    <div className='w-full flex flex-row items-start justify-center gap-6'>
      <section className='mt-1'>
        <span className='text-xl font-medium text-[#414141]'>{index + 1}.</span>
      </section>
      <section className='w-full flex flex-col items-start'>
        <div className='w-full flex flex-row items-center justify-between'>
          <span className='mr-auto text-xl font-medium text-[#222222]'>{topic}</span>
          <span className='text-lg font-medium text-[#8C8C8C]'>{duration}</span>
        </div>
        <span className='text-base font-normal text-[#414141]'>{content}</span>
      </section>
    </div>
  )
}

export default CourseCurriculum;
