import React from 'react'
import CIPM from '../../assets/images/payment-images/cipm-logo.png'
import ICAN from '../../assets/images/payment-images/ican-logo.png'

function CourseSelection() {
  const courses = [
    {
      image: CIPM,
      title: 'CIPM HR EXAM',
      description: 'Ace CIPM exam by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: ICAN,
      title: 'ICAN EXAM',
      description: 'Excel in ICAN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: ICAN,
      title: 'ICAN EXAM',
      description: 'Excel in ICAN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: ICAN,
      title: 'ICAN EXAM',
      description: 'Excel in ICAN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    }
  ]

  return (
    
    <div className='bg-green-100 py-24'>
      <h1>Okogod</h1>
      <div className='bg-amber-100 rounded-sm text-2xl text-black '>
        <div className='mb-10'>
          <h1 className='text-[#414D58] text-4xl! mb-2 font-bold'>Welcome to Isaac Learning System!</h1>
          <p className='text-[#414D58] text-2xl!'>Choose a course to begin your learning journey</p>
        </div>
        <div className='flex flex-wrap justify-around'>
          {courses.map((course) =>
            <div className='bg-white flex-col sm:basis-2/7 mb-10 justify-center align-middle px-6 rounded-sm border-1  border-[#7F8C8D] py-10'>
              <img src={course.image} className='self-center justify-self-center' />
              <h1 className='text-2xl! font-extrabold text-black mt-6'>{course.title}</h1>
              <p className='text-[#7F8C8D] text-base mt-4'>{course.description}</p>
              <button className='bg-[#00A36C] p-10 rounded-xl text-white text-base mt-4'>Select Course</button>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default CourseSelection