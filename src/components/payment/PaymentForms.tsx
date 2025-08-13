import { useState } from "react"

export const IndividualForm = ({ isFamily, setIsFamily }: { isFamily: boolean, setIsFamily: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div>
      <button className='bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white text-[18px] font-bold mt-6 self-end lg:w-[50%] self-center m-auto'
        onClick={() => setIsFamily(!isFamily)}
      >Pay ₦20,000</button>
    </div>
  )
}

export const FamilyForm = ({ isFamily, setIsFamily }: { isFamily: boolean, setIsFamily: React.Dispatch<React.SetStateAction<boolean>> }) => {

  const [emailInput, setEmailInput] = useState(new Array(4).fill(""))

  return (
    <div >
      <div className="lg:w-[50%] self-center m-auto mb-8 ">
        <h1 className="text-2xl text-slate-gray font-bold mt-8">Add other users</h1>
        <p className="text-sub-gray text-[18px]">Enter the email address of the users you want to add on the family plan (You can add up to 4)</p>
      </div>
      <div className="flex flex-wrap justify-between ">
        {emailInput.map((email, index) =>
          <div className="sm:w-[46%] lg:w-[48%] ">
            <p className="text-sub-gray text-xs text-left mb-2">Email address</p>
            <input type="email"
              className={`border-1 px-4 py-[10px] mb-6 w-full rounded-[10px] focus:outline-primary-green  focus:outline-2  ${email ? 'outline-primary-green border-primary-green ' : 'border-sub-gray'}`}
              value={email}
              onChange={(e) => {
                setEmailInput([
                  ...emailInput.map((data, indx) => { return indx == index ? e.target.value : data; }
                  )])
              }
              }
            />
          </div>
        )}
      </div>
      <button className='bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white  text-[18px] font-bold mt-6 self-end lg:w-[50%] self-center m-auto'
        onClick={() => setIsFamily(!isFamily)}
      >Pay ₦90,000</button>
    </div>
  )
}
