export default function Modal({ isFamily, onClose, children }: { isFamily: boolean; onClose: any; children: any }) {
  return (
    <div onClick={(e) => e.stopPropagation()} className={`fixed inset-0 flex justify-center items-center transition-colors text-black
    ${isFamily ? "visible bg-black/20" : "invisible"}`}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-3xl shadow p-6 sm:w-[52%] md:w-[50%] lg:w-[25%] transition-all 
        ${isFamily ? "scale-100 opacxity-100" : "scale-125 opacity-0"}`}>
        {children}
      </div>
    </div>
  )
}
