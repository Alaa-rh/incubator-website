import { useNavigate } from "react-router-dom";
import ConsultationRequestBtn from "./ConsultationRequestBtn";
import Button from "./Button";

const ConsultantsList = ({ consultants, role = "user" }) => {
  const navigate = useNavigate();

  const handleDetails = (c) => {
    navigate(`/admin/details/${c.id}?type=${c.type}`);
  };

 
  return (
    <div className="grid grid-cols-1 gap-4 mt-6">
      {consultants.map((c) => (
        <div
          key={c.id}
          className="flex items-center gap-4 p-1 md:p-4 border border-second-color shadow rounded-xl"
        >
          <img src={c.image} className="w-20 h-20 rounded-full" />

          <div className="flex-1">
            <p className="font-bold">{c.name}</p>
            {c.specialty && <p className="font-bold">{c.specialty}</p>}
            {c.activeTime && (
              <p className="font-bold">أوقات النشاط: {c.activeTime}</p>
            )}
          </div>

          {role === "admin" ? (
            <Button
              label="عرض التفاصيل"
              className="bg-main-color"
              onClick={() => handleDetails(c)}
            />
          ) : (
            <ConsultationRequestBtn consultant={c} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ConsultantsList;
