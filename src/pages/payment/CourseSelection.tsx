import CIPM from '../../assets/images/payment-images/cipm-logo.png'
import ICAN from '../../assets/images/payment-images/ican-logo.png'
import MDCN from '../../assets/images/payment-images/mdcn-logo.png'
import COREN from '../../assets/images/payment-images/coren-logo.png'
import BAR from '../../assets/images/payment-images/bar-logo.png'
import WAEC from '../../assets/images/payment-images/waec-logo.png'

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
      image: MDCN,
      title: 'MDCN LICENSING EXAM',
      description: 'Pass the MDCN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: COREN,
      title: 'COREN ENGINEERING EXAM',
      description: 'Ace COREN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: BAR,
      title: 'BAR EXAM',
      description: 'Excel in ICAN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: WAEC,
      title: 'WAEC',
      description: 'Pass WAEC exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
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
      image: MDCN,
      title: 'MDCN LICENSING EXAM',
      description: 'Pass the MDCN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: COREN,
      title: 'COREN ENGINEERING EXAM',
      description: 'Ace COREN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: BAR,
      title: 'BAR EXAM',
      description: 'Excel in ICAN exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    },
    {
      image: WAEC,
      title: 'WAEC',
      description: 'Pass WAEC exam  by taking quizzes and mock exam, buidling networks in the community and pro tips from mentors',
    }
  ]

  return (
    <div className='py-24 lg:px-32 sm:px-8 text-center'>
      <div className=' rounded-sm text-2xl text-black '>
        <div className='mb-10'>
          <h1 className='text-[#414D58] text-4xl! mb-2 font-bold'>Welcome to Isaac Learning System!</h1>
          <p className='text-[#414D58] text-2xl!'>Choose a course to begin your learning journey</p>
        </div>
        <div className='flex flex-wrap justify-between '>
          {courses.map((course) =>
            <div className='bg-white flex-col items-stretch  mb-10 lg:basis-8/25 sm:basis-12/25  justify-center align-middle px-6 rounded-[10px] border-1  border-[#7F8C8D] py-10'>
              <div className=' h-full grid justify-end content-between'>
                <img src={course.image} className='self-center justify-self-center ' />
                <h1 className='text-2xl! font-extrabold text-black mt-6 '>{course.title}</h1>
                <p className='text-[#7F8C8D] text-base mt-4 '>{course.description}</p>
                <div className='justify-items-end '><button className='bg-[#00A36C] p-6 rounded-xl!  w-full bottom-0 text-white text-base mt-4 self-end'>Select Course</button></div>
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default CourseSelection