import Button from "./Button"
const TeamCard = ({ name, email, role, buttonLabel, onButtonClick }) => {
  return (
    <div className="p-6 border border-second-color rounded-xl shadow">
      
      <div className="flex flex-col items-center gap-6 mb-4">
        <p className="font-bold">الاسم: {name}</p>
        <p className="font-bold">البريد الإلكتروني: {email}</p>

        {role && (
          <p className="font-bold">الدور: {role}</p>
        )}
      </div>

      <div className="flex items-center justify-center">
      <Button 
        label={buttonLabel}
        onClick={onButtonClick}
        className="w-50 bg-main-color text-center"
      />
      </div>
    </div>
  )
}

export default TeamCard
