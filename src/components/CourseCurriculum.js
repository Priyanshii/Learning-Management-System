import React from 'react'

const CourseCurriculum = ({ lecture }) => {
  const { index, duration, topic, content } = lecture;

  return (
    <div className='w-full flex flex-row items-start justify-center gap-6'>
      <section className='mt-1'>
        <span className='text-xl font-medium text-[#414141]'>{index + 1}.</span>
      </section>
      <div className='w-full flex flex-row md:flex-col md:items-start gap-4 md:justify-normal items-center justify-between'>
        <section className=' flex flex-col items-start'>
          <span className='mr-auto text-xl font-medium text-[#222222]'>{topic}</span>
          <span className='text-base font-normal text-[#414141]'>{content}</span>
        </section>
        <span className='w-auto px-3 py-1 text-base font-medium text-[#8C8C8C] border-[1px] border-solid border-[#8C8C8C] rounded-2xl text-center'>{duration}</span>
      </div>
    </div>
  )
}

export default CourseCurriculum;
