import { useState } from "react"
import { IndividualForm, FamilyForm } from "../../components/payment/PaymentForms"
import { usePayment } from "../../context/PaymentContext";

import BackButton from "../../components/back-button/BackButton";


function IndividualPayment() {
  const [isFamily, setIsFamily] = useState(false)
  const [cardName, setCardName] = useState('')
  const [cardNumber, setCardNumnber] = useState('')
  const [expiryDate, setExpiryDate] = useState('')
  const [cvv, setCvv] = useState('')
  const { selectedCourse, selectedPayment } = usePayment()
  const numberValid = /^\d+$/
  const expiryCheck = /^$/

  return (
    <div className="text-center py-20 px-20">
      <div className="content-center">

        <BackButton />

        <div className="mb-10">
          <h1 className="text-[40px] font-bold text-slate-gray">Make Payment</h1>
          <p className="text-[18px] text-[#7F8C8D]">Kindly enter the correct details to make payment for your selected course</p>
        </div>
        <div className="lg:flex  justify-between items-stretch">
          <div className="flex flex-col justify-between lg:w-[48%] h-[276px]   sm:w-full sm:mb-5">
            <p className="text-sub-gray text-xs text-left mb-2">Course</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] mb-5 text-left">{selectedCourse.title}</div>
            <p className="text-sub-gray text-xs text-left mb-2">Plan</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] mb-5 text-left">{selectedPayment.type}</div>
            <p className="text-sub-gray text-xs text-left mb-2">Price</p>
            <div className="border-1 border-primary-green px-4 py-[10px] text-sm text-slate-gray rounded-[10px] text-left mb-5">{selectedPayment.price}</div>
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
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 16);
                  let display = value
                  value.length > 12 ? (display = value.slice(0, 4) + ' - ' + value.slice(4, 8) + ' - ' + value.slice(8, 12) + ' - ' + value.slice(12, 16)) : console.log('hi')
                  setCardNumnber(display);
                }}
              />
            </div>
            <div className="flex  w-full justify-between sm:gap-2 mb-5">
              <div className="flex flex-col  basis-7/15">
                <p className="text-sub-gray text-xs text-left mb-2">Expiry date</p>
                <input type="text" name="" id="" className={`border-1 px-4 py-[10px] rounded-[10px] focus:outline-primary-green ${expiryDate ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                  value={expiryDate}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
                    let display = value
                    value.length > 2 ? (display = value.slice(0, 2) + ' / ' + value.slice(2, 4), console.log(value.length)) : console.log(value)
                    setExpiryDate(display);
                  }}
                />
              </div>
              <div className="flex flex-col basis-7/15">
                <p className="text-sub-gray text-xs text-left mb-2">CVV</p>
                <input type="text" name="" id="" className={`border-1 px-4 py-[10px] rounded-[10px] focus:outline-primary-green ${cvv ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
                  value={cvv}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                    setCvv(value);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  mt-2">
          {isFamily ? <IndividualForm isFamily={isFamily} setIsFamily={setIsFamily} /> : <FamilyForm isFamily={isFamily} setIsFamily={setIsFamily} />}
        </div>
      </div>
    </div>
  )
}

export default IndividualPayment
