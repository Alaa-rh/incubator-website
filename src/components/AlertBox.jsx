import { IoWarningOutline } from "react-icons/io5"

const AlertBox = ({ message }) => {
  return (
    <div className="w-fit bg-yellow-color px-6 py-4 rounded-xl">
      <div className="flex items-center gap-3">
        <IoWarningOutline size={24} />
        <h3 className="font-bold">تنبيه :</h3>
      </div>
      <p className="text-xl">{message}</p>
    </div>
  )
}

export default AlertBox
