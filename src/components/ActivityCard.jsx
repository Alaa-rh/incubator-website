import { RxCountdownTimer } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import Button from "./Button";
const ActivityCard = ({ image, title, status, description, trainer, count, onView }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <p><RxCountdownTimer className="inline-block mx-1 text-second-color"/>{status}</p>
          <p><IoPersonOutline className="inline-block mx-1 text-second-color"/> {count}</p>
        </div>
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <hr className="text-second-color w-full" />
        <div className="flex justify-between text-gray-600">
          <p className="mt-4">{trainer}</p>
          <div className="mt-4 text-end">
          <Button label="عرض التفاصيل" onClick={onView} className="bg-main-color" />
        </div>
        </div>
       
      </div>
    </div>
  )
}
export default ActivityCard