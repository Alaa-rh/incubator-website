import { RxCountdownTimer } from "react-icons/rx";
import { IoPersonOutline } from "react-icons/io5";
import {Button} from "./Button";
const ActivityCard = ({ image, title, status, description, trainer, count, onView }) => {
  return (
    <div className="bg-white rounded shadow overflow-hidden mb-4">
      <img src={image} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4">
        <div className="inline-block px-3 py-1 rounded text-sm mb-2">
          <RxCountdownTimer className="inline-block mr-1 text-second-color"/>
          {status}
        </div>
        <h2 className="text-lg font-bold mb-1">{title}</h2>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <div className="flex justify-between text-sm text-gray-600">
          <p>{trainer}</p>
          <p><IoPersonOutline className="inline-block mr-1 text-second-color"/> {count} </p>
        </div>
        <div className="mt-4 text-end">
          <Button type="button" onClick={onView} className="bg-main-color">عرض التفاصيل</Button>
        </div>
      </div>
    </div>
  )
}
export default ActivityCard