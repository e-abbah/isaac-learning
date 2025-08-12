export const IndividualForm = ({ isFamily, setIsFamily }: { isFamily: boolean, setIsFamily: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div>
      <button className='bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white text-[18px] font-bold mt-6 self-end'
        onClick={() => setIsFamily(!isFamily)}
      >Pay ₦20,000</button>
    </div>
  )
}

export const FamilyForm = ({ isFamily, setIsFamily }: { isFamily: boolean, setIsFamily: React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <div>
      <button className='bg-[#00A36C] p-[10px] rounded-[10px]! cursor-pointer w-full bottom-0 text-white  text-[18px] font-bold mt-6 self-end'
        onClick={() => setIsFamily(!isFamily)}
      >Pay ₦90,000</button>
    </div>
  )
}
