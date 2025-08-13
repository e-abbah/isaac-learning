import { useState } from "react"
import { IndividualForm, FamilyForm } from "../../components/payment/PaymentForms"
import arrow from "../../assets/images/icons/payment-icons/arrow-left.png"
import { Link, Outlet } from "react-router-dom"


function IndividualPayment() {
  const [isFamily, setIsFamily] = useState(false)
  const [cardName, setCardName] = useState('julius')
  const [cardNumber, setCardNumnber] = useState('0000-0000-0000-0000')
  const [expiryDate, setExpiryDate] = useState('25/24')
  const [cvv, setCvv] = useState('000')

  return (
    <div className="text-center py-20 px-20">
      <div className="content-center">
        <Link to='/price'>
          <div className="text-slate-gray p-[10px] text-[14px] font-bold w-[91px] justify-between flex bg-[#EBEBEB] rounded-xl cursor-pointer">
            <img src={arrow} />
            <p>Back</p>
          </div></Link>
        <div className="mb-10">
          <h1 className="text-[40px] font-bold text-slate-gray">Make Payment</h1>
          <p className="text-[18px] text-[#7F8C8D]">Kindly enter the correct details to make payment for your selected course</p>
        </div>
        <div className="lg:flex  justify-between items-stretch">
          <div className="flex flex-col justify-between lg:w-[48%] h-[276px]   sm:w-full sm:mb-5">
            <p className="text-sub-gray text-xs text-left mb-2">Course</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] mb-5 text-left">CIPM HR exam</div>
            <p className="text-sub-gray text-xs text-left mb-2">Plan</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] mb-5 text-left">Individual</div>
            <p className="text-sub-gray text-xs text-left mb-2">Price</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] text-left mb-5">₦20,000</div>
          </div>
          <div className="lg:w-[48%] items-start  text-left max-h-[276px]  content-between flex flex-col justify-between sm:w-full">
            <div className=" w-full">
              <p className="text-sub-gray text-xs text-left mb-2">Card name</p>
              <input type="text" name="" id="" className={`border-1 px-4 py-[10px] mb-6 w-full rounded-[10px] focus:outline-primary-green ${cardName ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
              />
            </div>
            <div className=" w-full">
              <p className="text-sub-gray text-xs text-left mb-2">Card number</p>
              <input type="text" name="" id="" className={`border-1 px-4 py-[10px] mb-6 w-full rounded-[10px] focus:outline-primary-green ${cardNumber ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                value={cardNumber}
                onChange={(e) => setCardNumnber(e.target.value)}
              />
            </div>
            <div className="flex  w-full justify-between sm:gap-2 mb-5">
              <div className="flex flex-col  basis-7/15">
                <p className="text-sub-gray text-xs text-left mb-2">Expiry date</p>
                <input type="text" name="" id="" className={`border-1 px-4 py-[10px] rounded-[10px] focus:outline-primary-green ${expiryDate ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="flex flex-col basis-7/15">
                <p className="text-sub-gray text-xs text-left mb-2">CVV</p>
                <input type="text" name="" id="" className={`border-1 px-4 py-[10px] rounded-[10px] focus:outline-primary-green ${cvv ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-2">
          {isFamily ? <IndividualForm isFamily={isFamily} setIsFamily={setIsFamily} /> : <FamilyForm isFamily={isFamily} setIsFamily={setIsFamily} />}
        </div>
      </div>
      <Outlet />
    </div>
  )
}

export default IndividualPayment
