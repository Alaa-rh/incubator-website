import ConsultationRequest from "./ConsultationRequest";

const ConsultantsList = ({ consultants }) => {
  return (
    <div className="grid grid-cols-1 gap-4 mt-6">
      {consultants.map(c => (
        <div key={c.id} className="flex items-center gap-4 p-4  border border-second-color shadow rounded-xl">
          <img src={c.image} className="w-20 h-20 rounded-full" />
          <div className="flex-1">
            <p className="font-bold">{c.name}</p>
            <p className="font-bold">{c.specialty}</p>
            <p className="font-bold">أوقات النشاط: {c.activeTime}</p>
          </div>
          <ConsultationRequest consultant={c} />
        </div>
      ))}
      </div>
  )}
export default ConsultantsList
