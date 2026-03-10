import { useState } from "react"
import CampStage from "../../components/Stages/CampStage"
import CommitteeStage from "../../components/Stages/CommitteeStage"
import FollowupStage from "../../components/Stages/FollowupStage"
import ExhibitionStage from "../../components/Stages/ExhibitionStage"
import SubmitRequestStage from "../../components/Stages/SubmitRequestStage"
// استيراد الـ Stepper
import Stepper from "../../components/Stepper"

const IncubationStagesPage = () => {
  // المرحلة الحالية (0 → 4)
  const [currentStage, setCurrentStage] = useState(1)

  // الانتقال للمرحلة التالية
  const handleStageComplete = () => {
    setCurrentStage(prev => Math.min(prev + 1, 4))
  }

  // قائمة المراحل
  const stages = [
    <SubmitRequestStage onComplete={handleStageComplete} />,
    <CampStage onComplete={handleStageComplete} />,
    <CommitteeStage onComplete={handleStageComplete} committeeResult={null} />,
    <FollowupStage onComplete={handleStageComplete} notes={[]} allNotesResolved={false} />,
    <ExhibitionStage onComplete={handleStageComplete} />
  ]

  return (
    <div className="bg-white-color h-screen p-6 space-y-8">

      {/* العنوان */}
      <h1 className="text-3xl font-bold text-second-color">
        تابع تقدم مشروعك خلال مراحل الاحتضان من المعسكر حتى المعرض النهائي
      </h1>

      {/* المراحل */}
      <Stepper 
        steps={["تقديم الطلب", "المعسكر", "تقييم اللجنة", "الاحتضان والمتابعة", "المعرض"]} 
        current={currentStage}
        className="mt-4" />

      {/* المرحلة الحالية */}
      <div className="mt-10">
        {stages[currentStage]}
      </div>

    </div>
  )
}

export default IncubationStagesPage
