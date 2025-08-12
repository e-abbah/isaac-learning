import Icons from '../../assets/images/payment-images/icon-banner.png'
import BackDrop from '../../assets/images/payment-images/price-backdrop.png'
import Individual from '../../assets/images/payment-images/individual-icon.png'
import Family from '../../assets/images/payment-images/family-icon.png'
import List1 from '../../assets/images/payment-images/list1-icon.png'

function PricePlan() {

  const indiBenefits: string[] = ['Full access to course', 'Modules, quizzes and mock exams', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']
  const famBenefits: string[] = ['Allows groups, team, families', 'Each user has full access to preferred course', 'Community and daily nuggets', 'No in-app purchases', 'Unlimited learning']

  return (
    <div className='flex w-screen bg-gradient-to-b from-white via-[#B4E4D4]  to-[#00A36C] py-18 lg:px-24 sm:px-12'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className=' rounded-sm text-2xl text-black '>
          <div className='mb-10 '>
            <h1 className='text-[#00A36C] text-4xl! mb-2 font-bold'>Choose a price plan for CIPM Exam</h1>
            <p className='text-[#7F8C8D] text-base! mb-10'>Select the payment plan that feel just right for you. Small investment, huge productivity.</p>
            <img src={Icons} alt="" className='w-full  justify-self-center' />
            <div className='flex justify-between'>
              <div className='rounded-2xl bg-cover h-screeen bg-center mt-10 flex-col content-start p-8 justify-items-start basis-5/11' style={{ backgroundImage: `url(${BackDrop})` }}>
                <img src={Individual} alt="" className='mb-6' />
                <h2 className='mb-6' >Individual</h2>
                <p className='mb-6' >For a single user</p>
                <h3 className='text-[#414D58] text-5xl font-extrabold mb-6'>₦20,000</h3>
                <hr className='my-10 border-[#7F8C8D] w-full' />
                <ul>{indiBenefits.map((benefit) => <li className='flex'><img src={List1} className='w-[32px] h-[32px] mr-2' /><p className='text-left'>{benefit}</p></li>)}
                </ul>
                <button className='bg-[#00A36C] p-2 rounded-3xl! w-full bottom-0 text-white text-base mt-10 self-end'>Choose Plan</button>
              </div>
              <div className='bg-gradient-to-b from-[#57DBAE] to-[#1F664E] rounded-xl bg-cover h-screeen bg-center mt-10 flex-col content-start p-8 justify-items-start basis-5/11 text-[#FDFEFE]' >
                <img src={Family} alt="" className='mb-6' />
                <h2 className='mb-6' >Family</h2>
                <p className='mb-6' >Users up to 5</p>
                <h3 className='text-5xl font-extrabold mb-6'>₦90,000</h3>
                <hr className='my-10 border-[#FDFEFE] w-full' />
                <ul>{famBenefits.map((benefit) => <li className='flex'><img src={List1} className='w-[32px] h-[32px] mr-2' /><p className='text-left'>{benefit}</p></li>)}
                </ul>
                <button className='bg-[#FDFEFE] p-2 rounded-3xl! w-full bottom-0 text-[#00A36C] text-base mt-10 self-end'>Choose Plan</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PricePlan

