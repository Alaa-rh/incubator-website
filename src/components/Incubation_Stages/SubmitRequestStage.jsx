import { useEffect } from "react"

const SubmitRequestStage = ({ onComplete }) => {

  // المرحلة الأولى تنتهي تلقائيًا بمجرد الوصول إليها
 useEffect(() => {
  onComplete()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

  return (
    <div className="bg-white-color h-screen p-6">

      <h2 className="text-2xl font-bold text-second-color m-4">
        تقديم الطلب
      </h2>

      <div className="flex items-center justify-center h-full bg-white border border-main-color p-8 rounded-xl shadow-md">
      <p className="text-gray-600">
        تم استلام طلبك بنجاح، وسيتم نقلك تلقائيًا إلى المرحلة التالية.
      </p>
      </div>
    </div>
  )
}

export default SubmitRequestStage
